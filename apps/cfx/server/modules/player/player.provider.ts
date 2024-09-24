import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnServerEventName} from "@shared/types/events";
import {Inject} from "@core/decorations/injectable";
import {UserSourceStateProvider} from "@server/modules/user/user.state.source";
import {Tunnel} from "@core/decorations/tunnel";
import {PlayerProviderServerRemote, PlayerProviderUpdateOptions} from "@server/modules/types/player";
import {PrismaProvider} from "@server/modules/database/prisma.provider";
import {Remote} from "@core/decorations/remote";
import {ClientRemote} from "@shared/types/remote-builder";
import {PlayerProviderClientRemote} from "@client/modules/types/player";

@Provider()
export class PlayerProvider implements PlayerProviderServerRemote {
    @Inject(PrismaProvider)
    private readonly prismaProvider: PrismaProvider

    @Inject(UserSourceStateProvider)
    private userSourceStateProvider: UserSourceStateProvider

    @Remote()
    private remote: ClientRemote<PlayerProviderClientRemote>

    @Tunnel()
    public async update({status}: PlayerProviderUpdateOptions) {
        const source = global.source
        const user = this.userSourceStateProvider.getUser(source)

        if (user) {
            await this.prismaProvider.characters.update({
                where: {
                    id: user.character.state.id
                },
                data: {
                    status: {
                        update: status
                    }
                }
            })
        }
    }

    @OnEvent({eventName: OnServerEventName.playerSpawn})
    private async onPlayerSpawn(source: PlayerSource) {
        const user = this.userSourceStateProvider.getUser(source)

        if (user) {
            const status = await this.prismaProvider.characterStatus.findUnique({where: {character_id: user.character.state.id}})

            const coords = [status.positionX, status.positionY, status.positionZ]
            this.remote._setCoords(user.state.source, coords)
            this.remote._setHeading(user.state.source, status.heading)
            this.remote._setHealth(user.state.source, status.health)
            this.remote._setArmour(user.state.source, status.armour)
        }
    }
}