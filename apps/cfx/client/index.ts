import "reflect-metadata"
import {Application} from "@core/application";
import {ProviderClientLoader} from "@core/loaders/provider.client.loader";
import {NuiModule} from "@client/modules/nui/nui.module";
import {ConnectModule} from "@client/modules/connect/connect.module";
import {PlayerModule} from "@client/modules/player/player.module";

function startApplication() {
    try {
        setMaxEventListeners(20);
    } catch {
        /* empty */
    }

    const application = Application.create(
        ProviderClientLoader,
        ConnectModule,
        PlayerModule,
        NuiModule,
    )

    application.start()
}

startApplication()