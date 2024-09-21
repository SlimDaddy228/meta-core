import {Provider} from "@core/decorations/provider";
import {Remote} from "@core/decorations/remote";
import {NuiMenuProviderClientRemote} from "@client/modules/types/nui";
import {ClientRemote} from "@shared/types/remote-builder";
import {NuiMenuProviderServerRemote} from "@server/modules/types/nui";
import {Tunnel} from "@core/decorations/tunnel";

@Provider()
export class NuiMenuProvider implements NuiMenuProviderServerRemote {
    @Remote()
    private readonly remote: ClientRemote<NuiMenuProviderClientRemote>

    constructor() {
        setInterval(async () => {
            const clientResult = await this.remote.createPrint(1)
            console.log(clientResult, ":DATA_FROM_CLIENT")
        }, 1000)
    }

    @Tunnel()
    public await(message: string) {
        return "to-to-to" + message
    }
}