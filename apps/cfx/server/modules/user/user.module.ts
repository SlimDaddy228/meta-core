import {Module} from "@core/decorations/module";
import {UserProvider} from "@server/modules/user/user.provider";
import {UserIdStateProvider} from "@server/modules/user/user.state.id";
import {UserSourceStateProvider} from "@server/modules/user/user.state.source";
import {UserPendingStateProvider} from "@server/modules/user/user.state.pending";

@Module({
    providers: [
        UserProvider,
        UserIdStateProvider,
        UserSourceStateProvider,
        UserPendingStateProvider
    ]
})
export class UserModule {
}