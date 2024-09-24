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

    @Tunnel()
    public createPrint() {
        return "123"
    }
}