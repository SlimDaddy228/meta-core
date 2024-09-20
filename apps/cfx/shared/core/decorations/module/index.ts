import {Injectable} from "@shared/core/decorations/injectable";
import {generateEventId} from "@shared/utils/generate-event-id";

export type ModuleMetadata = {
    name?: string;
    providers?: any[];
    services?: any[];
};

export const ModuleMetadataKey = generateEventId('inversify:module');

export const Module = (options: ModuleMetadata): ClassDecorator => {
    return target => {
        options.name ||= target.name;
        options.providers ||= [];
        options.services ||= [];

        Reflect.defineMetadata(ModuleMetadataKey, options, target.prototype);
        Reflect.decorate([Injectable()], target);
    };
};