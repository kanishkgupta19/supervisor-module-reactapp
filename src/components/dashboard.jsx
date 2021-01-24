import React from 'react';
import Search from './search';
import Vehicles from './vehicles';
import WelcomeView from './welcomeview';

const Dashboard = ({ loading, setIndex }) => {
  return (
    <div className="dashboard-view">
      <Search />
      <WelcomeView />
      <Vehicles loading={loading} setIndex={setIndex} />
    </div>
  );
};

export default Dashboard;
