import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import {Provider} from "@core/decorations/provider";
import {Remote} from "@core/decorations/remote";
import {ServerRemote} from "@shared/types/remote-builder";
import {ConnectPlayerProviderServerRemote} from "@server/modules/types/connect/connect.player.provider";

@Provider({})
export class ConnectPlayerProvider {
    @Remote()
    private remote: ServerRemote<ConnectPlayerProviderServerRemote>

    @OnEvent({eventName: OnEventName.playerSpawned})
    private onPlayerSpawned() {
        this.remote.onPlayerSpawn()
    }
}