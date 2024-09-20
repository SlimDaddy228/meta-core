import {generateEventId} from "@shared/utils/generate-event-id";
import {setMethodMetadata} from "@shared/utils/reflect/method";

export type TunnelMethodMetadata = {
    className: string;
    methodName: string;
}

export const TunnelMetadataKey = generateEventId("inversify:tunnel");

export function Tunnel(): MethodDecorator {
    return function (target: any, propertyKey: string) {
        setMethodMetadata(
            TunnelMetadataKey,
            {
                className: target.constructor.name,
                methodName: propertyKey,
            } as TunnelMethodMetadata,
            target,
            propertyKey
        );
    };
}