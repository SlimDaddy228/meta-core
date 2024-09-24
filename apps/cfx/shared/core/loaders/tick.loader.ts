import {Injectable} from "@core/decorations/injectable";
import {getMethodMetadata} from "@shared/utils/reflect/method";
import {TickMetadata, TickMetadataKey} from "@core/decorations/tick";
import {Delay} from "@shared/utils/cfx";
import {isAsyncFunction, isPromise} from "@shared/utils/guards/types";

@Injectable()
export class TickLoader {
    private ticks = [];

    public load(provider: any): void {
        const methods = getMethodMetadata<TickMetadata>(TickMetadataKey, provider);

        for (const methodName of Object.keys(methods)) {
            const metadata = methods[methodName];
            const method = provider[methodName].bind(provider)

            const tick = setTick(async () => {
                const isNeedWait = isAsyncFunction(method) || isPromise(method)

                if (isNeedWait) {
                    await method()
                } else {
                    method()
                }

                if (metadata.delay > 0) {
                    await Delay(metadata.delay)
                }
            })

            this.ticks.push(tick);
        }
    }
}