import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import "../css/RestaurantDetailPage.css";

//Route for showing a restaurants reviews and star ratings

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        const totalReviewsGiven = response.data.data.reviews.map(({ rating }) => rating).reduce((acc, currentItem) => acc + currentItem, 0);
        const average_rating = totalReviewsGiven / response.data.data.reviews.length;

        setSelectedRestaurant({ ...response.data.data, average_rating });
      } catch (err) {
      }
    };

    fetchData();
  }, []);

  // const handleGoBack = (id) => {
  //   history.push(`/`);
  // };

  return (
    <div className="RestaurantDetail">
      {selectedRestaurant && (
        <>
          <Link to="/restaurants">
            <button
              className="btn btn-primary"
            >Go back</button>
          </Link>

          <h1 className="text-center display-1">
            {selectedRestaurant.name}
          </h1>
          <div className="star">
            <StarRating rating={selectedRestaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.reviews
                ? `(${selectedRestaurant.reviews.length})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;