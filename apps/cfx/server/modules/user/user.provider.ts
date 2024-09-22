import {Provider} from "@core/decorations/provider";
import {Inject} from "@core/decorations/injectable";
import {PrismaProvider} from "@server/modules/database/prisma.provider";

@Provider()
export class UserProvider {
    @Inject(PrismaProvider)
    private prismaProvider: PrismaProvider;

    public async create(identifiers: string[]) {
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

    public async getIdByIdentifier(identifiers: string[]) {
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

        const createdUser = await this.create(identifiers);

        return createdUser.id
    }

    public async isBanned(id: number): Promise<boolean> {
        const result = await this.prismaProvider.users.findFirst({
            where: {
                id
            }
        })

        return result.banned
    }

    public async isWhitelisted(id: number): Promise<boolean> {
        const result = await this.prismaProvider.users.findFirst({
            where: {
                id
            }
        })

        return result.whitelisted
    }
}