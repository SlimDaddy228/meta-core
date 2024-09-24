import {Inject, InjectableRequestScope} from "@core/decorations/injectable";
import {PrismaProvider} from "@server/modules/database/prisma.provider";
import {OnServerEventName} from "@shared/types/events";
import {UserState} from "@server/user/state";
import {CharacterState} from "@server/user/character/state";

export enum UserCharacterLoadedState {
    SUCCESS_LOADED = 1,
    NO_CREATED_CHARACTERS = 2,
    INVALID_CHARACTER = 3,
}

@InjectableRequestScope()
export class UserCharacter {
    @Inject(CharacterState)
    public readonly state: CharacterState

    @Inject(PrismaProvider)
    private readonly prismaProvider: PrismaProvider

    @Inject(UserState)
    private readonly userState: UserState

    public async getAll() {
        return this.prismaProvider.characters.findMany({
            where: {
                user_id: this.userState.id
            }
        });
    }

    public async getById(
        id: CharacterId
    ) {
        return this.prismaProvider.characters.findFirst({
            where: {
                user_id: this.userState.id,
                id
            }
        })
    }

    public async create() {
        return this.prismaProvider.characters.create({
            data: {
                user_id: this.userState.id,
            }
        })
    }

    public async use(id: CharacterId): Promise<UserCharacterLoadedState> {
        try {
            const character = await this.getById(id)

            if (character) {
                this.state.id = character.id

                if (this.state.id !== this.userState.selectCharacter) {
                    this.userState.selectCharacter = this.state.id
                }

                await this.state.load()
                emit(OnServerEventName.characterLoad)

                return UserCharacterLoadedState.SUCCESS_LOADED
            }

            return UserCharacterLoadedState.NO_CREATED_CHARACTERS
        } catch {
            return UserCharacterLoadedState.INVALID_CHARACTER
        }
    }
}