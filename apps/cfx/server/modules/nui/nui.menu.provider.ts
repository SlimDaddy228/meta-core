import {Provider} from "@core/decorations/provider";
import {getInterface} from "@core/tunnel";

@Provider()
export class NuiMenuProvider {
    constructor() {
        setInterval(async () => {
            const remote = getInterface("NuiMenuProvider") as any
            console.log(await remote.createPrint(1, "test1"))
        }, 1000)
    }
}