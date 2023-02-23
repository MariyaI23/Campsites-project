import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//This component will be used to add Breadcrumbs
//When we render this component from other components we will be passing it up to 2 props named "current" and "detail" that we have destructured here
//We will use another way for conditional rendering here by using inline && logical operator which doesn't require writing if/else logic
//The logical && operator performs what is known as "short-circuit" evaluation - it first checks if the left operand if truthy and if yes, only then it evaluates the right operand
//If the left operand evaluates and false then it will not even check the right operand and it will just return false.
//The "detail" prop that we are passing here, may or may not hold the boolean value of thrue
//So when we use it as the left operand, if the value it holds it false, then the operation will stop and will never reach the right operand
//However, if "detail" holds a truthy value then the right operand will be returned
//We will render another BreadcrumbItem as the right operand
//After the conditional rendering we will add another BreadcrumbItem with the boolean value of active - which means the one we are currently on
//Inside of it we will use the other passed in prop - "current" which will be string
//Below the closing Breadcrumb component we will show the "current" value one more time with an <h2> tag
//Now we need to render this component on our pages - see pages folder

const SubHeader = ({current, detail}) => {
    return (
        <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                {detail && (
                <BreadcrumbItem>
                  <Link to="/directory">Directory</Link>
                </BreadcrumbItem>
                )}
                <BreadcrumbItem active>{current}</BreadcrumbItem>
              </Breadcrumb>
              <h2>{current}</h2>
              <hr />
            </Col>
        </Row>
    )
};

export default SubHeader;