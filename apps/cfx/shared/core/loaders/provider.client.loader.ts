import {ProviderLoader} from './provider.loader'
import {Inject, Injectable} from '@core/decorations/injectable'
import {OnNuiEventLoader} from '@core/loaders/on-nui-event.loader'

@Injectable(ProviderLoader)
export class ProviderClientLoader extends ProviderLoader {
  @Inject(OnNuiEventLoader)
  private readonly onNuiEventLoader: OnNuiEventLoader

  public load(provider): void {
    super.load(provider)
    this.onNuiEventLoader.load(provider)
  }
}