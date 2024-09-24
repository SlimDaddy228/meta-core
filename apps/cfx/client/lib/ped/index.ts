import {InjectableTransientScope} from "@core/decorations/injectable";

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
}