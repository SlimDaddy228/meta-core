import {ProviderLoader} from './provider.loader';
import {Injectable} from "@core/decorations/injectable";

@Injectable(ProviderLoader)
export class ProviderClientLoader extends ProviderLoader {
    public load(provider): void {
        super.load(provider);
    }
}