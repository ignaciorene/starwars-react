import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Menu from "./component/Menu";
import Planets from "./component/Planets";
import Starships from "./component/Starships";
import Characters from "./component/Characters";

const planets = {};
const characters = {};
const starships = {};

async function getAllData() {
  const planetsData = await axios.get("https://swapi.dev/api/planets");
  Object.assign(planets, planetsData.data);
  const charactersData = await axios.get("https://swapi.dev/api/people");
  Object.assign(characters, charactersData.data);
  const starshipsData = await axios.get("https://swapi.dev/api/starships");
  Object.assign(starships, starshipsData.data);
}

getAllData();

function App() {
  return (
    <>
      <div className="title-container">
        <h1>STAR WARS INFO</h1>
      </div>
      <div className="main-container">
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Planets" element={<Planets props={planets} />} />
            <Route
              path="/Starships"
              element={<Starships props={starships} />}
            />
            <Route
              path="/Characters"
              element={<Characters props={characters} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
