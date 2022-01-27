// 14 - Mapping New Arrays

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  return names.map(name => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
}

console.log(generateMessages(names));


// 16 - Arrays and Objects

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages2 = (objects) => {
  return objects.map(object => {
    return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`;
  });
}

console.log(generateMessages2(namesAndDiscounts));