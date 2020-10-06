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

export function classDecorator <T extends { new(...args: any[]): {} }> (
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}