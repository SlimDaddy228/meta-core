import {Prisma} from "@server/.prisma";

declare global {
    type UserId = Prisma.$UsersPayload["scalars"]["id"]
    type UserName = string | null
    type UserEndpoint = string | null
    type UserSelectCharacter = Prisma.$UsersPayload["scalars"]["character_select"]

    type CharacterId = Prisma.$CharactersPayload["scalars"]["id"]

    type PlayerSource = typeof global.source
}

export {}

