import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Characters = ({ props }) => {
  const [characterData, setCharacterData] = useState(props);

  useEffect(() => {
    async function fetchData() {
      const charactersData = await axios.get("https://swapi.dev/api/people");
      setCharacterData(charactersData.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content-container">
        {characterData.results?.map((person, index) => (
          <div className="content-card" key={index}>
            <div className="content-img">*IMAGE NOT FOUND*</div>
            <div className="content-name">{person.name}</div>
            <div className="content-data">
              <b>Birth: </b>
              {person.birth_year}
            </div>
            <div className="content-data">
              <b>Height: </b>
              {person.height}
            </div>
            <div className="content-data">
              <b>Gender: </b>
              {person.gender}
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

export default Characters;
