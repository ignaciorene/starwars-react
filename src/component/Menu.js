import React from "react";
import { Link } from "react-router-dom";
import TatooineImage from "../img/tatoinee.png";
import DarthvaderImage from "../img/darth-vader.png";
import XwingImage from "../img/xwing.png";

const Menu = () => {
  return (
    <>
      <div className="category-card">
        <img className="category-img" src={TatooineImage} alt="Planet"></img>
        <div className="category-title">PLANETS</div>
        <Link to="/Planets">
          <button className="category-button">See more</button>
        </Link>
      </div>

      <div className="category-card">
        <img className="category-img" src={DarthvaderImage} alt="Character"></img>
        <div className="category-title">CHARACTERS</div>
        <Link to="/Characters">
          <button className="category-button">See more</button>
        </Link>
      </div>

      <div className="category-card">
        <img className="category-img" src={XwingImage} alt="Starship"></img>
        <div className="category-title">STARSHIPS</div>
        <Link to="/Starships">
          <button className="category-button">See more</button>
        </Link>
      </div>
    </>
  );
};

export default Menu;
