import React, { useContext, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import ic_sort from '../assets/icons/ic_sort.svg';
import ic_filter from '../assets/icons/ic_filter.svg';
import ic_parcel_box from '../assets/icons/ic-parcel_box.png';
import number_plate from '../assets/icons/number_plate.svg';
import { VehicleContext } from '../App';

const VehicleList = ({ loading }) => {
  const vehicleData = useContext(VehicleContext);
  const [hidden, setHidden] = useState({ 0: false });
  if (loading) {
    return (
      <div style={{marginLeft: '50%', marginTop: '100px'}}>
        
        <PulseLoader />
      </div>
    );
  } else
    return (
      <div className="vehicle-details mt-8 pl-3">
        {vehicleData.map((value, index) => (
          <div
            key={index}
            className={
              hidden[index]
                ? 'vehicle-info-card-active vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
                : 'vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
            }
            id="vehicle-info-card"
          >
            <div className="text-left">
              <img
                src={ic_parcel_box}
                alt="parcel-box"
                className="inline w-16"
                style={{ verticalAlign: 'middle' }}
              />
              {value.First_Driver_Name}
            </div>
            <div className="relative pt-2">
              <img
                src={number_plate}
                className="w-40 inline"
                alt="number_plate"
              />
              <p className="number-plate text-black">{value.Truck_Number}</p>
            </div>
            <div className="pt-4 text-center">
              <p>{value.Driver_Mob_No}</p>
            </div>
            <div className="pt-3">
              <p className="text-black">{value.To}</p>
            </div>
            <div className="pt-4 text-orange">
              <p
                className="underline pointer"
                id="view-details"
                onClick={() =>
                  setHidden(prevState => ({
                    ...prevState,
                    [index]: !prevState[index],
                  }))
                }
              >
                View Details
              </p>
            </div>

            <div
              className={
                hidden[index]
                  ? 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left'
                  : 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left hidden'
              }
              id="vehicle-horizontal-progress"
            >
              <div className="arrival flex flex-row flex-no-wrap">
                <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                <i className="text-black ml-2 text-sm flex-none">
                  <p style={{ width: '70%', marginBottom: '-20px' }}>
                    Estimated Date of Pickup
                  </p>
                  <br />

                  <span className="text-black text-xs -mt-3">
                    {value.Estimated_Date_Time_of_Pickup}
                  </span>
                </i>
              </div>
              <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-6">
                <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
              </div>
              <div className="unloading flex flex-row ml-4 flex-no-wrap -ml-1">
                <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                <i className="text-black ml-2 text-sm flex-none">
                  <p style={{ width: '70%', marginRight: '50px' }}>UNLOADING</p>

                  <br />

                  <span className="text-black text-xs -mt-3">
                    {value.Unloading_Start_Time}
                  </span>
                </i>
              </div>
              <div className="w-24 h-2 rounded-full bg-gray mt-2 relative">
                <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
              </div>
              <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
                <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                <i className="text-black ml-2 text-sm flex-none">
                  <p style={{ width: '70%', marginRight: '50px' }}>LOADING</p>

                  <br />

                  <span className="text-black text-xs -mt-3">
                    {value.Loading_start_time}
                  </span>
                </i>
              </div>
              <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-4">
                <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
              </div>
              <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
                <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                <i className="text-black ml-2 text-sm flex-none">
                  <p style={{ width: '70%', marginRight: '50px' }}>DEPARTURE</p>
                  <br />
                  <span className="text-black text-xs -mt-3">
                    {value.Time_at_which_Vehicle_left_the_warehouse}
                  </span>
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default VehicleList;
