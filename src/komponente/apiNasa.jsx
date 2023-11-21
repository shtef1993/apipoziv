import React, { useEffect, useState } from "react";

function ApiNasa() {
  const [podaci, setPodaci] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((nasaData) => setPodaci(nasaData));
  }, []);

  return (
    <div className="ApiNasa">
      <h1>Mars Rover</h1>
      {podaci.photos && podaci.photos.length > 0 ? (
        <div>
          {podaci.photos.slice(0, 10).map((photo, index) => (
            <div key={index}>
              <h1>{photo.rover.name}</h1>
              <img src={photo.img_src} alt={`slika-${index}`} />
              <p>{photo.rover.full_name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiNasa;
