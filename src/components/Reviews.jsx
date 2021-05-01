import React from "react";
import StarRating from "./StarRating";
import "../css/Reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="review-grid">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card"
            // style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <hr/>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;