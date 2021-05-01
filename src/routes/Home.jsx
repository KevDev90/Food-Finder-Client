import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="body-wrapper"> 
        <AddRestaurant />
        <RestaurantList />
      </div>
    </div>
  );
};

export default Home;