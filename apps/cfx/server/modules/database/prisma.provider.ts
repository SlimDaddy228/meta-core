import {Provider} from "@core/decorations/provider";
import {Prisma, PrismaClient} from "@server/.prisma";
import {findProcessByFile} from "@shared/utils/process/find-process-by-file";
import {killProcess} from "@shared/utils/process/kill-process";

@Provider()
export class PrismaProvider extends PrismaClient<Prisma.PrismaClientOptions, "query" | "error" | "warn" | "info"> {
    constructor() {
        super()
        this.initialization()
    }

    async initialization() {
        try {
            await this.$connect()
            console.log("prisma connect success")

            console.log(await this.admins.create({}))

            const fileName = "query-engine-windows.exe";
            const pid = await findProcessByFile(fileName);

            console.log("create pid: ", pid)
            on("onResourceStop", async (resName: string) => {
                if (resName === GetCurrentResourceName()) {
                    console.log("disconnect database")
                    this.$disconnect()
                    killProcess(pid)
                }
            });
        } catch (e) {
            console.log(e)
            this.$disconnect()
        }
    }
}