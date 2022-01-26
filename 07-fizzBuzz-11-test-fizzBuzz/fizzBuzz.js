const fizzBuzz = (num) => {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else {
    return num;
  } 
}

// for (let i = 1; i <= 100; i++ ){
//   console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
// }

module.exports = fizzBuzz;