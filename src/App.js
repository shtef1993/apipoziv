import "./App.css";
import ApiNasa from "./komponente/apiNasa";
import ApiPlanet from "./komponente/apiPlanet";
import { Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/ApiPlanet">ApiPlanet</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/ApiNasa">ApiNasa</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ApiPlanet" element={<ApiPlanet />} />
        <Route path="/ApiNasa" element={<ApiNasa />} />
      </Routes>
    </div>
  )
};

export default App;