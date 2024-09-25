import {Prisma} from "@server/.prisma";

export type PlayerProviderUpdateOptions = {
    status: Prisma.CharacterStatusUpdateInput
    customization: Customization
}

export interface PlayerProviderServerRemote {
    update(status: PlayerProviderUpdateOptions): void
}