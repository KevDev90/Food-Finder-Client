import React from "react";
import "../css/StarRating.css";

//Component for determining how many Stars are depicted with CSS on reviews page

const StarRating = ({ rating }) => {
  //rating =4
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fa fa-star filled text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="fa fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i key={i} className="fa fa-star text-warning"></i>);
    }
  }
  return <>{stars}</>;
};

export default StarRating;