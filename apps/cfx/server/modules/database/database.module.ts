import {Module} from "@core/decorations/module";
import {PrismaProvider} from "@server/modules/database/prisma.provider";

@Module({
    providers: [PrismaProvider],
})
export class DatabaseModule {
}