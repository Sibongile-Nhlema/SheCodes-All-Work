import React, { useState, useEffect } from "react";
import "./styles/NearbyCities.css"

export default function NearbyCities({ nearbyCities }) {
  const [visibleCities, setVisibleCities] = useState([]);

  useEffect(() => {
    setVisibleCities(nearbyCities.slice(1, 5));
  }, [nearbyCities]);

  return (
    <div className="container p-3">
      <div className="row">
        {visibleCities.map((city) => (
          <div className="col fCity" key={city}>
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}




