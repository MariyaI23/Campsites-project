//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {Col, Row} from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

//This component was created 3rd after the CampsiteCard.js and the App.js components
//Before the return statement we will use the newly imported selector function from campsitesSlice.js and assign its return value
//which is the entire array of campsites to the campsites variable
//In that case we will no longer use CAMPSITES to map over, inside of the return statement, and will replace it with that variable campsites that we just created
//Also, we will no longer need the {CAMPSITES} import

//We will be passing as an argument the setCampsiteId function. It is passed as a prop from the CampsitesDirectoryPage.js, that is why is in {} as we are destructuring it from the props object
//We will invoke the setCampsiteId function inside of an onClick event handler. This event handler will be added as a prop to the <Col> component inside of the return statement
//This Col component is a like a <div> which wraps around each CampsiteCard component, and can be clicked.
//When calling the setCampsiteId function we will provide a new value to update the state - and that will be a new campsiteId.
//We can provide this new value by using campsite.id. The reason we can do this is because right above the return statement we are mapping over the entire CAMPSITES aray which we stored in the campsites variable
//The map() method makes each of our campsites display after each iteration in its own <Col> and every time it iterates it will be using a different campsite from the CAMPSITES array
//so the campsite.id value will change at each iteration
//The onClick prop will cause each of the four campsites shown in the CampsitesList component to be clickable, and when clicked, each will fire the setCampsiteId function, 
//which will update the campsiteId state that belongs to the CampsiteDirectoryPage component.
//This state update will trigger React to re-render, and since the campsiteId value has changed, so will the selectedCampsite value in CampsiteDirectoryPage, 
//which is then passed to CampsiteDetail to display the new campsite's details.

//After the creation of the CampsiteDeatilaPage and the restructuring of the CampsitesDirectoryPage, we are no longer passing the setCampisteId
//argument to the CampsitesList parameter list
//therefore we can coment out the onClick prop that uses the setCampsiteId function that we used to pass
//But we still need a way for users to click on a campsite to see its details
//We will use the CampsiteCard.js component for this



const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col 
                        md="5" 
                        className="m-4" 
                        key={campsite.id}
                        // onClick={() => setCampsiteId(campsite.id)}
                    >
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                )
            })}
        </Row>
    );
}

export default CampsitesList;

