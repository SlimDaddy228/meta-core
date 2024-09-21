import {Provider} from "@core/decorations/provider";
import {Tunnel} from "@core/decorations/tunnel";

@Provider()
export class NuiMenuProvider {
    @Tunnel()
    public test(message: string) {
        console.log(message, "message from test")
    }

    @Tunnel()
    public createPrint(message: string) {
        console.log(message, "message from test")
        return "value for server"
    }
}