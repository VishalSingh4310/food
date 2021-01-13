import React, { useEffect } from "react";
import { fetchData } from "../store/food_action";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/Navbar";
import Card from "../components/Card";
import Lottie from "react-lottie";
import LoadingAnimation from "../lotties/9619-loading-dots-in-yellow.json";
import { images_data } from "../dummy-data";

const MainScreen = () => {
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.food.food);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main_cont">
      <NavBar />
      <div className="heading">
        <h2>Foods</h2>
        <span className="line"></span>
      </div>
      <div className="card_cont">
        {Data.length !== 0 &&
          Data.map((item, index) => {
            return (
              <Card
                key={item._id}
                isactive={item.isActive}
                name={item.name}
                id={item._id}
                image_url={images_data[index]}
                // parent_name={item.parent.name}
                // parent_id={item.parent._id}
              />
            );
          })}
      </div>
      {Data.length === 0 && (
        <div className="empty_cont">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      )}
    </div>
  );
};

export default MainScreen;
