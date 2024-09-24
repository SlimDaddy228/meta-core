import {isFunction} from "./is-function";
import {isObject} from "./is-object";

export function isPromise(value: unknown): value is PromiseLike<unknown> {
    return Boolean(value && isObject(value) && "then" in value && isFunction(value.then));
}