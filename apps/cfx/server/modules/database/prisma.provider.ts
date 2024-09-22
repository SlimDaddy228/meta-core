import {Provider} from "@core/decorations/provider";
import {Prisma, PrismaClient} from "@server/.prisma";
import {findProcessByFile} from "@shared/utils/process/find-process-by-file";
import {OnEvent} from "@core/decorations/event";
import {OnEventName} from "@shared/types/events";
import {JsPromise} from "@server/.prisma/runtime/library";
import {killProcess} from "@shared/utils/process/kill-process";
import {Inject} from "@core/decorations/injectable";
import {Logger} from "@core/logger";

@Provider()
export class PrismaProvider extends PrismaClient<Prisma.PrismaClientOptions, "query" | "error" | "warn" | "info"> {
    private readonly windowsEngineName = "query-engine-windows.exe"

    private readonly slowDuration = 50

    private processId: string | null = null;

    @Inject(Logger)
    private logger: Logger;

    constructor() {
        super({
            log: [
                {emit: "event", level: "warn"},
                {emit: "event", level: "error"},
                {emit: "event", level: "info"},
                {emit: "event", level: "query"},
            ]
        })
        this.createLogs()
    }

    @OnEvent({eventName: OnEventName.onResourceStop})
    public onStop() {
        this.$disconnect()
    }

    public override $disconnect(): JsPromise<void> {
        if (this.processId) {
            killProcess(this.processId);
            this.setProcessId(null)
        }

        this.logger.info(this.generateLogText("Database has disconnected"));

        return super.$disconnect();
    }

    private setProcessId(id: string | null): void {
        this.processId = id;
    }

    @OnEvent({eventName: OnEventName.onResourceStart})
    private async createConnection() {
        try {
            this.logger.info(this.generateLogText("Start connection to database..."))
            await this.$connect()
            this.logger.info(this.generateLogText("Connection to database is sucessfully..."))

            const pid = await findProcessByFile(this.windowsEngineName);

            this.setProcessId(pid)
        } catch (e) {
            this.logger.error(this.generateLogText(e))
            this.$disconnect()
        }
    }


    private generateLogText(message: string): string {
        return `[prisma]: ${message}`
    }

    private createLogs() {
        this.$on("query", ({params, duration, query}) => {
            if (duration >= this.slowDuration) {
                this.logger.warn(this.generateLogText(`[slow query] [${duration}ms] ${query.trim()} ${params} `));
            } else {
                this.logger.debug(this.generateLogText(`[${duration}ms] ${query.trim()} ${params}`));
            }
        });
        this.$on("error", ({target, message}) => this.logger.error(this.generateLogText(`[${target}] ${message}`)));
        this.$on("warn", ({target, message}) => this.logger.warn(this.generateLogText(`[${target}] ${message}`)));
        this.$on("info", ({target, message}) => this.logger.info(this.generateLogText(`[${target}] ${message}`)));
    }
}