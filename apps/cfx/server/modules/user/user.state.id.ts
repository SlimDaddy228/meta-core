import {Provider} from "@core/decorations/provider";
import {User} from "@server/user";
import {Prisma} from "@server/.prisma";

type UserId = Prisma.$UsersPayload["scalars"]["id"]
type Users = Record<UserId, User>

@Provider()
export class UserIdStateProvider {
    private _users: Users = {}

    public get users(): Users {
        return this._users;
    }

    public addUser(id: UserId, user: User) {
        this._users[id] = user
    }

    public removeUser(id: UserId) {
        if (this._users[id]) {
            delete this._users[id];
        }
    }

    public getUser(id: UserId): User | undefined {
        return this._users[id];
    }
}