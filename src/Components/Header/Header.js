import React from "react";
import "./Header.css";

import { VscGraph } from "react-icons/vsc";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { capitalizeFirstChar } from "../../Helpers/helpers";

const Header = ({ title }) => {
  let navigate = useNavigate();
  return (
    <header className="header">
      <div>
        <VscGraph />
        <h2 className="header__left-title">{`${capitalizeFirstChar(
          title
        )} Sort Visualization`}</h2>
      </div>
      <BiHome onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
    </header>
  );
};

export default Header;
