import React from 'react';

const LandingPage = ({ handleLogin }) => {
  return (
    <div>
      <h1>Welcome to NFT Participation Platform</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LandingPage;
