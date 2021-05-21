import React from "react";
import { Link } from "react-router-dom"
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <p>Welcome to Fantastic Food Finder!</p>
      <p>Your one stop application for rating and leaving reviews about Restaurants you've visited!</p>
      <p>Enter a Restaurant name and location in the text inputs, and then select a price range. Click the add button after all the information is filled out to add the Restaurant to the table!</p>
      <p>On a mobile view you can scroll horizontally to see the full list of Restaurants!</p>
      <p>You can also Edit and Delete a Restaurant after creating it through the buttons on the Restaurant row!</p>
      <p>After creating a Restaurant you can click anywhere on that Restaurants row in the table to write a review and rate that particular Restaurant!</p>
      <Link to="/restaurants"><button>Start Application</button></Link>
    </div>
  );
};

export default Landing;