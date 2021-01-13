import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchCategory } from "../store/food_action";

const Card = (props) => {
  const history = useHistory();
  console.log(history.location.pathname);

  const dispatch = useDispatch();

  const exploreHandler = async (_id) => {
    console.log("start");

    await dispatch(fetchCategory(_id));
    history.push(`/category/${_id}`);
    console.log("done");
  };

  return (
    <div className="card">
      <img
        src={
          props.image_url
            ? props.image_url
            : "https://images.unsplash.com/photo-1610421467721-78f5b38b8f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        alt="img"
      />

      <div className="content">
        <div className="head_card">
          <h3>{props.name}</h3>
          {props.isactive ? (
            <span className="avail">Available</span>
          ) : (
            <span className="not_avail">Not Available</span>
          )}
        </div>

        {history.location.pathname === "/" ? (
          <button onClick={exploreHandler.bind(this, props.id)}>Explore</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
