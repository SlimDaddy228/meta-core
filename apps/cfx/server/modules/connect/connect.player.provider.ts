import {Provider} from "@core/decorations/provider";
import {OnEvent} from "@core/decorations/event";
import {OnServerEventName} from "@shared/types/events";
import {translate} from "@server/i18"
import {Inject} from "@core/decorations/injectable";
import {Logger} from "@core/logger";
import {UserProvider} from "@server/modules/user/user.provider";
import {User} from "@server/user";
import {UserIdStateProvider} from "@server/modules/user/user.state.id";
import {UserSourceStateProvider} from "@server/modules/user/user.state.source";
import {UserPendingStateProvider} from "@server/modules/user/user.state.pending";
import {Tunnel} from "@core/decorations/tunnel";
import {ConnectPlayerProviderServerRemote} from "@server/modules/types/connect/connect.player.provider";
import {Container} from "@core/container";
import {UserCharacterLoadedState} from "@server/user/character";


@Provider()
export class ConnectPlayerProvider implements ConnectPlayerProviderServerRemote {
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

    @Tunnel()
    public onPlayerSpawn() {
        console.log("player spawn")
    }

    private unloadPlayer(source: number) {
        const identifiers = this.getPlayerIdentifiers(source.toString())
        const pendingId = identifiers.join(":")
        let user = this.userSourceStateProvider.getUser(source)

        if (!user) {
            user = this.userPendingStateProvider.getUser(pendingId)
        }

        if (user) {
            this.userIdStateProvider.removeUser(user.state.id)
            this.userSourceStateProvider.removeUser(user.state.source)
            this.userPendingStateProvider.removeUser(pendingId)

            this.logger.debug(`${user.state.name} (${user.state.endpoint}): (user_id = ${user.state.id}) disconnect`)
        }
    }

    @OnEvent({eventName: OnServerEventName.playerConnecting})
    private async onPlayerConnect(name: string, _, deferrals) {
        try {
            deferrals.defer()
            const player = global.source

            deferrals.update(translate("connect:loading"))

            const identifiers = this.getPlayerIdentifiers(player.toString())

            if (identifiers.length === 0) {
                const info = translate("connect:identifiers_not_found", {playerName: name});
                this.logger.warn(info)
                return deferrals.done(info)
            }

            deferrals.update(translate("connect:get_user_id_by_identifiers"))
            const userId = await this.userProvider.getIdByIdentifier(identifiers)

            if (!userId) {
                const info = translate("connect:error_identifiers", {playerName: name});
                this.logger.warn(info)
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

            const userData = await this.userProvider.get(userId)
            const user = Container.get(User)

            user.state.source = player
            user.state.id = userId
            user.state.name = name
            user.state.endpoint = GetPlayerEndpoint(player.toString())
            user.state.selectCharacter = userData.character_select

            this.userIdStateProvider.addUser(userId, user)
            this.userSourceStateProvider.addUser(player, user)
            this.userPendingStateProvider.addUser(identifiers.join(":"), user)

            const hasLoadedCharacter = await user.character.use(user.state.selectCharacter)

            if (hasLoadedCharacter === UserCharacterLoadedState.INVALID_CHARACTER) {
                const info = translate("connect:character_created_error");
                this.logger.warn(info)
                return deferrals.done(info)
            }

            if (hasLoadedCharacter === UserCharacterLoadedState.NO_CREATED_CHARACTERS) {
                const createdCharacter = await user.character.create()

                const result = await user.character.use(createdCharacter.id)

                if (result !== UserCharacterLoadedState.SUCCESS_LOADED) {
                    const info = translate("connect:character_created_error");
                    this.logger.warn(info)
                    return deferrals.done(info)
                }
            }

            this.logger.debug(`${name} (${user.state.endpoint}): (user_id = ${userId}) join`)
            emit(OnServerEventName.playerJoin)

            deferrals.update(translate("connect:success_loaded"))

            deferrals.done("123")
        } catch (error) {
            const info = translate("connect:unknown_reject");
            this.logger.error(info, error)
            deferrals.done(info)
        }
    }
}