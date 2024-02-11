// RewardCard.jsx

import React from "react";
import "./homePage.css";

const RewardCard = ({ points }) => {
  return (
    <div className="reward-card">
      <h3>Reward Points</h3>
      <p>You have {points} points</p>
      {/* You can add additional features such as redeeming points, etc. */}
    </div>
  );
};

export default RewardCard;
