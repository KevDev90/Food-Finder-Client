import React from "react";
import { Link } from "react-router-dom"
import "../css/Landing.css";

//Landing Page component

const Landing = () => {
  return (
    <div className="landing-container">
    <div className="hero">
      <div className="wrapper">
      <header>
        <h1>Welcome to Fantastic Food Finder!</h1>
      </header>
      <article>
        <p>Your one stop application for rating and leaving reviews about Restaurants you've visited!</p>
        <p>Enter a Restaurant name and location in the text inputs, and then select a price range. After that, click the add button after all the information is filled out to add the Restaurant to the table!</p>
        <p>On a mobile view you can scroll horizontally to see the full list of Restaurants!</p>
        <p>You can also Edit and Delete a Restaurant after creating it through the buttons on the Restaurant row!</p>
        <p>After creating a Restaurant you can click anywhere on that Restaurants row in the table to write a review and rate that particular Restaurant!</p>
        <p>Bon Appetit!</p>
      </article>
      
      <Link to="/restaurants"><button>Start Application</button></Link>
      </div>
    </div>  
    </div>
  );
};

export default Landing;