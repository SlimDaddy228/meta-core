import {generateEventId} from '@shared/utils/generate-event-id'
import {setMethodMetadata} from '@shared/utils/reflect/method'
import {OnClientEventName, OnServerEventName, OnSharedEventName} from '@shared/types/events'

export type OnEventOptions = {
  eventName: OnSharedEventName | OnClientEventName | OnServerEventName;
};

export type OnEventMetadata = {
  name: OnEventOptions['eventName']
}

export const OnEventMetadataKey = generateEventId('inversify:event')

export function OnEvent(options: OnEventOptions): MethodDecorator {
  return function(target: any, propertyKey: string) {
    setMethodMetadata(
      OnEventMetadataKey,
      {
        name: options.eventName
      } as OnEventMetadata,
      target,
      propertyKey
    )
  }
}

export type OnNuiEventMetadata = {
  name: string
}

export const OnNuiEventMetadataKey = generateEventId('inversify:nui-event')

export function OnNuiEvent(options: OnNuiEventMetadata): MethodDecorator {
  return function(target: any, propertyKey: string) {
    setMethodMetadata(
      OnNuiEventMetadataKey,
      options,
      target,
      propertyKey
    )
  }
}