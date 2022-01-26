const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (sendTo, notifyFunction) => {
  return notifyFunction(sendTo);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));