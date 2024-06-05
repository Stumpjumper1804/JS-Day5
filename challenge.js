// In this exercise, we are going to create a website for the car shop. You are
// free to expand on design and the structure, but you should follow some
// basic requirements of this small project:
// ● Create an array of objects with data about cars, e.g. car name, car
// production year, car image (image link URL), car price, etc.
// ● Display this data from this array in the index.html page using
// JavaScript loop and according to the provided design

// When the user clicks on the car name you should display the div with the
// big photo and all details about the car, like on the image below (you should
// also provide the feature to hide the big div)

let cars = [
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "Volvo",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
];

for (const car of cars) {
  document.getElementById("grid-anchor").innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${car.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${car.brand}</h5>
    <p class="card-text">${car.price} Euro (Build: ${car.prodYear})</p>
    <a href="#" class="btn btn-primary">Get details</a>
  </div>
</div>
    `;
}
