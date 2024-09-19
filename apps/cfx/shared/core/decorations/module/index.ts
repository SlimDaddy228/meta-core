export const Module = (): ClassDecorator => {
    return target => {
        console.log(Reflect.getMetadata("design:paramtypes", target));
    };
};