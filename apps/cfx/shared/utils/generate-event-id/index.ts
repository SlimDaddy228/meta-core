export const generateEventId = (resourceName = 'meta-core', ...args: string[]): string => {
    return `${resourceName}:${args.join(':')}`;
}