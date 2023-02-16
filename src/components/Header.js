import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//To group our navigation links together, we will install the Nav component that we imported from reactsrap
//This Nav component can have for example a className="ms-auto" which will handle the left margin, also a boolean prop of navbar
//Reactstrap will translate this Nav component into an HTML <nav> element with a bootstrap class of Navbar
//Inside of the Nav component we can render NavItems
//Inside of each NavItem we will set up a NavLink, each NavLink will havea className="nav-link" and a to prop that always begins with a "/" followed by whichever page we are linking to
//Inside each NavLink component we will add the content to be clicked
//The NavbarToggler is added so when viewing on small screens we can disply a hamburger menu
//The Collapse component wraps around the whole Nav component and is given the boolean prop navbar so it can be made responsive with the Navbar component
//Next we need to use the useState hook so we can make the hamburger menu button do something when we click it (close or open the menu)
//We will set the initial State to false (menu will not show)
//Then we will pass an onClick prop to the NavbarToggler component.The value of this onClick prop will be a function which will run once the toggler button is clicked
//This function will be an arrow function that will invoke the setMenuOpen function and we will pass an argument that we want the menuOpen variable which holds the initial State as "false" to now be changed to true - basically once the toggler is clieck the menu should now display
//Then we need to pass a prop to the Collapse component called "isOpen" and the value of this prop will determine if the toggler shows the menu or  not depending on clicking on it
//That way each time we click on the toggler the value of "isOpen" will change from true to false

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
      <Navbar dark color="success" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={NucampLogo} alt="nucamp logo" className="float-start" />
          <h1 className="mt-1">NuCamp</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className="fa fa-address-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Header;