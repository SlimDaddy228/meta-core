import {Prisma} from "@server/.prisma";

export type PlayerProviderUpdateOptions = {
    status: Prisma.CharacterStatusUpdateInput
}

export interface PlayerProviderServerRemote {
    update(status: PlayerProviderUpdateOptions): void
}