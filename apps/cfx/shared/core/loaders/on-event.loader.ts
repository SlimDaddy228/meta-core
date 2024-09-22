import {Injectable} from "@core/decorations/injectable";
import {OnEventMetadata, OnEventMetadataKey} from "@core/decorations/event";
import {getMethodMetadata} from "@shared/utils/reflect/method";

@Injectable()
export class OnEventLoader {
    public load(provider): void {
        const eventMethodList = getMethodMetadata<OnEventMetadata>(OnEventMetadataKey, provider);

        for (const methodName of Object.keys(eventMethodList)) {
            const metadata = eventMethodList[methodName];
            const method = provider[methodName].bind(provider);
            on(metadata.name, method)
        }
    }
}