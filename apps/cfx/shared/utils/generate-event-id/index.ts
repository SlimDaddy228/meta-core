export const generateEventId = (...args: string[]): string => {
    return `${GetCurrentResourceName()}:${args.join(":")}`;
}