import { formatDate } from "../../utils/formatDate";

//We are destructuring the comment object in the argument's list. This object was passed here from the CommentsList component
//where we are rendering the Comment component
//Before the return statement we are further distructuring some properties of the comment object
//A more advanced use of the destructuring assignment syntax involves assigning a different variable name to a destructured property during the process of destructuring it.
// For example, the comment prop that we are destructuring has a property of text.
// We can destructure this text property as commentText by using the syntax: text: commentText
// This will allow us to refer to the comment.text property as commentText.
//This makes the code more clear and it is helpfull when we might need to destructure multiple objects that have the same names for their properties
const Comment =({comment}) => {
  const { text: commentText, rating, author, date} = comment;

  return (
    <p>
        {commentText}
        <br/>
        {rating}/5 stars -- {author}, {formatDate(date)}
    </p>
  )
};

export default Comment;