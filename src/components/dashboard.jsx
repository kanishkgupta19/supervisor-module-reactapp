import React from 'react';
import Search from './search';
import Vehicles from './vehicles';
import WelcomeView from './welcomeview';

const Dashboard = ({ loading }) => {
  return (
    <div className="dashboard-view">
      <Search />
      <WelcomeView />
      <Vehicles loading={loading}  />
    </div>
  );
};

export default Dashboard;
