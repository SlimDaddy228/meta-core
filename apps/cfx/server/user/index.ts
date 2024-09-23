import {Inject, InjectableTransientScope} from "@core/decorations/injectable";
import {UserCharacter} from "@server/user/character";
import {UserState} from "@server/user/state";


@InjectableTransientScope()
export class User {
    @Inject(UserCharacter)
    public character: UserCharacter

    @Inject(UserState)
    public state: UserState
}