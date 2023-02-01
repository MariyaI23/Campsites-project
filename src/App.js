//import React from 'react';
//Since React 17 and after the above import is no longer required

import './App.css';
import CampsitesList from './features/campsites/CampsitesList';
import Header from "./components/Header";
import Footer from "./components/Footer";


/*The href="/" in the NavbarBrand below means that when someone clicks on the Logo they'll be taken to our root folder (the home page of our app) */
//We are rendering the CampsitesList component under the Header component. The CampsitesList component doesn't take any props because if we look
//in the CampsitesList.js we will see that the arrow function for this functional component has an empty parameter list

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
