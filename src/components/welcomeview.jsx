import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ic_clock from '../assets/icons/ic_clock.svg';
import ic_calender from '../assets/icons/ic_calendar.svg';
import ic_settings from '../assets/icons/ic_settings.svg';
import ic_location_marker from '../assets/icons/ic_location_marker.svg';
import img_bill from '../assets/icons/bill.jpeg';

const WelcomeView = () => {
  const [userData, SetUserData] = useState({});

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const fetchUser = () => {
    axios
      .get(
        'https://v1fh5fvz31.execute-api.us-west-2.amazonaws.com/dev/login?Mob%20No=123456700',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            Accept: 'application/json',
          },
        }
      )
      .then(res => SetUserData(res.data['User Data']))
      .catch(err => console.log(err));
  };

  useEffect(fetchUser, []);

  return (
    <div
      className="welcome-view mt-12"
      style={{ marginLeft: '30px', marginRight: '30px' }}
    >
      <div className="parcel-tracker">
        <h2 className="text-grey text-2xl font-black">
          Welcome Back, <span className="text-orange">Supervisor!</span>
        </h2>

        <div className="parcel-search text-white py-16 px-6 mt-4">
          <p className="font-bold">
            Enter your parcel number <br />
            to track your deliveries
          </p>
          <input
            type="text"
            className="text-xs w-auto text-grey px-4 py-3 mt-4 rounded-lg"
            style={{ width: '70%' }}
            placeholder="Enter parcel number here"
          />
          <button
            className="ml-2 font-bold rounded-lg px-4"
            style={{
              background: '#ff3434',
              paddingTop: '0.6rem',
              paddingBottom: '0.7rem',
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="driver-details p-6 bg-white">
        <div className="date-time flex flex-row">
          <div className="time text-xl font-bold">
            <img
              src={ic_clock}
              style={{ verticleAlign: 'middle' }}
              className="inline mr-1"
              alt="clock"
            />
            {date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>

          <div className="date ml-auto text-sm font-bold">
            <img src={ic_calender} className="inline" alt="ic_calendar" />
            {date.toLocaleDateString('en-GB')}
          </div>
        </div>

        <div className="driver flex flex-row mt-6 justify-end">
          <div className="driver-name text-right">
            <p className="text-grey text-sm">Supervisor</p>
            <p className="text-2xl font-bold" style={{ color: '#212121' }}>
              {userData.Name}
            </p>
            <img src={ic_settings} className="inline" alt="settings icon" />
          </div>
          <img className="photo ml-3" src={img_bill} alt="bill" />
        </div>

        <div className="location text-center mt-6">
          <p className="font-bold" style={{ color: '#212121' }}>
            <img
              className="inline"
              src={ic_location_marker}
              alt="location-icon"
            />
            {userData['Warehouse Name']}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
