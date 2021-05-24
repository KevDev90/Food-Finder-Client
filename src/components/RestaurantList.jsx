import React, { useEffect, useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import "../css/RestaurantList.css";
import { trackPromise } from 'react-promise-tracker';

const RestaurantList = (props) => {
  const [resReviews, setResReviews] = useState({})
  const { restaurants, setRestaurants, selectedRestaurant } = useContext(RestaurantsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data);
      } catch (err) { }
    };
    // [5, 0]
    trackPromise(fetchData());
  }, []);

  useEffect(() => {
    const fetchData = () => {
      restaurants.map(async item => {
        const response = await RestaurantFinder.get(`/${item.id}`);
        const totalReviewsGiven = response.data.data.reviews.map(({ rating }) => rating).reduce((acc, currentItem) => acc + currentItem, 0);
        const average_rating = totalReviewsGiven / response.data.data.reviews.length;

        setResReviews((props) => ({ ...props, [item.id]: average_rating }))
        console.log(average_rating, "iiii")
      })
    }
    fetchData()
  }, [restaurants])

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <table className="fl-table" cellSpacing="0">
      <thead>
        <tr>
          <th scope="col">Restaurant</th>
          <th scope="col">Location</th>
          <th scope="col">Price Range</th>
          <th scope="col">Avg Rating</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <tr
                onClick={() => handleRestaurantSelect(restaurant.id)}
                key={restaurant.id}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                {/* <td>{renderRating(restaurant)}</td> */}
                <td>{!resReviews[restaurant.id] ? 0 : resReviews[restaurant.id]}</td>
                <td>
                  <button
                    onClick={(e) => handleUpdate(e, restaurant.id)}
                    className="btn btn-warning"
                  >
                    Update
                     </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, restaurant.id)}
                    className="btn btn-danger"
                  >
                    Delete
                     </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  )
};

export default RestaurantList;