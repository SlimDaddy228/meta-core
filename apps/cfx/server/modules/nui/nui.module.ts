import {Module} from "@core/decorations/module";
import {NuiMenuProvider} from "./nui.menu.provider";

@Module({
    providers: [NuiMenuProvider]
})
export class NuiModule {
}