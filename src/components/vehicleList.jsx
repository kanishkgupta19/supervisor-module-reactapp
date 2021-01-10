import React, { useContext } from 'react';
import ic_parcel_box from '../assets/icons/ic-parcel_box.png';
// import vehicalData from '../assets/vehicles.json';
import progress_tag from '../assets/icons/progress_tag.png';
import dispatched_tag from '../assets/icons/dispatched_tag.png';
import delayed_tag from '../assets/icons/delayed_tag.png';
import confirmed_tag from '../assets/icons/confirmed_tag.svg';
import pending_tag from '../assets/icons/pending_tag.svg';
import rejected_tag from '../assets/icons/rejected_tag.svg';
import { VehicleContext } from '../App';

const status = {
  progress_tag,
  dispatched_tag,
  delayed_tag,
  confirmed_tag,
  pending_tag,
  rejected_tag,
};

const VehicleList = () => {
  const vehicleData = useContext(VehicleContext);
  return (
    <React.Fragment>
      {vehicleData.map(value => (
        <div
          className=" vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold  text-sm text-center"
          id="vehicle-info-card"
          key={Math.floor(Math.random()*10000)}
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ 'verticalAlign': 'middle' }}
            />
            Vehicle {value.key}
          </div>
          <div className="relative pt-2">
            <p className=" number-plate text-black">${value.number} </p>
          </div>
          <div className="pt-4 text-center">
            <p>${value.date}</p>
          </div>
          <div className="pt-3">
            <img
              src={status[value.status]}
              className="w-32 inline"
              alt={`${value.status}`}
            />
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer " id="view-details">
              {' '}
              View Details{' '}
            </p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default VehicleList;
