export const IS_SERVER = IsDuplicityVersion()
export const IS_CLIENT = !Boolean(IS_SERVER)

export const Delay = (ms: number) => new Promise(res => setTimeout(res, ms));