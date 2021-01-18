import React, { useEffect, useState } from 'react';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';
import Info from './components/info';
import vehicles from './assets/vehicles.json';
import axios from 'axios';

export const VehicleContext = React.createContext();

const App = () => {
  const [vehicle, setVehicles] = useState(vehicles);
  const [current, setCurrent] = useState(0);
  document.title = 'Dashboard';

  const getData = () => {
    switch (current) {
      //today task
      case 0:
        axios
          .get(
            'https://arc2e2m4p9.execute-api.us-west-2.amazonaws.com/dev/todaysTasks?date=2019/06/06&warehouse=COW3&Designation=Supervisor'
          )
          .then(res => {
            setVehicles(res.data);
          })
          .catch(err => console.log(err));
        break;

      case 1:
        //future task
        axios
          .get(
            'https://arc2e2m4p9.execute-api.us-west-2.amazonaws.com/dev/futureTasks?warehouse=DW4&Designation=Supervisor'
          )
          .then(res => {
            setVehicles(res.data);
          })
          .catch(err => console.log(err));
        break;

      case 2:
        //confirmed task
        axios
          .get(
            'https://arc2e2m4p9.execute-api.us-west-2.amazonaws.com/dev/confirmedTasks?warehouse=DW4&Designation=Supervisor'
          )
          .then(res => {
            setVehicles(res.data);
          })
          .catch(err => console.log(err));

        break;

      case 3:
        //rejected task
        axios
          .get(
            'https://arc2e2m4p9.execute-api.us-west-2.amazonaws.com/dev/rejectedTasks?warehouse=DW4&Designation=Supervisor'
          )
          .then(res => {
            setVehicles(res.data);
          })
          .catch(err => console.log(err));

        break;
      default:
        break;
    }
  };

  useEffect(getData, [current]);

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
};

export default App;
