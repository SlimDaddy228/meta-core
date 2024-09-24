import {ProviderMetadata, ProviderMetadataKey} from "@core/decorations/provider";
import {TunnelLoader} from "@core/loaders/tunnel.loader";
import {Inject} from "@core/decorations/injectable";
import {OnEventLoader} from "@core/loaders/on-event.loader";
import {Logger} from "@core/logger";
import {TickLoader} from "@core/loaders/tick.loader";

export abstract class ProviderLoader {
    @Inject(TunnelLoader)
    private readonly tunnelLoader: TunnelLoader;

    @Inject(OnEventLoader)
    private readonly onEventLoader: OnEventLoader;

    @Inject(TickLoader)
    private readonly tickLoader: TickLoader;

    @Inject(Logger)
    private logger: Logger;

    public load(provider): void {
        const providerMetadata = Reflect.getMetadata(ProviderMetadataKey, provider) as ProviderMetadata;

        this.onEventLoader.load(provider)
        this.tunnelLoader.load(provider);
        this.tickLoader.load(provider)

        this.logger.debug("[provider] register:", providerMetadata.name);
    }
}