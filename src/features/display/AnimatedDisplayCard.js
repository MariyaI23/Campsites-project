import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';


//This component was created as a copy of DisplayCard.js
//We will use useSpring() hook from React-Spring to add animations
//To do this we will need to ste up useState logic first
//Then we create a variable which will hold the object returned from useSpring() hook
//This object should escribe the type of animation that we want to happen
//In our case we will use the opacity property to achieve a fade-in effect
//We will use the Ternary operator to state that if the value of the toggle state variable is true we want to set the opacity to 1 (which is 100%), if not - then - 0
//We also want to change the height from 0 to 100% - to do this we will use the transform property and again the Ternaray operator
//if toggle is true then we want the image's scale to be 100% width and 100% height -"scale(1,1)", if not then we want width of 100% but height of 0% - "scale(1,0)"
//We will also set up a config property which in itself takes an object as its value since there coulb be multiple configurations
//We are only seting up one configuration of duration: 500 - miliseconds or what we are saying is that we want to apply our animations over a period of half a second

//Since want these animations to be displayed when the component first renders on the page, but not when an update causes them to re-render,
//therefore we will use the useEffect() hook 
//Its first argument will be the callback function which will update the State to true
//The second argument will be an empty depencies array so we can tell React that we want to run this side effect only once when the component first mounts

//Finaly we need to add an animated.div as a wrapper around the <Card> component as we want to apply the animations to this component
//we need to add the style prop and pass it the animatedStyle object that we got from the useSpring hook

//Next we need to update the DisplayList.js component to use this


const AnimatedDisplayCard =({item}) => {
    const {image, name, description} = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? "scale(1,1)" : "scale(1,0)",
      config: { duration: 500}
    })

    useEffect(() => {
      setToggle(true)
    }, [])

    return (
      <animated.div style={animatedStyle}>
        <Card>
          <CardImg src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </animated.div>
    );
}

export default AnimatedDisplayCard