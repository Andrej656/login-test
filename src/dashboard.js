import React from 'react';

const Dashboard = ({ handleClaimNFT }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleClaimNFT}>Claim NFT</button>
    </div>
  );
};

export default Dashboard;
