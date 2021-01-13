import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/Navbar";
import Card from "../components/Card";

const SecondScreen = (props) => {
  const Data = useSelector((state) => state.food.specific_food);

  return (
    <div className="main_cont">
      <NavBar />
      <div className="heading">
        <h2>Products</h2>
        <span className="line"></span>
      </div>
      <div className="card_cont">
        {Data.length !== 0 &&
          Data.map((item) => (
            <Card
              key={item._id}
              isactive={item.isActive}
              name={item.name}
              id={item._id}
              // parent_name={item.parent.name}
              // parent_id={item.parent._id}
              {...props}
            />
          ))}
      </div>
      {Data.length === 0 && (
        <div className="empty_cont">
          <img className="empty_img" src="/empty.svg" alt="empty" />
          <p>Products not found</p>
        </div>
      )}
    </div>
  );
};

export default SecondScreen;
