export enum OnSharedEventName {
    onApplicationStart = "application:start",
    onResourceStop = "onResourceStop",
}

export enum OnClientEventName {
    playerSpawned = "playerSpawned"
}

export enum OnServerEventName {
    playerDropped = "playerDropped",
    playerJoin = "playerJoin",
    playerConnecting = "playerConnecting",
    playerSpawn = "playerSpawn",

    characterLoad = "characterLoad",
    characterUnload = "characterUnload"
}