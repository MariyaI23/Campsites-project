import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";


//The value of campsite used in props.campsite.image and props.campsite.name will come from CampsitesList.js where we are rendering the CampsiteCard component
//There we are passing the argument campsite to here. The value of the campsite is set to pull from the CAMPSITES array that we are maping over in CampsitesList.js//

//const CampsiteCard = (props) => {
//     return (
//        <Card>
//            <CardImg  width="100%" src={props.campsite.image} alt={props.campsite.name} />
//            <CardImgOverlay>
//                <CardTitle>{props.campsite.name}</CardTitle>
//            </CardImgOverlay>

//        </Card>
//     )
//}

//We will re-write the CampsiteCard component now using Destructuring Assignment Syntax which is a way to unpack properties
// from objects and arrays into discrete variables.
//To destructure an object in JavaScript, we list the keys in curly braces, and assign them to the object name.
//Instead of using props as a parameter, we can destructure it by using a destructuring assignment and unpack each prop
//This can be done by adding const {campsite} = props as a first line before the return statement
//Then we can remove the props. from src={props.campsite.image} and alt={props.campsite.name} so it will look like src={campsite.image} alt={campsite.name}
//HOWEVER, the way it is most often done in React is to destructure the props right in the parameter list of the function as listed below. We need to add {} around the key
//Then we need to further destructure the {campsite} object so we can write the name of each key where we want it. We do this by adding const {image, name} = campsite right before the retur statement
//That way we can further revise src={campsite.image} alt={campsite.name} by removing campsite. from it so it will look like src={image} alt={name}

//After some restructuring which will make it so when users click on a campsite in the CampisteDricetoryPage,this campsite will now
//display on its own page, we need to make every CampsiteCard into a clickable link, therefore we import Link from react-router-dom
//also we will now add the id to the image and name properties that we will destructuring from every campsite
//This id will be needed so the correct URL path will be identified based on the id of the campsite being clicked
//We will surround the <Card> with <Link> and we will pass a "to" prop that needs to equal the id of the campsite.
//The issue is that the "to" prop expects a string but the id is a number.
//One of the ways to turn the number into a string is to use the Template Literal syntax with `${id}`
//Now clicking on this <Link> will trigger this Route component that was added to App.js:
//<Route path="directory/:campsiteId" element={<CampsiteDetail />} />;
//which in its turn will route to the CampsiteDeatil page displaying whatever campsite's id was passed in here

const CampsiteCard = ({campsite}) => {
    const { id, image, name } = campsite;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;