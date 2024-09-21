import IdGenerator from "@shared/utils/id-generator";
import {IS_SERVER} from "@shared/utils/cfx";

export type CallHandler = (target: number | string, ...args: any[]) => Promise<unknown> | void;

export interface CallHandlers {
    [member: string]: CallHandler;
}

export type BindHandler = (...args: any[]) => Promise<unknown> | unknown;

export interface BindHandlers {
    [member: string]: BindHandler;
}

interface Callbacks {
    [id: number]: (value: unknown) => void;
}

export function getInterface(name: string, identifier: string = GetCurrentResourceName()) {
    const ids = new IdGenerator();
    const callbacks: Callbacks = {};

    onNet(`${name}:${identifier}:tunnel_res`, (id: number, payloads: unknown[]) => {
        const callback = callbacks[id];
        if (callback) {
            delete callbacks[id];
            ids.free(id);

            callback(payloads.length <= 1 ? payloads[0] : payloads);
        }
    });

    function generateHandler(memberName: string): CallHandler {
        return (...args) => {
            const {0: source} = args

            if (IS_SERVER && typeof source !== "number") {
                throw new Error("Remote method must be a player source value")
            }


            if (memberName.startsWith("_")) {
                if (IS_SERVER) {
                    emitNet(`${name}:tunnel_req`, source, memberName, args.splice(1, args.length), identifier, -1);
                } else {
                    emitNet(`${name}:tunnel_req`, memberName, args, identifier, -1);
                }
            }

            return new Promise(resolve => {
                const id = ids.gen();

                callbacks[id] = resolve;

                if (IS_SERVER) {
                    emitNet(`${name}:tunnel_req`, source, memberName, args.splice(1, args.length), identifier, id);
                } else {
                    emitNet(`${name}:tunnel_req`, memberName, args, identifier, id);
                }
            });
        };
    }

    return new Proxy<CallHandlers>(
        {},
        {
            get(target, member) {
                const memberName = member.toString();

                if (!target[memberName]) {
                    target[memberName] = generateHandler(memberName);
                }

                return target[memberName];
            },

            set() {
                throw new Error("set isn't supported on Tunnel access");
            },
        }
    );
}

export function bindInterface(name: string, handlers: BindHandlers) {
    onNet(`${name}:tunnel_req`, async (member: string, args: any[], identifier: string, id: number) => {
        const source = global.source;

        const handler = handlers[member];
        let payload: unknown;

        if (handler) {
            try {
                payload = await handler(...args);
            } catch (err) {
                console.error(err);
            }
        }

        if (id >= 0) {
            emitNet(`${name}:${identifier}:tunnel_res`, source, id, [payload]);
        }
    });
}