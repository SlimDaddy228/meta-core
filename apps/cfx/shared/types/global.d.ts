import {Prisma} from "@server/.prisma";

declare global {
    type Vector3 = number[]
    
    type UserId = Prisma.$UsersPayload["scalars"]["id"]
    type UserName = string | null
    type UserEndpoint = string | null
    type UserSelectCharacter = Prisma.$UsersPayload["scalars"]["character_select"]

    type CharacterId = Prisma.$CharactersPayload["scalars"]["id"]
    type CharacterStatus = Prisma.$CharacterStatusPayload["scalars"]
    type CharacterCustomization = Prisma.$CharacterCustomizationPayload["scalars"]

    type PlayerSource = typeof global.source
}

export {}