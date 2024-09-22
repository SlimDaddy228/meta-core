import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import i18next from "@server/i18"

@Provider()
export class ConnectPlayerProvider {
    @OnEvent({eventName: OnEventName.playerConnecting})
    private onPlayerConnect(name, setKickReason, deferrals) {
        deferrals.defer()

        const greeting = i18next.t("greeting", {name: "test"});
        console.log(greeting, "xui xui xu ixui xui xui xu xui")
        deferrals.update(`Checking test...`)

        setTimeout(() => {
            deferrals.done("eto xueta, poka")
        }, 5000)
    }
}