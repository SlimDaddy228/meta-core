import {Module} from "@core/decorations/module";
import {PlayerProvider} from "@client/modules/player/player.provider";


@Module({
    providers: [PlayerProvider]
})
export class PlayerModule {
}