import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

//This component is being create as we will now stop displaying a campsite that is clicked on at the CampsiteDirectoryPage  but rather once a campsite is clicked there
//it will be displayed on its own page
//The useParams() hook returns an object, campsiteId is a property of this object so we are destructuring it to get access to it
//the campsiteId variable will contain a number that will correspond to the Id property of each campsite object.
//Then we decalre a new variable "campiste" that will hold the return value from invoking the selectCampisteById function which we set up
//in campsitesSlice.js
//As an argument we are passing that same campsiteId that we destructured from useParams()
//The invoking of the selectCampsiteById function should return that campsite from the CAMPSITES array that matches that Id
//Inside of the return statement we will render the CampsiteDetail component by passing it a prop (which we can also name a campsite)
//this prop will contain the campsite object that will be returned from invoking the selectCampsiteById function
//Next we need to add a new Route to our App.js

const CampsiteDetailPage = () => {
   const { campsiteId } = useParams();
   const campsite = selectCampsiteById(campsiteId);

   return (
    <Container>
        <Row>
            <CampsiteDetail campsite={campsite}/>
        </Row>
    </Container>
   )
}
export default CampsiteDetailPage;