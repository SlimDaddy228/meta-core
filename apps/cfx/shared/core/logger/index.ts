import {Inject, Injectable} from "@core/decorations/injectable";

enum LogColor {
    Red = 1,
    Green = 2,
    Yellow = 3,
    Blue = 4,
    Magenta = 5,
    Cyan = 6,
    White = 7,
}

export enum LogLevel {
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Success = "SUCCESS",
}

const LogLevelOrder: Record<LogLevel, number> = {
    [LogLevel.Debug]: 0,
    [LogLevel.Info]: 1,
    [LogLevel.Warn]: 2,
    [LogLevel.Error]: 3,
    [LogLevel.Success]: 4,
};

export const shouldLog = (level: LogLevel, minLevel: LogLevel): boolean => {
    return LogLevelOrder[level] >= LogLevelOrder[minLevel];
};

export interface LogHandler {
    write(level: LogLevel, ...message: string[]): void;
}

@Injectable()
export class LogConsoleHandler implements LogHandler {
    private readonly level: LogLevel = LogLevel.Debug;

    public constructor() {
        // TODO: add env for production, and add correct condition
        const hasProduction = false
        if (hasProduction) {
            this.level = LogLevel.Info;
        }
    }

    public write(level: LogLevel, ...message: string[]): void {
        if (shouldLog(level, this.level)) {
            console.log(this.format(levelToColors[level], ...message));
        }
    }

    private format(color: LogColor, ...message: string[]): string {
        return `^${color.valueOf().toString()}[${new Date().toISOString()}] ${message.join(" ")}^7`;
    }
}

@Injectable()
export class LogChainHandler implements LogHandler {
    private handlers: LogHandler[] = [];

    public constructor(@Inject(LogConsoleHandler) consoleHandler: LogConsoleHandler) {
        this.handlers.push(consoleHandler);
    }

    public addHandler(handler: LogHandler): void {
        this.handlers.push(handler);
    }

    public write(level: LogLevel, ...message: string[]): void {
        for (const handler of this.handlers) {
            handler.write(level, ...message);
        }
    }
}

const levelToColors = {
    [LogLevel.Debug]: LogColor.White,
    [LogLevel.Info]: LogColor.Blue,
    [LogLevel.Warn]: LogColor.Yellow,
    [LogLevel.Error]: LogColor.Red,
    [LogLevel.Success]: LogColor.Green,
};

@Injectable()
export class Logger {
    @Inject(LogChainHandler)
    private handler: LogChainHandler;

    public info(...message: string[]): void {
        this.write(LogLevel.Info, ...message);
    }

    public debug(...message: string[]): void {
        this.write(LogLevel.Debug, ...message);
    }

    public warn(...message: string[]): void {
        this.write(LogLevel.Warn, ...message);
    }

    public error(...message: string[]): void {
        this.write(LogLevel.Error, ...message);
    }

    public success(...message: string[]): void {
        this.write(LogLevel.Success, ...message);
    }

    public log(level: LogLevel, ...message: string[]): void {
        this.write(level, ...message);
    }

    private write(level: LogLevel, ...message: string[]) {
        this.handler.write(level, ...message);
    }
}

export const StaticLogger = new Logger();