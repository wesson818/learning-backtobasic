export function f() {
    console.log("f(): evaluated");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("f(): called");
    };
}

export function g() {
    console.log("g(): evaluated");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("g(): called");
    };
}

export function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}