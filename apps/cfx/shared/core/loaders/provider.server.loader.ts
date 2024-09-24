import {ProviderLoader} from "./provider.loader";
import {Injectable} from "@core/decorations/injectable";

@Injectable(ProviderLoader)
export class ProviderServerLoader extends ProviderLoader {
    public load(provider): void {
        super.load(provider);
    }
}