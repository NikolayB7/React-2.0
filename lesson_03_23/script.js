
class User {
    constructor(name, id) {
        this.id = id;
        this.human = true;
        this.name = name;
    }



    hello() {
        console.log(`Hello ${this.name}`);

    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}


let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);


console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();