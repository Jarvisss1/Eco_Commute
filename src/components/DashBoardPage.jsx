import React from "react";
import "./DashboardPage.css"; // Import CSS file for styling
import CarbonCalculator from "./CarbonCalculator";

const DashboardPage = () => {
  // Mock user data
  const userData = {
    username: "Jane Doe",
    carbonEmission: "120 kg",
  };

  // Define the threshold for carbon emission
  const carbonEmissionThreshold = 100; // Adjust this value as needed

  // Function to check if carbon emission exceeds the threshold and display alert
  const checkCarbonEmission = () => {
    if (parseInt(userData.carbonEmission) > carbonEmissionThreshold) {
      window.alert(
        "Your carbon emission exceeds the threshold. Please consider reducing it."
      );
    }
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>Welcome back, {userData.username}!</p>
      <div className="dashboard-content">
        <div className="dashboard-item">
          <h3>Username</h3>
          <p>{userData.username}</p>
        </div>
        <div className="dashboard-item">
          <h3>Carbon Emission</h3>
          <p>{userData.carbonEmission}</p>
        </div>
      </div>

      <CarbonCalculator />

      {/* Button to trigger alert if carbon emission exceeds threshold */}
      <button onClick={checkCarbonEmission}>Check Carbon Emission</button>
    </div>
  );
};

export default DashboardPage;
