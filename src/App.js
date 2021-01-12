import React, { useState } from 'react';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';
import Info from './components/info';
import vehicles from './assets/vehicles.json';

export const VehicleContext = React.createContext();

function App() {
  const [vehicle, setVehicles] = useState(vehicles);
  const [current, setCurrent] = useState(0);
  document.title = 'Dashboard';
  return (
    <div className="dashboard">
      <SideBar
        setVehicles={setVehicles}
        current={current}
        setCurrent={setCurrent}
      />
      <VehicleContext.Provider value={vehicle}>
        <Dashboard />
        <Info current={current} />
      </VehicleContext.Provider>
    </div>
  );
}

export default App;
