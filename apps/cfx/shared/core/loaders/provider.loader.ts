import {ProviderMetadata, ProviderMetadataKey} from "@core/decorations/provider";
import {TunnelLoader} from "@core/loaders/tunnel.loader";
import {Inject} from "@core/decorations/injectable";
import {OnEventLoader} from "@core/loaders/on-event.loader";
import {Logger} from "@core/logger";

export abstract class ProviderLoader {
    @Inject(TunnelLoader)
    private readonly tunnelLoader: TunnelLoader;

    @Inject(OnEventLoader)
    private readonly onEventLoader: OnEventLoader;

    @Inject(Logger)
    private logger: Logger;

    public load(provider): void {
        const providerMetadata = Reflect.getMetadata(ProviderMetadataKey, provider) as ProviderMetadata;

        this.logger.debug("[provider] register:", providerMetadata.name);

        this.onEventLoader.load(provider)
        this.tunnelLoader.load(provider);
    }
}