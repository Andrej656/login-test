import React, { useState } from 'react';
import LandingPage from './landingPage';
import Dashboard from './dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogin = () => {
    // Simulating login process
    setLoggedIn(true);
    setShowDashboard(true);
  };

  const handleClaimNFT = () => {
    // Simulating NFT claim process
    alert('NFT claimed! (Mock-up)');
  };

  return (
    <div>
      {!loggedIn && <LandingPage handleLogin={handleLogin} />}
      {loggedIn && showDashboard && <Dashboard handleClaimNFT={handleClaimNFT} />}
    </div>
  );
};

export default App;
