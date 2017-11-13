let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Anthony',
    sayHi: () => {
        console.log(`Hi i'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi i'm ${this.name}`);
    }
}

user.sayHiAlt('trolls');
