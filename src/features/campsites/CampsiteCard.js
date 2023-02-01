import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


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

const CampsiteCard = ({campsite}) => {
    const { image, name } = campsite;
  return (
    <Card>
      <CardImg
        width="100%"
        src={image}
        alt={name}
      />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;