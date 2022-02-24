import React from "react";
import "./Home.css";

import { AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__container">
        <h1>Sorting Visualizer</h1>
        <h3>
          Made with{"\u00A0"}
          <AiFillHeart style={{ color: "Red" }} />
          {"\u00A0"}by Aaveg{" "}
        </h3>
        <div className="home__buttons">
          <button
            onClick={() => navigate("/sort/bubble")}
            style={{ marginRight: "3rem" }}
          >
            Bubble Sort
          </button>
          <button onClick={() => navigate("/sort/selection")}>
            Selection Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
