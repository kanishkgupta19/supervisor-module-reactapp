import React, { useState } from 'react';
import './App.css';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';
import Info from './components/info';
import vehicles from './assets/vehicles.json';

export const VehicleContext = React.createContext();

function App() {
  const [vehicle, setVehicles] = useState(vehicles);

  return (
    <div className="dashboard">
      <SideBar setVehicles={setVehicles} />
      <VehicleContext.Provider value={vehicle}>
        <Dashboard />
      </VehicleContext.Provider>
      <Info />
    </div>
  );
}

export default App;
