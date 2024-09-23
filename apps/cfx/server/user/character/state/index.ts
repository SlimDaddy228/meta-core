import {Inject, InjectableRequestScope} from "@core/decorations/injectable";
import {PrismaProvider} from "@server/modules/database/prisma.provider";
import {CHARACTER_DEFAULT_CONFIG} from "@server/config/character/character.default.config";

@InjectableRequestScope()
export class CharacterState {
    @Inject(PrismaProvider)
    private readonly prismaProvider: PrismaProvider

    private _id: CharacterId = null

    public get id(): CharacterId {
        return this._id
    }

    public set id(id: CharacterId) {
        this._id = id
    }

    public async load() {
        await this.prismaProvider.characterStatus.upsert({
            where: {
                character_id: this._id
            },
            update: {},
            create: {
                ...CHARACTER_DEFAULT_CONFIG.initialStates.status,
                character: {
                    connect: {
                        id: this._id,
                    }
                }
            }
        })
        await this.prismaProvider.characterCustomization.upsert({
            where: {
                character_id: this._id
            },
            update: {},
            create: {
                ...CHARACTER_DEFAULT_CONFIG.initialStates.customization,
                character: {
                    connect: {
                        id: this._id
                    }
                }
            }
        })
    }
}