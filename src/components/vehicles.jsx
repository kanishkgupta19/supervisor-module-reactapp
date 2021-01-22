import React, {useContext} from 'react';
import ic_sort from '../assets/icons/ic_sort.svg';
import ic_filter from '../assets/icons/ic_filter.svg';
import VehicleList from './vehicleList';
import {VehicleContext} from '../App';

const Vehicles = ({ loading }) => {
  const vehicleData = useContext(VehicleContext);
  const length = vehicleData.length;

  return (
    <React.Fragment>
      <div
        className="flex flex-row mt-12"
        style={{ marginLeft: '30px', marginRight: '30px' }}
      >
        <p className="text-2xl font-black text-grey">Your Vehicles</p>
        <p
          className="ml-auto text-md pt-1 px-4 rounded-full"
          style={{ color: '#212121', border: '1px solid #212121' }}
        >
          Total Count: <span className="font-bold"> {length} </span>
        </p>
      </div>

      <div className="vehicle-details mt-8 pl-3">
        <div className="grid grid-cols-5 p-3 text-black text-sm font-bold text-center heading">
          <p
            className="bg-black shadow text-white text-sm rounded-lg w-20 h-10 text-center ml-8"
            style={{ cursor: 'pointer' }}
          >
            ALL
          </p>
          <p>Vehicle No.</p>
          <p>Mobile No.</p>
          <p>To</p>
          <div className="flex flex-row">
            <img src={ic_sort} className="w-16" alt="sort" />
            <img src={ic_filter} style={{ width: '4.5rem' }} alt="filter" />
          </div>
        </div>
        <VehicleList loading={loading}  />
      </div>
    </React.Fragment>
  );
};

export default Vehicles;
