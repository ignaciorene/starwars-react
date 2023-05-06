import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Planets = ({ props }) => {
  const [planetsData, setPlanetsData] = useState(props);

  useEffect(() => {
    async function fetchData() {
      const planetsData = await axios.get("https://swapi.dev/api/planets");
      setPlanetsData(planetsData.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content-container">
        {planetsData.results?.map((planet, index) => (
          <div className="content-card" key={index}>
            <div className="content-img">*IMAGE NOT FOUND*</div>
            <div className="content-name">{planet.name}</div>
            <div className="content-data">
              <b>Climate: </b>
              {planet.climate}
            </div>
            <div className="content-data">
              <b>Terrain: </b>
              {planet.terrain}
            </div>
            <div className="content-data">
              <b>Gravity: </b>
              {planet.gravity}
            </div>
            <div className="content-data">
              <b>Population: </b>
              {planet.population}
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <Link to="/">
          <button className="return-button">Back to menu</button>
        </Link>
      </div>
    </>
  );
};

export default Planets;
