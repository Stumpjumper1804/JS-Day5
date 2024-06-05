// let fname = "John";

// let students = ["Test", "Test2", "Test3", "Test4"];

// // 1 way

// let firstName = "John";
// let lastName = "Doe";
// let age = 30;
// let hobbies = ["read", "Code"];

// // 2 way

// let info = ["John", "Doe", 30, ["read", "code"]];

// console.log(info[0]);

// object

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gym: true,
  hobbies: ["read", "code"],
  printInfo: function () {
    return `My name is ${this.firstName} ${this.lastName}, and i am ${
      this.age
    } years old, and my hobbies are ${this.hobbies.join(", ")}`;
  },
};

// console.log(person.hobbies.join(", "));
console.log(person.printInfo());

// my name is firstName lastName, and i am age years old, my hobbies are hobbies

// 50 objects  // 50 students

// template - object generator // classes

class Person {
  firstName;
  lastName;
  age;
  gym;
  hobbies;

  constructor(firstName, lastName, age, gym, hobbies) {
    this.firstName = firstName;
    this.age = age;
    this.gym = gym;
    this.lastName = lastName;
    this.hobbies = hobbies;
  }

  printInfo() {
    return `My name is ${this.firstName} ${this.lastName}, and i am ${
      this.age
    } years old, and my hobbies are ${this.hobbies.join(", ")}`;
  }
}

class Trainer extends Person {
  jobTitle;
  salary;

  constructor(firstName, lastName, age, gym, hobbies, job, salary) {
    super(firstName, lastName, age, gym, hobbies); // take them from the parent class
    this.jobTitle = job;
    this.salary = salary;
  }

  printInfo() {
    return `${super.printInfo()}, and i work as ${this.jobTitle}, and i get ${
      this.salary
    }`;
  }
}

// 50 students // 10 trainers + 2 extra properties (jobTitle, salary)

let person2 = new Person("Mary", "Doe", 20, true, ["write", "code", "swim"]);
let person3 = new Person("Tom", "Doe", 33, false, ["code"]);
console.log(person2.printInfo());
console.log(person3.printInfo());

let trainer = new Trainer(
  "Thomas",
  "Doe",
  25,
  true,
  ["code", "run"],
  "Trainer",
  2800
);

console.log(trainer.printInfo());
