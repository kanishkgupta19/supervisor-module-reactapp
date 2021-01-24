import React, { useContext } from 'react';
import img_truck from '../assets/icons/truck.svg';
import number_plate from '../assets/icons/number_plate.svg';
import img_bill from '../assets/icons/bill.jpeg';
import Status from './status';
import { VehicleContext } from '../App';

const Info = ({ current, index }) => {
  const vehicleData = useContext(VehicleContext);
  const vehicle = vehicleData[index] || {
    Truck_Number: '',
    Length_of_route: '',
    Estimated_Date_Time_of_Pickup: '',
    Unloading_Start_Time: '',
    Loading_start_time: '',
    To: '',
    Time_at_which_Vehicle_left_the_warehouse: '',
    Weight_Truck_Carrying: '',
    First_Driver_Name: '',
    Driver_Mob_No: '',
  };

  return (
    <React.Fragment>
      <div className="vehicle-information">
        <div className="vehicle-info pt-12 pl-8">
          <h1 className="text-lg font-extrabold">Vehicle Information</h1>
          <div className="flex flex-row mt-6">
            <img src={img_truck} alt="truck-logo" />
            <div className="ml-4">
              <p className=""></p>
              <div className="mt-2" style={{ position: 'relative' }}>
                <img src={number_plate} className="w-40" alt="truck number" />
                <p className="number-plate text-md text-black font-bold -ml-3">
                  {vehicle.Truck_Number}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="driver-information shadow bg-white rounded-lg ml-4 -mt-20 p-4">
          <div className="flex flex-row">
            <div className="driver flex flex-row">
              <img
                src={img_bill}
                className="w-12 h-12 rounded-full"
                alt="driver"
              />
              <div className="driver-name ml-2">
                <p className="text-grey text-sm">Driver</p>
                <p className="text-black -mt-1 font-bold">
                  {vehicle.First_Driver_Name}
                </p>
              </div>
            </div>

            <div className="ml-auto pt-3">
              <a
                className="bg-blue text-white text-sm rounded-full px-3 py-1 font-semibold"
                href={`tel:${vehicle.Driver_Mob_No}`}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <div className="">
              <p className="text-grey text-xs">Address</p>
              <p className="text-black -mt-1 font-bold text-xs">Not Found</p>
            </div>

            <div className="ml-auto">
              <p className="text-grey text-xs">Phone</p>
              <p className="text-black -mt-1 font-bold text-xs">
                {vehicle.Driver_Mob_No}
              </p>
            </div>
          </div>
        </div>
        <Status current={current} vehicle={vehicle} />
      </div>
    </React.Fragment>
  );
};

export default Info;
