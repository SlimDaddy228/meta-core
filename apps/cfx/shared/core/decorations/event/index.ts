import {generateEventId} from "@shared/utils/generate-event-id";
import {setMethodMetadata} from "@shared/utils/reflect/method";
import {OnEventName} from "@shared/types/events";

export type OnEventOptions = {
    eventName: OnEventName;
};

export type OnEventMetadata = {
    name: OnEventOptions["eventName"]
}

export const OnEventMetadataKey = generateEventId("inversify:event");

export function OnEvent(options: OnEventOptions): MethodDecorator {
    return function (target: any, propertyKey: string) {
        setMethodMetadata(
            OnEventMetadataKey,
            {
                name: options.eventName
            } as OnEventMetadata,
            target,
            propertyKey
        );
    };
}