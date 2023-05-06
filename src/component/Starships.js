import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Starships = ({ props }) => {
  const [starshipsData, setStarshipsData] = useState(props);

  useEffect(() => {
    async function fetchData() {
      const starshipsData = await axios.get("https://swapi.dev/api/starships");
      setStarshipsData(starshipsData.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content-container">
        {starshipsData.results?.map((starship, index) => (
          <div className="content-card" key={index}>
            <div className="content-img">*IMAGE NOT FOUND*</div>
            <div className="content-name">{starship.name}</div>
            <div className="content-data">
              <b>Model: </b>
              {starship.model}
            </div>
            <div className="content-data">
              <b>Manufacturer: </b>
              {starship.manufacturer}
            </div>
            <div className="content-data">
              <b>Length: </b>
              {starship.length}
            </div>
            <div className="content-data">
              <b>Crew: </b>
              {starship.crew}
            </div>
            <div className="content-data">
              <b>Passengers: </b>
              {starship.passengers}
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

export default Starships;
