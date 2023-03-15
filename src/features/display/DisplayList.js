import { Col, Row } from "reactstrap";
//import DisplayCard from "./DisplayCard";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

//Inside of the DisplayList component we will create an array named items that will hold the returned object from invoking the selectFeaturedCampsite() function which we set up in campsitesSlice.js
//and the returned object from invoking the selectFeaturedPromotion() function which we ste up in promotionsSlice.js
//Inside of the return statement we will map over the items array. When we use map() React expects us to provide a unique key for each item that will be returned
//and we will use "idx" standing for index as each item in the campsites and promotions array has a unique index

//After we created the AnimatedDisplayCard.js component, we will start to render it here instead of DisplayCrad.js

//We added the conditional logic of item && (logical "and" operator) (rest of code for <Card> here) because if the data in our CAMPISTES, PROMOTIONS, PARTNERS array changes and we no longer have a featured: true in one of the objects there
//by adding this logic, we will ensure that this array is skipped and only the other arrays will be mapped that have object/s with a property of featured: true
//That way we can still have the rest of the promotion cards display on the Home page
//If we didn't do this and one of the arrays didn't have an object with featured: true property in it, then none of the other items from the other arrays will display at all and the Home page will be empty

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

  return (
    <Row>
        {items.map((item, idx) => {
            return (
              item && (
                <Col md className="m-1" key={idx}>
                    <AnimatedDisplayCard item={item}/>
                </Col>
              )
            )
        })}
    </Row>
  )
}

export default DisplayList