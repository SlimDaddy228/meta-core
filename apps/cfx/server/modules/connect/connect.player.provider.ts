import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import {translate} from "@server/i18"

@Provider()
export class ConnectPlayerProvider {
    @OnEvent({eventName: OnEventName.playerConnecting})
    private onPlayerConnect(name, setKickReason, deferrals) {
        deferrals.defer()

        deferrals.update(translate("connect:loading"))

        setTimeout(() => {
            deferrals.done(translate("connect:unknown_reject"))
        }, 5000)
    }
}