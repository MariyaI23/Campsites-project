//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {Col, Row} from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

//This component was created 3rd after the CampsiteCard.js and the App.js components
//Before the return statement we will use the newly imported selector function from campsitesSlice.js and assign its return value
//which is the entire array of campsites to the campsites variable
//In that case we will no longer use CAMPSITES to map over, inside of the return statement, and will replace it with that variable campsites that we just created
//Also, we will no longer need the {CAMPSITES} import


const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className="ms-auto">
            {CAMPSITES.map((campsite) => {
                return (
                    <Col md="5" className="m-4" key={campsite.id}>
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                )
            })}
        </Row>
    );
}

export default CampsitesList;

