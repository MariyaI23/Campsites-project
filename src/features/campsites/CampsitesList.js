import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {Col, Row} from "reactstrap";
import CampsiteCard from "./CampsiteCard";

//This component was created 3rd after the CampsiteCard.js and the App.js components



const CampsitesList = () => {
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

