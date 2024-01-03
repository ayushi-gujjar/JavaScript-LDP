


// Assignment Question

// Question 1 : Write a program to demonstrate how a function can be passed as a parameter to another function.

//function that accepts function known as higher order function.
callback = () => {
    console.log("here in main callback function")
}

callCallbacl = (callback) => {
    setTimeout(() => {
        callback();
        console.log("in function from where callback is called")
    }, 5000)
}

callCallbacl(callback);


//Question 2 : 

shortenName = (firstName,lastName) => {
    if(firstName && lastName) {
        const result = firstName.charAt(0).toLocaleUpperCase() + lastName.charAt(0).toLocaleUpperCase();
        console.log(result);
        return result;
    }
    return null;
}


shortenName('ayushi','gujjar');