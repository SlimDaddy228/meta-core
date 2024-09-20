import {Injectable} from "@core/decorations/injectable";
import {generateEventId} from "@shared/utils/generate-event-id";

export type ProviderMetadata = {
    name?: string;
};

export const ProviderMetadataKey = generateEventId('inversify:provider');

export const Provider = (options?: ProviderMetadata): ClassDecorator => {
    return target => {
        options ||= {};
        options.name ||= target.name;
        Reflect.defineMetadata(ProviderMetadataKey, options, target.prototype);
        Reflect.decorate([Injectable()], target);
    };
};