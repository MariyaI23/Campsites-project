import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

//Inside of the DisplayList component we will create an array named items that will hold the returned object from invoking the selectFeaturedCampsite() function which we set up in campsitesSlice.js
//and the returned object from invoking the selectFeaturedPromotion() function which we ste up in promotionsSlice.js
//Inside of the return statement we will map over the items array. When we use map() React expects us to provide a unique key for each item that will be returned
//and we will use "idx" standing for index as each item in the campsites and promotions array has a unique index

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

  return (
    <Row>
        {items.map((item, idx) => {
            return (
                <Col md className="m-1" key={idx}>
                    <DisplayCard item={item}/>
                </Col>
            )
        })}
    </Row>
  )
}

export default DisplayList