import {getInterface} from "@core/tunnel";

export const Remote = (): PropertyDecorator => {
    return (target, propertyKey) => {
        const interfaceInstance = getInterface(target.constructor.name)
        Object.defineProperty(target, propertyKey, {
            value: interfaceInstance,
            writable: false,
        });
    };
};