'use strict';

//global variables
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var allProducts = [];
var productsShown = [];

//constructor function
function ProductInstances(productName, filepath) {
  this.productName = productName,
  this.filepath = filepath,
  this.numberOfTimesShown = [],
  this.numberOfTimesClicked = 0,

  allProducts.push(this);
}

// render the object instances
new ProductInstances("R2D2 Bag", "img/bag.jpg");
new ProductInstances("Banana Slicer", "img/banana.jpg");
new ProductInstances("Bathroom Tablet Holder", "img/bathroom.jpg");
new ProductInstances("Open Toed Rainboots", "img/boots.jpg");
new ProductInstances("All In One Breakfast Maker", "img/breakfast.jpg");
new ProductInstances("Meatball Flavored Bubblegum", "img/bubblegum.jpg");
new ProductInstances("Puffy Chair", "img/chair.jpg");
new ProductInstances("Cthulhu Action Figure", "img/cthulhu.jpg");
new ProductInstances("Duck Beak For Your Dog", "img/dog-duck.jpg");
new ProductInstances("Dragon Meat", "img/dragon.jpg");
new ProductInstances("Pen Utensils", "img/pen.jpg");
new ProductInstances("Pet Friendly Sweeper", "img/pet-sweep.jpg");
new ProductInstances("Pizza Scissors", "img/scissors.jpg");
new ProductInstances("Shark Sleeping Bag", "img/shark.jpg");
new ProductInstances("Baby Sweeper", "img/sweep.png");
new ProductInstances("Tauntaun Sleeping Bag", "img/tauntaun.jpg");
new ProductInstances("Unicorn Meat", "img/unicorn.jpg");
new ProductInstances("Tenticle USB", "img/usb.gif");
new ProductInstances("Self Watering Water Can", "img/water-can.jpg");
new ProductInstances("Impossible Wine Glass", "img/wine-glass.jpg");

function randomImageGenerator () {

  //counts how many clicks each item gets
  if (event) {
    for (var i = 0; i < allProducts.length; i++)
      if (event.target.alt === allProducts[i].productName) {
        allProducts[i].numberOfTimesClicked++;
        console.log(allProducts[i].numberOfTimesClicked);
      }
  }

  //image #1
  var randomNumber = Math.floor(Math.random() * allProducts.length);

  while (randomNumber === productsShown[productsShown.length - 1] || randomNumber === productsShown[productsShown.length - 2] || randomNumber === productsShown[productsShown.length - 3]) {

    randomNumber = Math.floor(Math.random() * allProducts.length);

  }

  productsShown.push(randomNumber);

  imageOne.src = allProducts[randomNumber].filepath;
  imageOne.alt = allProducts[randomNumber].productName;

  //image #2
  randomNumber = Math.floor(Math.random() * allProducts.length);

  while (randomNumber === productsShown[productsShown.length - 1] || randomNumber === productsShown[productsShown.length - 2] || randomNumber === productsShown[productsShown.length - 3] || randomNumber === productsShown[productsShown.length - 4]) {

    randomNumber = Math.floor(Math.random() * allProducts.length);

  }

  productsShown.push(randomNumber);

  imageTwo.src = allProducts[randomNumber].filepath;
  imageTwo.alt = allProducts[randomNumber].productName;

  //image #3
  randomNumber = Math.floor(Math.random() * allProducts.length);

  while (randomNumber === productsShown[productsShown.length - 1] || randomNumber === productsShown[productsShown.length - 2] || randomNumber === productsShown[productsShown.length - 3] || randomNumber === productsShown[productsShown.length - 4] || randomNumber === productsShown[productsShown.length - 5]) {

    randomNumber = Math.floor(Math.random() * allProducts.length);

  }

  productsShown.push(randomNumber);
  imageThree.src = allProducts[randomNumber].filepath;
  imageThree.alt = allProducts[randomNumber].productName;

  console.log(productsShown);
}

if (productsShown.length > 75) {
  var resultsSection = document.getElementById('results-hidden');
  resultsSection.id = "results-show";
  imageOne.className = "hidden";
  imageTwo.className = "hidden";
  imageThree.className = "hidden";
}

imageOne.addEventListener('click', randomImageGenerator);
imageTwo.addEventListener('click', randomImageGenerator);
imageThree.addEventListener('click', randomImageGenerator);

randomImageGenerator();



// at end, run a for loop through the array that displayed the images and add the index numbers together

// at end run a for loop through the click array and add the same index numbers together

// turn off event listener after 25 clicks and display list of products with text: "(Click Array) votes for (product name)"

//calculate percentate of time: number of times image was clicked on/number of time image appeard * 100

// create a table that displays: "(name of product) appeared (number of time appeared) times and was clicked on (number of times item was clicked) times. This is (percentage of times it was clicked)% of the time."
