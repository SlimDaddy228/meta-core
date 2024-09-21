import {Provider} from "@core/decorations/provider";
import {Tunnel} from "@core/decorations/tunnel";
import {NuiMenuProviderClientRemote} from "@client/modules/types/nui";
import {Remote} from "@core/decorations/remote";
import {ServerRemote} from "@shared/types/remote-builder";
import {NuiMenuProviderServerRemote} from "@server/modules/types/nui";

@Provider()
export class NuiMenuProvider implements NuiMenuProviderClientRemote {
    @Remote()
    private readonly remote: ServerRemote<NuiMenuProviderServerRemote>

    constructor() {
        setInterval(async () => {
            const serverResult = await this.remote.await("232")
            console.log(serverResult, ":DATA_FROM_SERVER")
        }, 1000)
    }

    @Tunnel()
    public createPrint() {
        return "123"
    }
}