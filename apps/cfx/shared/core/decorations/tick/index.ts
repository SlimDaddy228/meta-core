import {setMethodMetadata} from "@shared/utils/reflect/method";
import {generateEventId} from "@shared/utils/generate-event-id";

export const TickMetadataKey = generateEventId("inversify:tick");

export enum TickDelay {
    EVERY_FRAME = 0,
    EVERY_SECOND = 1000,
    EVERY_MINUTE = 60000,
    EVERY_5_MINUTE = 300000,
    EVERY_10_MINUTE = 600000,
    EVERY_15_MINUTE = 900000,
    EVERY_30_MINUTE = 1800000,
    EVERY_HOUR = 3600000,
}

export type TickMetadata = {
    delay: TickDelay | number;
    name: string;
    context: boolean;
};

export const Tick = (delay: TickMetadata["delay"], name?: TickMetadata["name"], context = false): MethodDecorator => {
    return (target, propertyKey) => {
        setMethodMetadata(
            TickMetadataKey,
            {
                delay,
                name: name || propertyKey.toString(),
                context,
            } as TickMetadata,
            target,
            propertyKey
        );
    };
}
