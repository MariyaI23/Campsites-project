import { COMMENTS } from "../../app/shared/COMMENTS";


//If we look in the COMMENTS array, we will see that each object not only has its own index in the array but also has a campsiteId property
//which corresponds to a specific campsite. That is how we know which comment belongs to which campsite
//We will use this to write a selector function that will pull only the comments that belong to a specific campsite

//We are using an argument for the selector function of campsiteId - that will be the Id we want to match
//Inside we will filter through the array to return a new array - only with  the comments with the Id that matches the campsiteId that was passed in as an argument
//we are using parseInt() to turn the campsiteId into a string because we will initially receive it as a number
//This selector function will be invoked in the CommentsList.js component

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
};
