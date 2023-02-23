import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

//In the CampsiteDetail functional component's parameter list we are desctructuring the argument that was passed to this component
//when it was rendered in the CampsitesDirectoryPage.
//Since this argument represents a random campsite that is passed over here, we can further destructure some of the properties
 //that we will need,that each campsite object has in the CAMPSITES array - in this case {image, name, description}
 // the top prop used in the CardImg reactstrap component is a Boolean value. Just by its presence it implies that it is true.
 //Then we need to update our App.js component

 //After the creation of the CampsiteDetailPage.js component, the CampsiteDetail.js component will get rendered there and not in the CampsitesDirectoryPage any longer
 //therefore the {campsite} that is being passed as an argument and destructured in the parameter's list here is being now passed from
 //the CampsiteDetailPage and this argument will contain the campsite object that will be returned from invoking the selectCampsiteById function in the CampsiteDetailPage
const CampsiteDetail = ({campsite}) => {
    const {image, name, description} = campsite;
    return (
        <Col md="5" className="m-1">
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