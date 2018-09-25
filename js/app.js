'use strict';

//global variables
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var allProducts = [];
var productsShown = [];
var maxClickedAllowed = 25;

//constructor function
function ProductInstances(productName, filepath, numberOfTimesShown=0, numberOfTimesClicked=0) {
  this.productName = productName;
  this.filepath = filepath;
  this.numberOfTimesShown = numberOfTimesShown;
  this.numberOfTimesClicked = numberOfTimesClicked;

  allProducts.push(this);
}

// render the object instances
function initalizeDatabase() {
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
}

//event listeners
function setUpEventListener () {
  imageOne.addEventListener('click', randomImageGenerator);
  imageTwo.addEventListener('click', randomImageGenerator);
  imageThree.addEventListener('click', randomImageGenerator);
}

// function removeEventListeners () {
//   imageOne.removeEventListeners('click');
//   imageTwo.removeEventListeners('click');
//   imageThree.removeEventListeners('click');
// }

function randomImageGenerator () {

  //generaes the final account form
  if (maxClickedAllowed === 0) {
    //removeEventListeners();

    var resultsSection = document.getElementById('results-hidden');
    resultsSection.id = 'results-show';
    imageOne.className = 'hidden';
    imageTwo.className = 'hidden';
    imageThree.className = 'hidden';
    var intro = document.getElementById('intro');
    intro.className = 'hidden';
  
    for (var i = 0; i < allProducts.length; i++) {
      var resultsShow = document.getElementsByTagName('ul')[0];
      var responses = document.createElement('li');
      
      responses.textContent = allProducts[i].productName + ' was viewed ' + allProducts[i].numberOfTimesShown + ' times and had ' + allProducts[i].numberOfTimesClicked + ' votes.';
      
      resultsShow.appendChild(responses);
    }
  }

  //counts how many clicks each item gets
  if (event) {
    for (var j = 0; j < allProducts.length; j++){
      if (event.target.alt === allProducts[j].productName) {
        allProducts[j].numberOfTimesClicked++;
        maxClickedAllowed--;
        console.log(allProducts[j].numberOfTimesClicked);
      }
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

  //counts how many times a product is shown
  for (var k = 0; k < allProducts.length; k++){
    if (k === randomNumber) {
      allProducts[k].numberOfTimesShown++;
    }
  }

  //image #2
  randomNumber = Math.floor(Math.random() * allProducts.length);

  while (randomNumber === productsShown[productsShown.length - 1] || randomNumber === productsShown[productsShown.length - 2] || randomNumber === productsShown[productsShown.length - 3] || randomNumber === productsShown[productsShown.length - 4]) {

    randomNumber = Math.floor(Math.random() * allProducts.length);

  }

  productsShown.push(randomNumber);

  imageTwo.src = allProducts[randomNumber].filepath;
  imageTwo.alt = allProducts[randomNumber].productName;

  for (k = 0; k < allProducts.length; k++){
    if (k === randomNumber) {
      allProducts[k].numberOfTimesShown++;
    }
  }

  //image #3
  randomNumber = Math.floor(Math.random() * allProducts.length);

  while (randomNumber === productsShown[productsShown.length - 1] || randomNumber === productsShown[productsShown.length - 2] || randomNumber === productsShown[productsShown.length - 3] || randomNumber === productsShown[productsShown.length - 4] || randomNumber === productsShown[productsShown.length - 5]) {

    randomNumber = Math.floor(Math.random() * allProducts.length);

  }

  productsShown.push(randomNumber);
  imageThree.src = allProducts[randomNumber].filepath;
  imageThree.alt = allProducts[randomNumber].productName;

  for (k = 0; k < allProducts.length; k++){
    if (k === randomNumber) {
      allProducts[k].numberOfTimesShown++;
    }
  }
}

if (productsShown.length > 75) {
  var resultsSection = document.getElementById('results-hidden');
  resultsSection.id = 'results-show';
  imageOne.className = 'hidden';
  imageTwo.className = 'hidden';
  imageThree.className = 'hidden';

  for (var i = 0; i < allProducts.length; i++) {
    resultsSection.innerHTML(this.responses[i]);
  }
}


initalizeDatabase();
setUpEventListener();
randomImageGenerator();

