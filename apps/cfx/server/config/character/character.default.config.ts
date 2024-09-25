import {Prisma} from "@server/.prisma";

const initialCustomization: Omit<Prisma.CharacterCustomizationCreateInput, "character"> = {
    model: GetHashKey("mp_m_freemode_01"),
    components: JSON.stringify(
        Array.from({length: 12}, () => [0, 0, 0])
    ),
    faceFeatures: JSON.stringify(
        Array(20).fill(0.0)
    ),
    props: JSON.stringify(
        Array.from({length: 8}, (_, i) =>
            (i >= 3 && i <= 5)
                ? null
                : [-1, 0]
        )
    ),
    headBlend: JSON.stringify(
        [0, 0, 0, 0, 0, 0, 0.0, 0.0, 0.0, 0]
    ),
    overlays: JSON.stringify(
        Array.from({length: 13}, (_, i) => {
            if ([1, 2, 10].includes(i)) {
                return [255, 1.0, 1, 0, 0];
            } else if ([5, 8].includes(i)) {
                return [255, 1.0, 2, 0, 0];
            } else {
                return [255, 1.0, 0, 0, 0];
            }
        })
    ),
    eyeColor: 0,
    hairColor: JSON.stringify([0, 0])
}


const initialStatus: Omit<Prisma.CharacterStatusCreateInput, "character"> = {
    armour: 0,
    heading: 0.0,
    health: 100,
    positionX: -1496.912109375,
    positionY: -2982.8540039062,
    positionZ: -82.207237243652,
}

const initialStates = {
    status: initialStatus,
    customization: initialCustomization
}

export const CHARACTER_DEFAULT_CONFIG = {
    initialStates
}