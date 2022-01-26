// 15 - Objects

// like a hash in Ruby

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// Values can be accessed in two ways:

// Print the value of the city attribute ('London').
console.log(person.address.city);
console.log(person['address']['city']);

// Print the value of the second hobbies value ('tennis').
console.log(person.hobbies[1]);
console.log(person['hobbies'][1]);