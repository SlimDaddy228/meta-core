import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import {translate} from "@server/i18"
import {Inject} from "@core/decorations/injectable";
import {Logger} from "@core/logger";
import {UserProvider} from "@server/modules/user/user.provider";
import {User} from "@server/user";
import {UserIdStateProvider} from "@server/modules/user/user.state.id";
import {UserSourceStateProvider} from "@server/modules/user/user.state.source";
import {UserPendingStateProvider} from "@server/modules/user/user.state.pending";


@Provider()
export class ConnectPlayerProvider {
    @Inject(Logger)
    private logger: Logger;

    @Inject(UserProvider)
    private userProvider: UserProvider;

    @Inject(UserIdStateProvider)
    private userIdStateProvider: UserIdStateProvider

    @Inject(UserSourceStateProvider)
    private userSourceStateProvider: UserSourceStateProvider

    @Inject(UserPendingStateProvider)
    private userPendingStateProvider: UserPendingStateProvider

    public getPlayerIdentifiers(source: string): string[] {
        const identifiers: string[] = [];

        for (let i = 0; i < GetNumPlayerIdentifiers(source); i++) {
            const identifier = GetPlayerIdentifier(source, i);
            identifiers.push(identifier);
        }

        return identifiers
    }

    private unloadPlayer(source: number) {
        const identifiers = this.getPlayerIdentifiers(String(source))
        const pendingId = identifiers.join(":")
        let user = this.userSourceStateProvider.getUser(source)

        if (!user) {
            user = this.userPendingStateProvider.getUser(pendingId)
        }

        if (user) {
            this.userIdStateProvider.removeUser(user.id)
            this.userSourceStateProvider.removeUser(user.source)
            this.userPendingStateProvider.removeUser(pendingId)

            this.logger.debug(`${user.name} (${user.endpoint}): (user_id = ${user.id}) disconnect`)
        }
    }

    @OnEvent({eventName: OnEventName.playerConnecting})
    private async onPlayerConnect(name: string, _, deferrals) {
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
            const userId = await this.userProvider.getIdByIdentifier(identifiers)

            if (!userId) {
                const info = translate("connect:error_identifiers", {playerName: name});
                this.logger.debug(info)
                return deferrals.done(info)
            }

            deferrals.update(translate("connect:checking_whitelist"))
            const isWhitelisted = await this.userProvider.isWhitelisted(userId)

            if (!isWhitelisted) {
                const info = translate("connect:not_whitelisted", {userId});
                this.logger.debug(info)
                return deferrals.done(info)
            }

            deferrals.update(translate("connect:checking_bans"))
            const isBanned = await this.userProvider.isBanned(userId)

            if (isBanned) {
                const info = translate("connect:is_banned", {userId});
                this.logger.debug(info)
                return deferrals.done(info)
            }

            if (this.userIdStateProvider.getUser(userId)) {
                this.unloadPlayer(player)

                const info = translate("connect:character_has_loaded", {userId});
                this.logger.debug(info)

                return deferrals.done(info)
            }

            const user = new User(player, userId)

            user.name = name
            user.endpoint = GetPlayerEndpoint(String(player))

            this.userIdStateProvider.addUser(userId, user)
            this.userSourceStateProvider.addUser(player, user)
            this.userPendingStateProvider.addUser(identifiers.join(":"), user)

            this.logger.debug(`${name} (${user.endpoint}): (user_id = ${userId}) join`)
            emit(OnEventName.playerJoin)

            deferrals.done(`connect success ${player}`)
        } catch (error) {
            const info = translate("connect:unknown_reject");
            this.logger.warn(info, error)
            deferrals.done(info)
        }
    }
}