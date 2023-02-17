import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

//In the CampsiteDetail functional component's parameter list we are desctructuring the argument that was passed to this component
//when it was rendered in the CampsitesDirectoryPage.
//Since this argument represents a random campsite that is passed over here, we can further destructure some of the properties
 //that we will need,that each campsite object has in the CAMPSITES array - in this case {image, name, description}
 // the top prop used in the CardImg reactstrap component is a Boolean value. Just by its presence it implies that it is true.

 //Then we need to update our App.js component

const CampsiteDetail = ({campsite}) => {
    const {image, name, description} = campsite;
    return (
        <Col md="12" className="m-4">
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

export default CampsiteDetail;