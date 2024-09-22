import {Prisma} from "@server/.prisma";
import {injectable} from "inversify";

type UserName = string | null
type UserEndpoint = string | null


@injectable()
export class User {
    constructor(
        public readonly source: typeof global.source,
        public readonly id: Prisma.$UsersPayload["scalars"]["id"]
    ) {
    }

    private _name: UserName = null

    public get name(): UserName {
        return this._name
    }

    public set name(name: UserName) {
        this._name = name
    }

    private _endpoint: UserEndpoint = null

    public get endpoint(): UserEndpoint {
        return this._endpoint
    }

    public set endpoint(endpoint: UserEndpoint) {
        this._endpoint = endpoint
    }
}