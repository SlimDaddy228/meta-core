import {Provider} from "@core/decorations/provider";
import {Tunnel} from "@core/decorations/tunnel";

@Provider()
export class NuiMenuProvider {
    @Tunnel()
    public createPrint(message: string) {
        console.log(message)
    }
}