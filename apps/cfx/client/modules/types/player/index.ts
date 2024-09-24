export interface PlayerProviderClientRemote {
    setHealth(health: number): void

    getHealth(): number

    setCoords(coords: Vector3): void

    getCoords(): Vector3

    setHeading(heading: number): void

    getHeading(): number

    setArmour(armour: number): void

    getArmour(): number
}