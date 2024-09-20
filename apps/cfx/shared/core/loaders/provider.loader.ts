import {ProviderMetadata, ProviderMetadataKey} from "@core/decorations/provider";

export abstract class ProviderLoader {
    public load(provider): void {
        const providerMetadata = Reflect.getMetadata(ProviderMetadataKey, provider) as ProviderMetadata;
        console.log('[provider] register:', providerMetadata.name);
    }
}