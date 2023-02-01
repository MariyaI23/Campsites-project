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

//This selector function will return a single campsite chosen at random from the campsites array
export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
}