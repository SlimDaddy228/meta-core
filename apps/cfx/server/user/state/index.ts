import {InjectableRequestScope} from "@core/decorations/injectable";

@InjectableRequestScope()
export class UserState {
    private _id: UserId = null

    public get id(): UserId {
        return this._id
    }

    public set id(id: UserId) {
        this._id = id
    }

    private _source: PlayerSource = null

    public get source(): PlayerSource {
        return this._source
    }

    public set source(source: PlayerSource) {
        this._source = source
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

    private _selectCharacter: UserSelectCharacter = null

    public get selectCharacter(): UserSelectCharacter {
        return this._selectCharacter
    }

    public set selectCharacter(characterId: UserSelectCharacter) {
        this._selectCharacter = characterId
    }
}