import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from "./app/assets/img/logo.png"
import './App.css';

/*The href="/" in the NavbarBrand below means that when someone clicks on the Logo they'll be taken to our root folder (the home page of our app) */

function App() {
  return (
    <div className="App">
      <Navbar dark color="success" sticky='top' expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={NucampLogo} alt="nucamp logo"/>
          </NavbarBrand>
        </Container>
      </Navbar>
      Let's get started!
    </div>
  );
}

export default App;
