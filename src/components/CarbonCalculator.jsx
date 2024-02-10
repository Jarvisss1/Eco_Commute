import React, { useState } from "react";
import axios from "axios";
import "./CarbonCalculator.css"; // Import CSS file

const CarbonCalculator = () => {
  const [distance, setDistance] = useState("");
  const [transportMode, setTransportMode] = useState("");
  const [carbonEmissions, setCarbonEmissions] = useState(null);

  const calculateEmissions = async () => {
    try {
      const response = await axios.get(
        "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
        {
          params: {
            distance,
            transportMode,
            apiKey: "42cdc7e9b0msh0644ad7b79062fdp16d0dcjsn961441af2c55",
          },
        }
      );
      setCarbonEmissions(response.data.carbonEmissions);
    } catch (error) {
      console.error("Error calculating carbon emissions:", error);
    }
  };

  return (
    <div className="carbon-calculator">
      {" "}
      {/* Add class name for styling */}
      <h2>Carbon Emitter Calculator</h2>
      <label>
        Distance (in kilometers):
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <label>
        Transportation Mode:
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
        >
          <option value="">Select mode</option>
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          {/* Add more transportation modes as needed */}
        </select>
      </label>
      <button onClick={calculateEmissions}>Calculate Emissions</button>
      {carbonEmissions !== null && (
        <div>
          <h3>Carbon Emissions:</h3>
          <p>{carbonEmissions} kg CO2</p>
        </div>
      )}
    </div>
  );
};

export default CarbonCalculator;
