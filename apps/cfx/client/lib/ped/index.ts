import {InjectableTransientScope} from "@core/decorations/injectable";
import {Delay} from "@shared/utils/cfx";
import {isArray} from "@shared/utils/guards/types";

@InjectableTransientScope()
export class Ped {
    private _id: number

    public get id(): number {
        return this._id
    }

    public set id(id: number) {
        this._id = id
    }

    public get coords(): Vector3 {
        return GetEntityCoords(this._id, false)
    }

    public set coords([x, y, z]: Vector3) {
        SetEntityCoords(this._id, x, y, z, false, false, false, false)
    }

    public get heading(): number {
        return GetEntityHeading(this._id)
    }

    public set heading(heading: number) {
        SetEntityHeading(this._id, heading)
    }

    public get health(): number {
        return GetEntityHealth(this._id)
    }

    public set health(health: number) {
        if (this.isDead()) {
            const [x, y, z] = this.coords
            NetworkResurrectLocalPlayer(x, y, z, 0, 0, false)
        }

        SetEntityHealth(this._id, health)
    }

    public get armour(): number {
        return GetPedArmour(this._id)
    }

    public set armour(armour: number) {
        SetPedArmour(this._id, armour)
    }

    public isDead(): boolean {
        return IsEntityDead(this._id)
    }

    public isMp(): boolean {
        const model = GetEntityModel(this._id)
        return model == 1885233650 || model == -1667301416
    }

    public getCustomization(): Customization {

        const fillComponent = (index: number) => {
            return [
                GetPedDrawableVariation(this._id, index),
                GetPedTextureVariation(this._id, index),
                GetPedPaletteVariation(this._id, index)
            ]
        }

        const fillFaceFeature = (index: number) => {
            return GetPedFaceFeature(this._id, index)
        }

        const fillProps = (index: number) => {
            return [GetPedPropIndex(this._id, index), Math.max(GetPedPropTextureIndex(this._id, index), 0)]
        }


        const fillOverlays = (item, index: number) => {
            const [ok, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(this._id, index)

            if (ok) {
                return [overlayValue, overlayOpacity, colourType, firstColour, secondColour]
            }

            return item
        }

        return {
            model: GetEntityModel(this._id),
            components: Array.from({length: 12}, (_, index) => fillComponent(index)),
            faceFeatures: Array.from({length: 20}, (_, index) => fillFaceFeature(index)),
            props: Array.from({length: 8}, (_, index) =>
                (index >= 3 && index <= 5)
                    ? null
                    : fillProps(index)
            ),
            headBlend: [
                Citizen.invokeNative(
                    "0x2746BD9D88C5C5D0",
                    this._id,
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized(),
                    Citizen.pointerValueIntInitialized()
                )
            ],
            overlays: Array.from({length: 13}, (item, index) => fillOverlays(item, index)),
            hairColor: [
                GetPedHairColor(this._id),
                GetPedHairHighlightColor(this._id)
            ],
            eyeColor: GetPedEyeColor(this._id)
        }
    }

    public async setCustomization(customization: Customization) {
        if (customization.model && IsModelAPed(customization.model)) {
            while (!HasModelLoaded(customization.model)) {
                RequestModel(customization.model)
                await Delay(0)
            }


            if (HasModelLoaded(customization.model)) {
                SetPlayerModel(PlayerId(), customization.model)
                this._id = PlayerPedId()
                SetModelAsNoLongerNeeded(customization.model)
            }

            if (IsModelInCdimage(customization.model) && IsModelValid(customization.model)) {
                SetPedComponentVariation(this._id, 0, 0, 0, 2)
            }
        }

        if (customization.props) {
            customization.props.forEach((options, componentId) => {
                if (!isArray(options)) {
                    return
                }

                const [propIndex, textureIndex] = options

                if (propIndex === -1) {
                    ClearPedProp(this._id, componentId)
                } else {
                    SetPedPropIndex(this._id, componentId, propIndex, textureIndex, true)
                }
            })
        }

        if (customization.components) {
            customization.components.forEach(([drawableVariation, textureVariation, paletteVariation], componentId) => {
                SetPedComponentVariation(this._id, componentId, drawableVariation, textureVariation, paletteVariation)
            })
        }

        if (this.isMp()) {
            if (customization.headBlend) {
                const [
                    shapeFirst,
                    shapeSecond,
                    shapeThird,
                    skinFirst,
                    skinSecond,
                    skinThird,
                    shapeMix,
                    skinMix,
                    thirdMix,
                    isParent
                ] = customization.headBlend
                SetPedHeadBlendData(
                    this._id,
                    Number(shapeFirst),
                    Number(shapeSecond),
                    Number(shapeThird),
                    Number(skinFirst),
                    Number(skinSecond),
                    Number(skinThird),
                    Number(shapeMix),
                    Number(skinMix),
                    Number(thirdMix),
                    Boolean(isParent)
                )
            }

            if (customization.overlays) {
                customization.overlays.forEach(([overlayValue, overlayOpacity, colourType, firstColour, secondColour], id) => {
                    SetPedHeadOverlay(this._id, id, overlayValue, overlayOpacity || 1.0)
                    SetPedHeadOverlayColor(this._id, id, colourType, firstColour || 0, secondColour || 0)
                })
            }

            if (customization.faceFeatures) {
                customization.faceFeatures.forEach((scale, id) => {
                    SetPedFaceFeature(this._id, id, scale) // TODO: scale add round
                })
            }
        }

        if (customization.eyeColor) {
            SetPedEyeColor(this._id, customization.eyeColor)
        }

        if (customization.hairColor) {
            const [colorId, highlightColorId] = customization.hairColor
            SetPedHairColor(this._id, colorId || 0, highlightColorId || 0)
        }
    }
}