import {decorate, inject, injectable, multiInject} from "inversify";
import {Container} from "@shared/core/container";
import getDecorators from "inversify-inject-decorators";

const {lazyInject} = getDecorators(Container);

/**
 * This is necessary if you need to create an instance of a class to which to pass parameters
 * Used in combination with Container.inTransientScope
 * @see https://github.com/inversify/inversify-inject-decorators?tab=readme-ov-file#basic-property-lazy-injection-with-lazyinject
 */
export const LazyInject = lazyInject

export const Inject = inject;

export const MultiInject = multiInject;

export const Injectable =
    (...token: any[]): ClassDecorator =>
        target => {
            decorate(injectable(), target);
            if (token.length === 0) {
                token.push(target);
            }

            const first = token.shift();
            Container.bind(first)
                .to(target as any)
                .inSingletonScope();

            for (const item of token) {
                Container.bind(item).toService(first);
            }
        };

export const InjectableTransientScope =
    (...token: any[]): ClassDecorator =>
        target => {
            decorate(injectable(), target);
            if (token.length === 0) {
                token.push(target);
            }

            const first = token.shift();
            Container.bind(first)
                .to(target as any)
                .inTransientScope();
        };

export const InjectableRequestScope =
    (...token: any[]): ClassDecorator =>
        target => {
            decorate(injectable(), target);
            if (token.length === 0) {
                token.push(target);
            }

            const first = token.shift();
            Container.bind(first)
                .to(target as any)
                .inRequestScope();
        };