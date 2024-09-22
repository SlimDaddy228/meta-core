import {Module} from "@core/decorations/module";
import {ConnectPlayerProvider} from "@client/modules/connect/connect.player.provider";

@Module({
    providers: [ConnectPlayerProvider]
})
export class ConnectModule {
}