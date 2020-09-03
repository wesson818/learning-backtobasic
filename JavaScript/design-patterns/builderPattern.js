class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

// class User {
//     constructor(name, age, phone, address) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('3000','Main St'))

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name)
//     }

//     setAge(age) {
//         this.user.age = age
//         return this
//     }

//     setPhone(phone) {
//         this.user.phone = phone
//         return this
//     }

//     setAge(address) {
//         this.user.address = address
//         return this
//     }

//     build() {
//         return this.user
//     }
// }

// let user = new UserBuilder('Bob').setAge(10).setPhone("0488666888").build()


// destructuring way

class User {
    constructor(name, {
        age,
        phone,
        address
    } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Bob',{age:10,address: new Address("3000","Main St")})

console.log(user)