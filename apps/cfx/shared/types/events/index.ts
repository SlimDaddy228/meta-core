export enum OnSharedEventName {
    onResourceStart = "start",
    onResourceStop = "onResourceStop",
}

export enum OnClientEventName {
    playerSpawned = "playerSpawned"
}

export enum OnServerEventName {
    playerDropped = "playerDropped",
    playerJoin = "playerJoin",
    playerConnecting = "playerConnecting",

    characterLoad = "characterLoad",
    characterUnload = "characterUnload"
}