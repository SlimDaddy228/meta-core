import "reflect-metadata"
import {Application} from "@core/application";
import {ProviderClientLoader} from "@core/loaders/provider.client.loader";
import {NuiModule} from "@server/modules/nui/nui.module";

function startApplication() {
    try {
        setMaxEventListeners(20);
    } catch {
        /* empty */
    }
    
    const application = Application.create(
        ProviderClientLoader,
        NuiModule
    )

    application.start()
}

startApplication()