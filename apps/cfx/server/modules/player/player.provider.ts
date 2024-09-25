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
    public async update({status, customization}: PlayerProviderUpdateOptions) {
        const source = global.source
        const user = this.userSourceStateProvider.getUser(source)

        if (user) {
            await this.prismaProvider.characters.update({
                where: {
                    id: user.character.state.id
                },
                data: {
                    status: {
                        update: status,
                    },
                    customization: {
                        update: {
                            ...customization,
                            overlays: JSON.stringify(customization.overlays),
                            headBlend: JSON.stringify(customization.headBlend),
                            faceFeatures: JSON.stringify(customization.faceFeatures),
                            components: JSON.stringify(customization.components),
                            hairColor: JSON.stringify(customization.hairColor),
                            props: JSON.stringify(customization.props)
                        }
                    }
                }
            })
        }
    }

    @OnEvent({eventName: OnServerEventName.playerSpawn})
    private async onPlayerSpawn(source: PlayerSource) {
        const user = this.userSourceStateProvider.getUser(source)

        if (user) {
            const {customization, status} = await this.prismaProvider.characters.findUnique({
                where: {id: user.character.state.id},
                select: {
                    status: true,
                    customization: true,
                }
            })

            const coords = [status.positionX, status.positionY, status.positionZ]

            await this.remote.setCustomization(user.state.source, {
                model: customization.model,
                eyeColor: customization.eyeColor,
                overlays: JSON.parse(customization.overlays as string),
                headBlend: JSON.parse(customization.headBlend as string),
                faceFeatures: JSON.parse(customization.faceFeatures as string),
                components: JSON.parse(customization.components as string),
                hairColor: JSON.parse(customization.hairColor as string),
                props: JSON.parse(customization.props as string)
            })
            this.remote._setCoords(user.state.source, coords)
            this.remote._setHeading(user.state.source, status.heading)
            this.remote._setHealth(user.state.source, status.health)
            this.remote._setArmour(user.state.source, status.armour)
        }
    }
}