import {Provider} from "@core/decorations/provider";
import {User} from "@server/user";


type UserSource = typeof global.source
type UsersBySource = Record<UserSource, User>

@Provider()
export class UserSourceStateProvider {
    private _users: UsersBySource = {}

    public get users(): UsersBySource {
        return this._users;
    }

    public addUser(source: UserSource, user: User) {
        this._users[source] = user
    }

    public removeUser(source: UserSource) {
        if (this._users[source]) {
            delete this._users[source];
        }
    }

    public getUser(source: UserSource): User | undefined {
        return this._users[source];
    }
}