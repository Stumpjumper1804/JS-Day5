// Basic Exercise 1

let sportsCar = {
  modelId: 7,
  brand: "SpyMotors",
  model: "Spectre",
  colors: ["Silver", "Black", "White"],
  printOut: function () {
    console.table(sportsCar);
  },
};

// Print out the sportsCar object to the console.
sportsCar.printOut();
// Update the modelId property of the sportsCar object to be 8.
sportsCar.modelId = 8;
sportsCar.colors.push("Midnight Blue");
sportsCar.printOut();
// Add "Midnight Blue" to the array of colors available for sportsCar.

/////////////////////////////////////////////////////////////////////////////////////

// Basic Exercise 2

// Create 3 different objects for 3 different themes: car, animal and person.
// The end result should be 9 objects in total. These objects should have
// some properties like name, brand, model, type, color, weight, age... of
// course inherent to its type because, for instance, an animal has no brand...
// Each object should have at least one method that shows some properties
// about each theme. Feel free to expand on that.
// The message from the methods must be printed on the browser too, either
// by manipulating a paragraph for example or with console.log,
// document.write, ... .

/////////////////////////////////////////////////////////////////////////////////////

// Classes Exercise 1
class Car {
  brand;
  weight;
  model;
  price;

  constructor(brand, weight, model, price) {
    this.brand = brand;
    this.weight = weight;
    this.model = model;
    this.price = price;
  }

  describeCar() {
    document.write(
      `Model ${this.model} from ${this.brand} weighs ${this.weight} kg and costs ${this.price} Euro.`
    );
  }
}

let car1 = new Car("Volvo", 2000, "TX40", "40.000");
let car2 = new Car("Mercedes", 1769, "C300", "50.000");
let car3 = new Car("VW", 1800, "Golf", "35.000");

car1.describeCar();
document.write("</br>");
car2.describeCar();
document.write("</br>");
car3.describeCar();
document.write("</br>");

// Extend from the last example and create 3 different classes to create
// objects from: car, animal and person. These classes should have some
// properties like name, brand, model, type, color, weight, age... of course
// inherent to its type because, for instance, an animal has no brand...

// Each class should have at least one method that shows some properties
// about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too like the
// previous example.

///////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Exercise 1

class Motorbike extends Car {
  hubSpace;
  PS;

  constructor(brand, weight, model, price, ccm, ps) {
    super(brand, weight, model, price);

    this.hubSpace = ccm;
    this.PS = ps;
  }

  describeMotorbike() {
    document.write(
      `Model ${this.model} from ${this.brand} weighs ${this.weight} kg and costs ${this.price} Euro.
        It has ${this.hubSpace} ccm and ${this.PS} PS.`
    );
  }
}

let mb1 = new Motorbike("Kawasaki", 250, "Versys", "15.000", 1000, 120);
let mb2 = new Motorbike("Honda", 230, "Hornet", "12.000", 650, 100);
let mb3 = new Motorbike("Suzuki", 245, "V-Strom", "13.000", 1000, 105);

mb1.describeMotorbike();
document.write("</br>");
mb2.describeMotorbike();
document.write("</br>");
mb3.describeMotorbike();

// Now you will extend the classes from the previous exercise.
// Car: Extend with a child class called Motorbike, that will inherit the property
// and methods from the parent Class, as well as create new properties and
// methods that are unique to this class. Example: number of wheels.

// Animal: Extend with a child class called Fish, that will inherit the property
// and methods from the parent Class, as well as create new properties and
// methods that are unique to this class. Example: type of water it inhabits.
// Person: Extend with a child class called Profession, that will inherit the
// property and methods from the parent Class, as well as create new
// properties and methods that are unique to this class. Example: job position.

// Create, using the Child classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too.
