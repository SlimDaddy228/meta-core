import {ProviderMetadata, ProviderMetadataKey} from "@core/decorations/provider";
import {TunnelLoader} from "@core/loaders/tunnel.loader";
import {Inject} from "@core/decorations/injectable";

export abstract class ProviderLoader {
    @Inject(TunnelLoader)
    private readonly tunnelLoader: TunnelLoader;

    public load(provider): void {
        const providerMetadata = Reflect.getMetadata(ProviderMetadataKey, provider) as ProviderMetadata;
        console.log("[provider] register:", providerMetadata.name);

        this.tunnelLoader.load(provider);
    }
}