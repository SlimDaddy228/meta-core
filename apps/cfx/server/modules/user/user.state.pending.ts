import {Provider} from "@core/decorations/provider";
import {User} from "@server/user";


type UserPendingId = string
type UsersByPendingId = Record<UserPendingId, User>

@Provider()
export class UserPendingStateProvider {
    private _users: UsersByPendingId = {}

    public get users(): UsersByPendingId {
        return this._users;
    }

    public addUser(pendingId: UserPendingId, user: User) {
        this._users[pendingId] = user
    }

    public removeUser(pendingId: UserPendingId) {
        if (this._users[pendingId]) {
            delete this._users[pendingId];
        }
    }

    public getUser(pendingId: UserPendingId): User | undefined {
        return this._users[pendingId];
    }
}