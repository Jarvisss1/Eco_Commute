import React, { useState } from "react";
import axios from "axios";
import { log } from "util";

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
    <div>
      <h2>Enter Vehicle Number:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={vehicleNumber} onChange={handleChange} />
        <button type="submit">Get Details</button>
      </form>
      {error && <p>Error: {error}</p>}
      {details && (
        <div>
          <h3>Vehicle Details:</h3>
          <p>Registration Number: {details.rc_regn_no}</p>
          <p>Owner Name: {details.rc_owner_name}</p>
          <p>Registration Date: {details.rc_regn_dt}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default VehicleDetails;
