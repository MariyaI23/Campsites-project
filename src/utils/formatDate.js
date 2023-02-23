//This is needed because in the COMMENTS array the date is stored in a specific format which is an international standard for storing
//time stamps so they are the same regadless of the time zone we are in. However these time stamps need to be formated in a human readable way
//This is done by using Vanilla JS so React is not used here

//The string - date will be passed to the formatDate function from the Comments.js component where this function is invoked
//In the return statement we are using a JS built in class Intl.DateTimeFormat()
//The arguments we are providing like year, month, day are used so we can display the date in a format we like
//We will also use the format() method to create a Date string with the format that we want and we will return this string from this function
export const formatDate = (date) => {
   return new Intl.DateTimeFormat("en-US", {
     year: "numeric",
     month: "short",
     day: "2-digit",
   }).format(new Date(Date.parse(date)));
}