'use strict';

//constructor function
function ProductInstances(productName, filepath) {
  this.productName = productName,
  this.filepath = filepath,
  this.numberOfTimesShown = [];
  this.numberOfTimesClicked = [];
}

//event listener
  //listening for click

  //once clicked run the function:
    //generates three new non-duplicate images
      //grabs img position in the DOM using IDs
      //random number * length of array generates random index number for each image position
      //push random index numbers into an array
      //if statement for first image: new index matches previous 3 numbers in array, choose another one 

      //if statement for second image: new index matches previous 4 numbers in array, choose another one 

      //if statement for third image: new index matches previous 5 numbers in array, choose another one 

      //put image path in the ID image
      //put image name in alt

    //tracks which image got the click -- push index number to an array

// render the object instances

// at end, run a for loop through the array that displayed the images and add the index numbers together

// at end run a for loop through the click array and add the same index numbers together

// turn off event listener after 25 clicks and display list of products with text: "(Click Array) votes for (product name)"

//calculate percentate of time: number of times image was clicked on/number of time image appeard * 100

// create a table that displays: "(name of product) appeared (number of time appeared) times and was clicked on (number of times item was clicked) times. This is (percentage of times it was clicked)% of the time."