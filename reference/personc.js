// * Module Wrapper Function
(function (exports, require, module, _filename, _dirname) {

})
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Myname is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;