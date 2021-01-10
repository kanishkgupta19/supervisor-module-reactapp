import React from 'react';
import Search from './search';
import Vehicles from './vehicles';
import WelcomeView from './welcomeview';

const Dashboard = () => {
  return (
    <div className="dashboard-view">
      <Search />
      <WelcomeView />
      <Vehicles />
    </div>
  );
};

export default Dashboard;
