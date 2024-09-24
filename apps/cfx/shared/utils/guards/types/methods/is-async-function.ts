export function isAsyncFunction(fn: Function): boolean {
    return fn.constructor.name === "AsyncFunction";
}