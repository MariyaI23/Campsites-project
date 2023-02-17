import { CAMPSITES } from "../../app/shared/CAMPSITES";

//This file - campsitesSlice.js is NOT a component
//Next we will write a selector function that will select and return the entire array of campsites
//We can add export at the beginning of the function to define it and export it at the same time
//Next we will update our component - CampsitesList.js to use this selector function
//This campsitesSlice.js file will be treated as the single source of truth for all campsites data. That way if we need to alter
//the campsites data at any point we only need to alter it here.
//At any point that we need to select a new portion of our campsites data, we can create another selector function here.

export const selectAllCampsites = () => {
    return CAMPSITES
}

//This selector function will return a single campsite chosen at random from the campsites array.
//Since our ultimate goal is to click on a campsite and have the details of that campsite display
//we will need a different selector function that doesn't pull a random campsite but pulls a campsite by its id
//we will be commenting out the selectRandom Campsite() function below

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// }

//This new selectCampsiteById() function takes an argument of id 
//and returns the first object in the CAMPSITES array with a matching id (that will be the id that was passed in as an argument to the selectCampsiteById function).
//This function is invoked in the CampsitesDirectoryPage where we are passing the id stored in the state variable - campsiteId, which is 0 since this variable holds whatever we have set the initial state to be
//Aftre the creation of the CampsiteDetailPage and the restructuring of the app to show each campsite's details that is clicked on the Directory page into its own separate page
//we need to fix this part of the below selector function: campsite.id===id
//we are no longer comparing a number to a number id===id, now that we are getting the value of id froma URL parameter, the value of id is now a string, not a number
//in order to turn the value of id back into a number we can use the built in JS function parseInt() - now can again compare campsite.id === id, since id is now again a number
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id))
} 

//This selector function will be used to display 1 of the campsites from the CAMPSITES array that has it's featured property set to true (if we check all the campsites in the CAMPSITES.js we can see that there is only campsite that has featured set to true)
//This campsite will be displayed on the Home page but this selector function will be invoked first in the DisplayList.js component
//We will use the find() method to go over the array of campsites to find the one we want
//The find() method has 1 argument - that is a testing function. Whenever this testing function returns a truthy value then our test has passed
//In this case we don't have to write campsite.featured===true which is redundant. It is enough just to write campiste.featured - either this featured property is truthy in which case this item will be returned from the array ot it is not.

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured)
}