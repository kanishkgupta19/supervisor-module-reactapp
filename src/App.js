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
  const [loading, setLoading] = useState(false);
  document.title = 'Dashboard';

  const getData = () => {
    setLoading(true);
    const axiosHeaders = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        Accept: 'application/json',
      },
    };
    switch (current) {
      //today task
      case 0:
        axios
          .get(
            'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/todaysTasks?Date=2019/06/03&Warehouse=DW3&Designation=Supervisor',
            axiosHeaders
          )
          .then(res => {
            setLoading(false);

            setVehicles(res.data);
          })
          .catch(err => console.error(err));
        break;

      case 1:
        //future task
        axios
          .get(
            'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/completedTasks?Warehouse=DW1&Designation=Supervisor',

            axiosHeaders
          )
          .then(res => {
            setLoading(false);

            setVehicles(res.data);
          })
          .catch(err => console.log(err));
        break;

      case 2:
        //completed task
        axios
          .get(
            'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/completedTasks?Warehouse=DW1&Designation=Supervisor',

            axiosHeaders
          )
          .then(res => {
            setLoading(false);

            setVehicles(res.data);
          })
          .catch(err => console.log(err));

        break;

      case 3:
        //rejected task
        axios
          .get(
            'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/rejectedTasks?Warehouse=DW4&Designation=Supervisor',

            axiosHeaders
          )
          .then(res => {
            setLoading(false);

            setVehicles(res.data);
          })
          .catch(err => console.log(err));

        break;

      case 4:
        //confirmed task
        axios
          .get(
            'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/confirmedTasks?Warehouse=DW4&Designation=Supervisor',

            axiosHeaders
          )
          .then(res => {
            setLoading(false);

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
      <SideBar current={current} setCurrent={setCurrent} />
      <VehicleContext.Provider value={vehicle}>
        <Dashboard loading={loading} />
        <Info current={current} />
      </VehicleContext.Provider>
    </div>
  );
};

export default App;
