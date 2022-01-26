const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
}

const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
}

const nums = ['1234567890987', '12345', '123', '123456', '123456789098'];

console.log(filterLongNumbers(nums));