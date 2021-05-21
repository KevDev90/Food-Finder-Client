import React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";
import "../css/UpdatePage.css";
import { Link } from "react-router-dom";

const UpdatePage = () => {
  return (
    <div>
    <Link to="/restaurants">
            <button
              className="btn btn-primary"
            >Go back</button>
          </Link>
      <h1 className="text-center">Update Restaurant</h1>
      <UpdateRestaurant />
    </div>
  );
};

export default UpdatePage;