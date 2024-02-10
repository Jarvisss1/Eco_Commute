import React from "react";
import "./DashboardPage.css"; // Import CSS file for styling

const DashboardPage = () => {
  // Mock user data
  const userData = {
    username: "JohnDoe",
    carbonEmission: "120 kg",
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
    </div>
  );
};

export default DashboardPage;
