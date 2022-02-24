import React, { useEffect, useState } from "react";
import "./Sort.css";

import { useParams } from "react-router-dom";
import Header from "../Header/Header";

import * as helpers from "../../Helpers/helpers.js";
import * as algorithms from "../../Helpers/sortingAlgorithms";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Sort = () => {
  const { algoName } = useParams();
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(450);
  const [rate, setRate] = useState(1);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setArray(helpers.generateRandomArray(25, 1, 22));
  }, []);

  const bars = document.getElementsByClassName("bar");

  const speedUp = () => {
    setRate(rate + 0.5);
    setSpeed(speed - 200);
  };

  const speedDown = () => {
    setRate(rate - 0.5);
    setSpeed(speed + 200);
  };

  const startVisualization = async () => {
    if (!!array.reduce((n, item) => n !== false && item >= n && item)) {
      alert("Already Sorted!");
      return;
    }
    setDisable(true);
    algoName === "selection" &&
      (await algorithms.selectionSort(array, bars, speed)) &&
      setDisable(false);
    algoName === "bubble" &&
      (await algorithms.bubbleSort(array, bars, speed)) &&
      setDisable(false);
  };

  useEffect(() => {}, [disable]);

  return (
    <div className="sort">
      <Header title={algoName} />
      <div className="sort__canvas">
        <div className="sort__canvas__bar-graph">
          {array.map((elem, i) => (
            <div key={i} className="bar" style={{ height: `${elem}rem` }}></div>
          ))}
        </div>
        <div className="sort__canvas__info">
          <div className="sort__canvas__info-comparing">
            <div></div>
            <p>Comparing</p>
          </div>
          <div className="sort__canvas__info-swapping">
            <div></div>
            <p>Swapping</p>
          </div>
          <div className="sort__canvas__info-sorted">
            <div></div>
            <p>Sorted</p>
          </div>
        </div>
        <div className="sort__canvas__btns">
          <button
            onClick={() =>
              setArray(helpers.generateRandomArray(25, 1, 22, bars))
            }
            style={{ marginRight: "2.5rem" }}
            disabled={disable}
          >
            Randomize Array
          </button>
          <button
            onClick={startVisualization}
            style={{ marginRight: "2.5rem" }}
            disabled={disable}
          >
            Start Visualization
          </button>
          <div className="sort__canvas__btns-speed">
            <button
              className="sort__canvas__speed-down"
              onClick={speedDown}
              disabled={rate === 0.5 || disable}
            >
              <AiOutlineMinus />
            </button>
            <h4>{rate}X</h4>
            <button
              className="sort__canvas__speed-up"
              onClick={speedUp}
              disabled={rate === 2 || disable}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
