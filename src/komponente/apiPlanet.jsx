import { useState } from "react";
import { useEffect } from "react";

function ApiPlanet() {
    const [podaci, setPodaci] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://api.nasa.gov/planetary/apod?&api_key=DEMO_KEY")
        .then((response) => response.json())
        .then((nasaData) => setPodaci(nasaData));
    }, []);
  
    return (
      <div className="ApiPlanet">
        <h1>Slika dana</h1>
        <h1>{podaci.title}</h1>
        <img src={podaci.url} alt="slika" />
        <p>{podaci.explanation}</p>
      </div>
    );
  }

  export default ApiPlanet; 