import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import "../css/AddRestaurant.css";

//Component for Adding a Restaurant

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
    }
  };
  return (
    <div className="add-container">
      <form action="">
        <div className="form-r">
          <div className="name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input"
              placeholder=" Restaurant name"
            />
          </div>
          <div className="location">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="price">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="input"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="add-btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;