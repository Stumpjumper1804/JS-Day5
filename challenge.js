// In this exercise, we are going to create a website for the car shop. You are
// free to expand on design and the structure, but you should follow some
// basic requirements of this small project:
// ● Create an array of objects with data about cars, e.g. car name, car
// production year, car image (image link URL), car price, etc.
// ● Display this data from this array in the index.html page using
// JavaScript loop and according to the provided design

// When the user clicks on the car name, you should display the div with the
// big photo and all details about the car, like on the image below (you should
// also provide the feature to hide the big div)

//creating product catalog
let cars = [
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
  {
    brand: "BMW",
    prodYear: "2023",
    price: "39.000",
    picture: "./images/bmw_car.jpg",
  },
];

// rendering the picture gallery
for (const car of cars) {
  document.getElementById("grid-anchor").innerHTML += `
    <div class="card m-2" style="width: 18rem;">
  <img src="${car.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${car.brand}</h5>
    <p class="card-text">${car.price} Euro (Build: ${car.prodYear})</p>
    <a href="#details" class="btn btn-primary btn-anchor">Get details</a>
  </div>
</div>
    `;
}

//add click event to display details window
let anchorButtons = document.querySelectorAll(".btn-anchor");
console.log(anchorButtons);

anchorButtons.forEach((element, index) => {
  element.addEventListener("click", () => {
    document.getElementById("details").innerHTML = `
      <div id="details-window" class="card mb-3 container border border-danger border-2">
        <img src="${cars[index].picture}" class="card-img-top pt-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${cars[index].brand}</h5>
          <p class="card-text">This is a ${cars[index].brand} built in ${cars[index].prodYear}. This excellent automobile costs only ${cars[index].price} Euro!</p>
          <button id="btnClose" type="button" class="btn btn-primary">Close details</button>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      `;
    //close details window on clicking
    document.getElementById("btnClose").addEventListener("click", () => {
      document
        .getElementById("details-window")
        .setAttribute("style", "display: none");
    });
  });
});
