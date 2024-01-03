// Question 1 : 

const printName = (name) => 'Hi ' + name;


// Question 2 : 

const printBill = (name, bill) => `Hi  ${name}, please pay: ${bill}`;

//Question 3 : Modify the following code such that the object properties are destructured and logged.
const person1 = {
    fullName: 'Noam Chomsky',
    age: 92
}

const { fullName, age } = person1;
console.log(fullName);
console.log(age);


