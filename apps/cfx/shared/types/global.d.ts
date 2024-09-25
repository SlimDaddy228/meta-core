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

    type Todo = any

    type ConvertSpecificFields<T, Fields> = {
        [K in keyof T]: K extends keyof Fields ? Fields[K] : T[K];
    };

    type ConvertFields = {
        components: number[][]
        faceFeatures: number[]
        props: number[][]
        headBlend: number[]
        hairColor: number[]
        overlays: number[][]
    }

    export type Customization = ConvertSpecificFields<Omit<
        CharacterCustomization,
        "id" | "character_id" | "createdAt" | "updatedAt"
    >, ConvertFields>
}

export {}