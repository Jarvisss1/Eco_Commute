// VehicleDetails.jsx

import React, { useState } from "react";
import axios from "axios";
import "./VehicleDetails.css"; // Import CSS file

function VehicleDetails() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setVehicleNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://vehicle-rc-information.p.rapidapi.com/",
        {
          VehicleNumber: vehicleNumber,
        },
        {
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "24bfff893fmsh6920a272750318ep151769jsnf3978e51ad8b",
            "X-RapidAPI-Host": "vehicle-rc-information.p.rapidapi.com",
          },
        }
      );
      console.log(response.data);
      setDetails(response.data.response[0]);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="vehicle-details-container">
      <h2>Enter Vehicle Number </h2>
      <h2>for PUC Update:</h2>
      <p>Example: GJ01RT1234</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={vehicleNumber}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Get Details
        </button>
      </form>
      {error && <p className="error">Error: {error}</p>}
      {details && (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Vehicle Details:</h3>
            <p className="card-text">
              Registration Number: {details.rc_regn_no}
            </p>
            <p className="card-text">Owner Name: {details.rc_owner_name}</p>
            <p className="card-text">Registration Date: {details.rc_regn_dt}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleDetails;
