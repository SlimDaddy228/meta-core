import {Injectable} from "@core/decorations/injectable";
import {getMethodMetadata} from "@shared/utils/reflect/method";
import {TunnelMetadataKey, TunnelMethodMetadata} from "@core/decorations/tunnel";
import {ProviderMetadata, ProviderMetadataKey} from "@core/decorations/provider";
import {BindHandlers, bindInterface} from "@core/tunnel";

@Injectable()
export class TunnelLoader {
    public load(provider: any): void {
        const {name: className} = Reflect.getMetadata(ProviderMetadataKey, provider) as ProviderMetadata;
        const methods = getMethodMetadata<TunnelMethodMetadata>(TunnelMetadataKey, provider);

        const normalizeMethods: BindHandlers = {}

        for (const methodName of Object.keys(methods)) {
            normalizeMethods[methodName] = provider[methodName].bind(provider);
        }

        bindInterface(className, normalizeMethods)
    }
}