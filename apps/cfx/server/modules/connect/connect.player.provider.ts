import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import {translate} from "@server/i18"
import {Inject} from "@core/decorations/injectable";
import {Logger} from "@core/logger";
import {PrismaProvider} from "@server/modules/database/prisma.provider";

type Identifiers = string[]

@Provider()
export class ConnectPlayerProvider {
    @Inject(Logger)
    private logger: Logger;

    @Inject(PrismaProvider)
    private prismaProvider: PrismaProvider;

    public getPlayerIdentifiers(source: string): Identifiers {
        const identifiers: Identifiers = [];

        for (let i = 0; i < GetNumPlayerIdentifiers(source); i++) {
            const identifier = GetPlayerIdentifier(source, i);
            identifiers.push(identifier);
        }

        return identifiers
    }

    private async createUser(identifiers: Identifiers) {
        const createdUser = await this.prismaProvider.users.create({
            data: {
                banned: false,
                whitelisted: false,
                character_select: 1
            }
        })

        for (const identifier of identifiers) {
            await this.prismaProvider.userIds.create({
                data: {
                    identifier,
                    user_id: createdUser.id
                }
            })
        }

        return createdUser
    }

    private async getUserIdByIdentifier(identifiers: Identifiers) {
        for (const identifier of identifiers) {
            if (!identifier.includes(":ip")) {
                const result = await this.prismaProvider.userIds.findFirst({
                    where: {
                        identifier
                    }
                })
                if (result) {
                    return result.user_id
                }
            }
        }

        const createdUser = await this.createUser(identifiers);

        return createdUser.id
    }

    @OnEvent({eventName: OnEventName.playerConnecting})
    private async onPlayerConnect(name, _, deferrals) {
        try {
            deferrals.defer()
            const player = global.source

            deferrals.update(translate("connect:loading"))

            const identifiers = this.getPlayerIdentifiers(String(player))

            if (identifiers.length === 0) {
                const info = translate("connect:identifiers_not_found", {playerName: name});
                this.logger.debug(info)
                return deferrals.done(info)
            }

            deferrals.update(translate("connect:get_user_id_by_identifiers"))
            const userId = await this.getUserIdByIdentifier(identifiers)

            if (!userId) {
                const info = translate("connect:error_identifiers", {playerName: name});
                this.logger.debug(info)
                return deferrals.done()
            }

            deferrals.update(translate("connect:checking_whitelist"))

            deferrals.update(translate("connect:checking_bans"))

            deferrals.done("qq")
        } catch (error) {
            const info = translate("connect:unknown_reject");
            this.logger.warn(info, error)
            deferrals.done(info)
        }
    }
}