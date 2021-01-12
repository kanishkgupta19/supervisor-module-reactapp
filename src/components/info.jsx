import React from 'react';
import img_truck from '../assets/icons/truck.svg';
import number_plate from '../assets/icons/number_plate.svg';
import img_bill from '../assets/icons/bill.jpeg';
import Status from './status';

const Info = ({ current }) => {
  return (
    <React.Fragment>
      <div className="vehicle-information">
        <div className="vehicle-info pt-12 pl-8">
          <h1 className="text-lg font-extrabold">Vehicle Information</h1>
          <div className="flex flex-row mt-6">
            <img src={img_truck} alt="truck-logo" />
            <div className="ml-4">
              <p className="">Tata Truck, Model A</p>
              <div className="mt-2" style={{ position: 'relative' }}>
                <img src={number_plate} className="w-40" alt="truck number" />
                <p className="number-plate text-md text-black font-bold -ml-3">
                  RJ 02 GB 2222
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
                <p className="text-black -mt-1 font-bold">Neeraj Hooda</p>
              </div>
            </div>

            <div className="ml-auto pt-3">
              <p
                className="bg-blue text-white text-sm rounded-full px-3 py-1 font-semibold"
                style={{ cursor: 'pointer' }}
              >
                Contact
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <div className="">
              <p className="text-grey text-xs">Address</p>
              <p className="text-black -mt-1 font-bold text-xs">
                324 Sector, Kerala, India
              </p>
            </div>

            <div className="ml-auto">
              <p className="text-grey text-xs">Phone</p>
              <p className="text-black -mt-1 font-bold text-xs">9876543210</p>
            </div>
          </div>
        </div>
        <Status current={current} />
      </div>
    </React.Fragment>
  );
};

export default Info;
