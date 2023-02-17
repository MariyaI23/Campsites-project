import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

//This file - promotionsSlice.js is NOT a component
//Next we will write selector functions that will select and return the entire array of promotions
//We can add export at the beginning of the function to define it and export it at the same time
//This promotionsSlice.js file will be treated as the single source of truth for all promotions data. That way if we need to alter
//the promotions data at any point we only need to alter it here.
//At any point that we need to select a new portion of our promotions data, we can create another selector function here.


//This selector function will be used to display 1 of the promotions from the PROMOTIONS array that has it's featured property set to true (if we check all the promotions in the PROMOTIONS.js we can see that there is only promotion that has featured set to true)
//This promotion will be displayed on the Home page (but this selector function will be called in the DisplayList.js component)
//We will use the find() method to go over the array of promotions to find the one we want
//The find() method has 1 argument - that is a testing function. Whenever this testing function returns a truthy value then our test has passed
//In this case we don't have to write promotion.featured===true which is redundant. It is enough just to write promotion.featured - either this featured property is truthy in which case this item will be returned from the array ot it is not.

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured)
}
