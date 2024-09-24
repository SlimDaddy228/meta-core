import "reflect-metadata"
import {Application} from "@core/application";
import {ProviderClientLoader} from "@core/loaders/provider.client.loader";
import {NuiModule} from "@server/modules/nui/nui.module";
import {DatabaseModule} from "@server/modules/database/database.module";
import {ConnectModule} from "@server/modules/connect/connect.module";
import {UserModule} from "@server/modules/user/user.module";
import {PlayerModule} from "@server/modules/player/player.module";

async function startApplication() {
    try {
        setMaxEventListeners(20);
    } catch {
        /* empty */
    }

    const application = Application.create(
        ProviderClientLoader,
        DatabaseModule,
        UserModule,
        ConnectModule,
        PlayerModule,
        NuiModule,
    )

    application.start()
}

void startApplication()
