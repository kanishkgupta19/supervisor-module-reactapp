import React from 'react';
import ic_clock from '../assets/icons/ic_clock.svg';
import ic_calender from '../assets/icons/ic_calendar.svg';
import ic_settings from '../assets/icons/ic_settings.svg';
import ic_location_marker from '../assets/icons/ic_location_marker.svg';
import img_bill from '../assets/icons/bill.jpeg';

const WelcomeView = () => {
  return (
    <div
      class="welcome-view mt-12"
      style={{ 'margin-left': '30px', 'margin-right': '30px' }}
    >
      <div class="parcel-tracker">
        <h2 class="text-grey text-2xl font-black">
          Welcome Back, <span class="text-orange">Supervisor!</span>
        </h2>

        <div class="parcel-search text-white py-16 px-6 mt-4">
          <p class="font-bold">
            Enter your parcel number <br />
            to track your deliveries
          </p>
          <input
            type="text"
            class="text-xs w-auto text-grey px-4 py-3 mt-4 rounded-lg"
            style={{ width: '70%' }}
            placeholder="Enter parcel number here"
          />
          <button
            class="ml-2 font-bold rounded-lg px-4"
            style={{
              background: '#ff3434',
              'padding-top': '0.6rem',
              'padding-bottom': '0.7rem',
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div class="driver-details p-6 bg-white">
        <div class="date-time flex flex-row">
          <div class="time text-xl font-bold">
            <img
              src={ic_clock}
              style={{ 'verticle-align': 'middle' }}
              class="inline mr-1"
              alt="clock"
            />
            3:50 PM
          </div>

          <div class="date ml-auto text-sm font-bold">
            <img src={ic_calender} class="inline" alt="ic_calendar" />
            6th Aug 2020
          </div>
        </div>

        <div class="driver flex flex-row mt-6 justify-end">
          <div class="driver-name text-right">
            <p class="text-grey text-sm">Supervisor</p>
            <p class="text-2xl font-bold" style={{ color: '#212121' }}>
              Mahesh Kumar
            </p>
            <img src={ic_settings} class="inline" alt="settings icon" />
          </div>
          <img class="photo ml-3" src={img_bill} alt="bill" />
        </div>

        <div class="location text-center mt-6">
          <p class="font-bold" style={{ color: '#212121' }}>
            <img class="inline" src={ic_location_marker} alt="location-icon" />
            Warehouse, Gurgaon
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
