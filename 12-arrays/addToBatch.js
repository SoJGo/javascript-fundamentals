const addToBatch = (arr, num) => {
  if (arr.length > 5) {
    return arr;
  }

  return arr.concat(num);
}

// Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.

// Now, make sure this function does not add the number if the array's length is already greater than 5 — it should just return the array untouched in that case.
