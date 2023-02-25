//import React from 'react';
//Since React 17 and after the above import is no longer required

import './App.css';
//import CampsitesList from './features/campsites/CampsitesList';
import {Routes, Route} from "react-router-dom";
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';


/*The href="/" in the NavbarBrand below means that when someone clicks on the Logo they'll be taken to our root folder (the home page of our app) */
//We are rendering the CampsitesList component under the Header component. The CampsitesList component doesn't take any props because if we look
//in the CampsitesList.js we will see that the arrow function for this functional component has an empty parameter list
//After the creation of the CampsiteDirectoryPage.js component, we are no longer rendering the CampsitesLits component here
//We will render the CampsiteDirectoryPage.js instead as this new component will not only show the list of Campsites but also a random featured campsite 
//Next we will be installing Router so we can navigate between the different views ('pages') of our app
//We will remove the CampsitesDirectoryPage.js component from being rendered between the Header and Footer component
//Nested inside of the Routes component we will set up each individual Route
//Each Route components - All path props are strings, so they will be in single quotes. All element props are components, and are passed using curly braces.
//The Route with a path="directory/:campsiteId" has that colon (:) in front of campsiteId because
//this is how we let react-router know that we intend to use campsiteId as a parameter name and NOT a literal path like the words contact or directory used in the above Routes

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="contact" element={<ContactPage />}/>
      <Route path="directory" element={<CampsitesDirectoryPage />}/>
      <Route 
        path="directory/:campsiteId"
        element={<CampsiteDetailPage/>}
      />
      <Route path="about" element={<AboutPage />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
