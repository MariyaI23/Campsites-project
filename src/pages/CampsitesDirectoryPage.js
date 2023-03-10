//import { useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
//import {selectRandomCampsite} from '../features/campsites/campsitesSlice';
//import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../components/SubHeader';

// CampsiteDetail will take in a single prop, which we'll call campsite. We'll set its value to a JavaScript variable named selectedCampsite. 
//Since this is JavaScript used inside JSX, we must surround it in curly braces.
// Now we need to create that variable:
// In the CampsitesDirectoryPage component, above the return statement, we will declare a const named selectedCampsite. 
// Its value will be the return value of the selectRandomCampsite() function (basically we are invoking this function; the return value from it was a random campsite)
// After introducing useState() hook, the above mentioned code is no longer needed

//The initial value of selectedCampsite is determined by the argument passed into useState() -- 
//in this case, the object returned from selectRandomCampsite().
//This will use the toggleCampsite() function that is now defined by React and returned to us from useState(). 
//This function will be used by React to update the value of selectedCampsite to a random campsite returned from calling 
//selectRandomCampsite() every time the Button component is clicked.
//If we view our app in your browser, we'll see that
//this time, when we click the Button component, the campsite rendered by the CampsiteDetail component update each time.
//The Button component is used only for demonstration purposes. The ultimate goal is to allow 
//clicking on a campsite in the CampsitesList component to update the campsite displayed in CampsiteDetail.

//In the campsitesSlice.js file we created a new selector function selectCampsiteById() and we will use that instead of the 
//selectRandomCampsite() function
//Also we will no longer need the Button import or that component and its data

//Next, we will update our invocation of the useState() hook, above the return statement. 
//Instead of setting a local state variable to store an entire campsite object, it will instead store an id number 
//that corresponds to a campsite. We will initialize it to 0, and rename the state variable name 
//and the state-changing function to campsiteId and setCampsiteId. 
//Under the updated call to useState() we add the selectedCampsite variable because
//the CampsiteDetail component expects to be passed a campsite object and not only its id.
//So we are invoking the selectCampsiteById function (created in the campsitesSlice.js file) and passing it as an argument
//the value stored in the state variable - campsiteId, which we have set to 0 as the initial state.
//The selectCampsideById() fucntion will return an object which is exactly what the CampsiteDetail component is expecting
//We must now update CampsitesList so that it is able to update the campsiteId when one of the campsites that it lists is clicked.
//We can do this by first passing the setCampsiteId function provided to us by useState() to CampsitesList as a prop.
//We are not invoking the setCampsiteId function here, we are just passing it.
//We can give the prop the same name as the function just to avoid confusion but technically the prop can be named anything


//After the creation of the CampsiteDetailPage.js component, the CampsiteDetail.js component will get rendered there an not here anymore
//That way on the this page - CampsiteDirectoryPage.js we will only be rendering the list of campsites but once a user clicks on a campsite
//this campsite's details will no longer be shown on this page but on a page of their own - CampsiteDetailPage
//Therefore we no longer need the useState hook here so we can remove that import, also the CampsiteDetail component import and the import for the selectCampisteId function
//We will also coment out the variables prior to the return statement that deal with useState and the selector function
//Inside of the return statement the only thing that we will render is the CampsitesList component and we will no longer be passing the setCampsiteId={setCampsiteId} prop in it

const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();

    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite)
    //}

    //const [campsiteId, setCampsiteId] = useState(0);
    //const selectedCampsite = selectCampsiteById(campsiteId)

    return (
        <Container>
            <SubHeader current="Directory" />
            {/* <Button onClick={() => toggleCampsite(selectRandomCampsite())}>
                Select Random Campsite
            </Button> */}
            {/* <Row> */}
                {/* <Col sm='5' md='7'> */}
                    <CampsitesList />
                {/* </Col> */}

                {/* <Col sm='7' md='5'> 
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col> */}

            {/* </Row> */}
        </Container>
    )
};

export default CampsitesDirectoryPage;