//This function will be invoked in the ContactForm.js
//the values argument is being passed from the Formik library used in the ContactForm.js component
//It contains the values of the form fields being used in the form
//Inside of the function we will set up an empty object named errors - it is empty because we don't know if there are going to be any errors when someone is filling out the form
//The validateContactForm is a functio n which in the rela world, doesn't have to be written by us.
//Formik is very often used with a 3rd party library named "YUP" which can perform form validations

//Firts we will check if the values object for the first name is NOT truthy - meaning the field is left empty
//If that is the case - then we will set the errors object to be equal to the string "Required"
//Next we will check if the first name that is entered has less than 2 characters and if that is the case the errors object will have a value of "Must be at least 2 characters"
//Next we'll check if the first name entered has more than 15 characters and if that is the case the errors object will now have a value of "Must be 15 chracters or less"

//Next we'll check aboslutely the same things but for the last name
//Next we'll set up the regex variable "reg" that we'll use to check if all characters entered for the phone number field are digits
//When we run the reg.test method with the "not" operator -! in front of it and we are checking values.phoneNum - we are basically checking
//if the characters entered in the phone number field are falsy or NOT truthy, and if that is the care we set up the errors object to say that the phone  number should have didgts only
//For the last check we'll check if the values for the email contain the '@' symbol and of not we'll set the errors object equal to the adequate warning

//At the end we will simply return the errors object - which will be empty if no errors but will contain the appropriate error message depending on the error that was detected

export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required"
    } else if (values.firstName.length < 2) {
        errors.firstName = "Must be at least 2 characters"
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less"
    }

    if (!values.lastName) {
        errors.lastName = "Required"
    } else if (values.lastName < 2) {
        errors.lastName = "Must be at least 2 characters"
    } else if (values.lastName > 15) {
        errors.lastName = "Must be 15 characters or less"
    }

    const reg =/^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = "The phone number should contain digits only"
    }

    if (!values.email.includes("@")) {
        errors.email = "Emails should contain an @";
    }

    return errors;
}