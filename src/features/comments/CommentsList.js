import {Col} from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';

//In CommentsList's parameter list, we will destructure the campsiteId.
//In the component body,we will declare a const named comments and assign to it the return value from calling 
//selectCommentsByCampsiteId with the argument of campsiteId. 
//We expect this selector function to return an array of comments objects, rather than a single value.
//It is possible that a campsite doesn't have a comment associated with it so we will use conditional rendering
//This if condition will check to make sure that the comments variable is not a falsy value such as undefined or null.
// Recall that an empty array is not a falsy value, so it will pass this test. 
//Then, we can check for the length of the comments array.
//In other words we are checking for a valid, non-empty array of comments, if the conditions passes we enter into the return statement
//Inside of it we will run the map() method on the comments array and for each comment we will return a Comment component
//since we are creating this list of comments in dynamic way, we need to use a unique key for each comment by using the index of each comment
//We will also pass the entire comment object as a prop to the Comment component so that it can use each of the comment object's
//properties such as the author, rating etc to render each comment
//Below the if condition we will have another return statement that will be used if the if condition evaluated as false
//Then we need to update the CampsiteDetailPage.js as we will be rendering there the CommentsList.js. The campsiteId argument was passed
//from there to here

const CommentsList = ({campsiteId}) => {
  const comments = selectCommentsByCampsiteId(campsiteId);
     if (comments && comments.length > 0) {
        return (
           <Col md="5" className='m-1'>
              <h4>Comments</h4>
              {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment}/>
                
              })}
           </Col>
        );
    }

    return (
        <Col md="5" className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    )
};

export default CommentsList;