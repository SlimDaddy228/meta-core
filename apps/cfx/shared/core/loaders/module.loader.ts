import {Inject, Injectable} from "@core/decorations/injectable";
import {ProviderLoader} from "@core/loaders/provider.loader";
import {Container} from "@core/container";
import {ModuleMetadata, ModuleMetadataKey} from "@core/decorations/module";

@Injectable()
export class ModuleLoader {
    @Inject(ProviderLoader)
    private providerLoader: ProviderLoader;

    private container = Container;

    public load(module: any): void {
        const moduleMetadata = Reflect.getMetadata(ModuleMetadataKey, module) as ModuleMetadata;

        for (const provider of moduleMetadata.providers) {
            const instance = this.container.get(provider);
            this.providerLoader.load(instance);
        }
    }
}