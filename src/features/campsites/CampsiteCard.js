import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


//The value of campsite used in props.campsite.image and props.campsite.name will come from CampsitesList.js where we are rendering the CampsiteCard component
//There we are passing the argument campsite to here. The value of the campsite is set to pull from the CAMPSITES array that we are maping over in CampsitesList.js

const CampsiteCard = (props) => {
     return (
        <Card>
            <CardImg  width="100%" src={props.campsite.image} alt={props.campsite.name} />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>

        </Card>
     )
}

export default CampsiteCard;