import {Container as ContainerInversify} from 'inversify';
import {generateEventId} from "@shared/utils/generate-event-id";

export const ContainerMetadata = generateEventId('inversify:container');

const getContainer = (): ContainerInversify => {
    const existingContainer: ContainerInversify = Reflect.getMetadata(ContainerMetadata, global);
    return existingContainer ? existingContainer : createContainer();
};

const createContainer = (): ContainerInversify => {
    const container = new ContainerInversify({
        skipBaseClassChecks: true,
        autoBindInjectable: true,
        defaultScope: 'Singleton',
    });

    Reflect.defineMetadata(ContainerMetadata, container, global);

    return container;
};

export const unloadContainer = (): void => {
    Reflect.deleteMetadata(ContainerMetadata, global);
};

export const Container: ContainerInversify = getContainer();