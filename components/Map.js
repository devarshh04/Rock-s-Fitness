import React, { useEffect, useState } from "react";
import axios from "axios";

const Map = () => {
  const [mapHTML, setMapHTML] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/map/")
      .then((response) => {
        setMapHTML(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading map...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Ahmedabad Map</h2>
      <div
        style={mapContainerStyle}
        dangerouslySetInnerHTML={{ __html: mapHTML }}
      />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "20px",
  backgroundColor: "#f4f4f9",
};

const mapContainerStyle = {
  width: "100%",
  maxWidth: "800px", // Max width of the map container
  height: "600px", // Set a specific height for the map container
  margin: "0 auto",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
export default Map;
