import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnServerEventName} from "@shared/types/events";
import {Inject} from "@core/decorations/injectable";
import {UserSourceStateProvider} from "@server/modules/user/user.state.source";

@Provider()
export class PlayerProvider {
    @Inject(UserSourceStateProvider)
    private userSourceStateProvider: UserSourceStateProvider

    @OnEvent({eventName: OnServerEventName.playerSpawn})
    private onPlayerSpawn(source: PlayerSource) {
        const user = this.userSourceStateProvider.getUser(source)

        if (user) {
            console.log(source, user.state.id, "user spawned")
        }
    }
}