import {Injectable} from "@core/decorations/injectable";
import {getMethodMetadata} from "@shared/utils/reflect/method";
import {TunnelMetadataKey, TunnelMethodMetadata} from "@core/decorations/tunnel";
import {generateEventId} from "@shared/utils/generate-event-id";
import {IS_CLIENT, IS_SERVER} from "@shared/utils/cfx";

@Injectable()
export class TunnelLoader {
    public load(provider: any): void {
        const methods = getMethodMetadata<TunnelMethodMetadata>(TunnelMetadataKey, provider);

        for (const method of Object.values(methods)) {
            this.bindInterface(method.className, method.methodName)
        }
    }


    private bindInterface(className: string, methodName: string) {
        const requestEventName = generateEventId(className, methodName, ":tunnel_req")

        console.log(requestEventName, "created")
        onNet(requestEventName, async () => {
            const responseEventName = generateEventId(className, methodName, ":tunnel_res")

            if (IS_SERVER) {
                const source = global.source;
                emitNet(responseEventName, source);
            }

            if (IS_CLIENT) {
                emitNet(responseEventName);
            }
        });
    }
}