import {Injectable} from '@core/decorations/injectable'
import {OnEventMetadata, OnNuiEventMetadataKey} from '@core/decorations/event'
import {getMethodMetadata} from '@shared/utils/reflect/method'

@Injectable()
export class OnNuiEventLoader {
  public load(provider): void {
    const eventMethodList = getMethodMetadata<OnEventMetadata>(OnNuiEventMetadataKey, provider)

    for (const methodName of Object.keys(eventMethodList)) {
      const metadata = eventMethodList[methodName]
      const method = provider[methodName].bind(provider)
      console.log(metadata.name)
      RegisterNuiCallback(metadata.name, method)
    }
  }
}