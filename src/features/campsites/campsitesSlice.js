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
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
} 