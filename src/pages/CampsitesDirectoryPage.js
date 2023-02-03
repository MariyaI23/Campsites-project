import {Container, Row, Col, Button} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import {selectRandomCampsite} from '../features/campsites/campsitesSlice';

// CampsiteDetail will take in a single prop, which we'll call campsite. We'll set its value to a JavaScript variable named selectedCampsite. 
//Since this is JavaScript used inside JSX, we must surround it in curly braces.
// Now we need to create that variable:
// In the CampsitesDirectoryPage component, above the return statement, we will declare a const named selectedCampsite. 
// Its value will be the return value of the selectRandomCampsite() function (basically we are invoking this function; the retunr value from it was a random campsite)

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite)
    }

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
    )
};

export default CampsitesDirectoryPage;