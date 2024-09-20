import "reflect-metadata"
import {Application} from "@core/application";
import {ProviderClientLoader} from "@core/loaders/provider.client.loader";
import {NuiModule} from "@client/modules/nui/nui.module";

function startApplication() {
    const application = Application.create(
        ProviderClientLoader,
        NuiModule
    )

    application.start()
}

startApplication()