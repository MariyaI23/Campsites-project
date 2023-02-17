import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

//This will just be a presentation component that will be used to display the featured Campsite and Promotion on the Home page
//This component is rendered in the DisplayList component where the prop item is being passed to it
//Here we are destructuring it as this prop should return an item from the Campistes or the Promotiosn array
//the item that is returned is an object
//above the return statement we are destructuring some of the properties of that object so we can display them in a Card
const DisplayCard =({item}) => {
    const {image, name, description} = item;

    return (
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
}

export default DisplayCard