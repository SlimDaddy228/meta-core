import {Inject, Injectable} from "@core/decorations/injectable";
import {Container} from "@core/container";
import {ModuleLoader} from "@core/loaders/module.loader";

type Module = any

@Injectable()
export class Application {

    @Inject(ModuleLoader)
    private moduleLoader: ModuleLoader;

    private modules: Module[] = []

    public static create(providerTarget: any, ...modules: Module[]) {
        Container.bind(providerTarget).to(providerTarget).inSingletonScope();
        const app = Container.get(Application);

        for (const module of modules) {
            app.addModule(module);
        }

        return app;
    }

    public start() {
        for (const module of this.modules) {
            this.moduleLoader.load(module);
        }
    }

    private addModule(module: any) {
        const moduleService = Container.get(module);

        this.modules.push(moduleService);
    }
}