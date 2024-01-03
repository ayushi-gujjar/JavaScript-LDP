

/** ---------------------Custom Objects---------------------- */

let person = new Object();
person.firstName = 'Ayushi';
person.lastName = 'Gujjar';
person.value = function() {
    console.log(this)
    console.log(this.firstName + ' ' + this.lastName);
}
console.log(person);

person.value();


/** -------------------- Closure -------------------- */

// Fucntion along with it's lexical scope is knowns as closure


function a(first) {
    function b(second) {
        console.log(first + second);       
    }
    return b;
}


const closureFunction = a(10);

closureFunction(5);


// example 2

function createCounter() {
    let count = 0;


    function increament() {
        count++;
        console.log(count, 'Counter');
    }
    return increament;
}


const counterOne = createCounter();
const counterTwo = createCounter();

counterOne();
counterOne();
counterOne();

counterTwo();