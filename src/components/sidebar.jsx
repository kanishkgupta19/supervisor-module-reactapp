import React, { useState } from 'react';
import today_task_icon_on from '../assets/icons/ic_today_task_on.svg';
import today_task_icon_off from '../assets/icons/ic_today_task_off.svg';
import future_task_icon_on from '../assets/icons/ic_future_task_icon_on.svg';
import future_task_icon_off from '../assets/icons/ic_future_task_icon.svg';
import completed_task_icon_on from '../assets/icons/ic_completed_task_icon_on.svg';
import completed_task_icon_off from '../assets/icons/ic_completed_task_icon.svg';
import rejected_task_icon_on from '../assets/icons/ic_rejected_task_icon_on.svg';
import rejected_task_icon_off from '../assets/icons/ic_rejected_task_icon.svg';
import brand_logo from '../assets/icons/brand_logo.png';
import vehicles from '../assets/vehicles.json';
import vehicles1 from '../assets/vehicles1.json';
import vehicles2 from '../assets/vehicles2.json';
import vehicles3 from '../assets/vehicles3.json';

const SideBar = ({ setVehicles }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="side-nav pr-6 pt-8 text-right">
      <div className="brand-logo">
        <img src={brand_logo} className="w-24 inline" alt="Haul Logo" />
      </div>
      <div
        className="today-tasks mt-24 flex flex-row"
        onClick={() => {
          setVehicles(vehicles);
          setCurrent(0);
        }}
      >
        <div
          className={
            current === 0
              ? 'w-1 bg-orange h-16 rounded ml-auto text-orange'
              : 'w-1 bg-orange h-16 rounded ml-auto hidden'
          }
        ></div>
        &nbsp;&nbsp;&nbsp;
        <div
          className={
            current === 0
              ? 'p-2 text-sm rounded-md navs text-center w-24 text-orange'
              : 'ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey'
          }
          style={{
            backgroundColor: current === 0 ? '#feeadc' : null,
            cursor: 'pointer',
          }}
        >
          <img
            src={current === 0 ? today_task_icon_on : today_task_icon_off}
            className="inline mr-6"
            alt="Today Tasks"
          />
          <br />
          <b>Today Tasks</b>
        </div>
      </div>
      <div
        className="future-tasks mt-10 flex flex-row"
        onClick={() => {
          setVehicles(vehicles1);
          setCurrent(1);
        }}
      >
        <div
          className={
            current === 1
              ? 'w-1 bg-orange h-16 rounded ml-auto text-orange'
              : 'w-1 bg-orange h-16 rounded ml-auto hidden'
          }
        ></div>
        &nbsp;&nbsp;&nbsp;
        <div
          className={
            current === 1
              ? 'p-2 text-sm rounded-md navs text-center w-24 text-orange'
              : 'ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey'
          }
          style={{
            backgroundColor: current === 1 ? '#feeadc' : null,
            cursor: 'pointer',
          }}
        >
          <img
            src={current === 1 ? future_task_icon_on : future_task_icon_off}
            className="inline"
            alt="Future Tasks"
          />
          <br />
          <b>Future Tasks</b>
        </div>
      </div>
      <div
        className="completed-tasks mt-10 flex flex-row"
        onClick={() => {
          setVehicles(vehicles2);
          setCurrent(2);
        }}
      >
        <div
          className={
            current === 2
              ? 'w-1 bg-orange h-16 rounded ml-auto text-orange'
              : 'w-1 bg-orange h-16 rounded ml-auto hidden'
          }
        ></div>
        &nbsp;&nbsp;&nbsp;
        <div
          className={
            current === 2
              ? 'p-2 text-sm rounded-md navs text-center w-24 text-orange'
              : 'ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey'
          }
          style={{
            backgroundColor: current === 2 ? '#feeadc' : null,
            cursor: 'pointer',
          }}
        >
          <img
            src={
              current === 2 ? completed_task_icon_on : completed_task_icon_off
            }
            className="inline"
            alt="Completed Tasks"
          />
          <br />
          <b>Completed</b>
        </div>
      </div>
      <div
        className="rejected-tasks mt-10 flex flex-row"
        onClick={() => {
          setVehicles(vehicles3);
          setCurrent(3);
        }}
      >
        <div
          className={
            current === 3
              ? 'w-1 bg-orange h-16 rounded ml-auto text-orange'
              : 'w-1 bg-orange h-16 rounded ml-auto hidden'
          }
        ></div>
        &nbsp;&nbsp;&nbsp;
        <div
          className={
            current === 3
              ? 'p-2 text-sm rounded-md navs text-center w-24 text-orange'
              : 'ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey'
          }
          style={{
            backgroundColor: current === 3 ? '#feeadc' : null,
            cursor: 'pointer',
          }}
        >
          <img
            src={current === 3 ? rejected_task_icon_on : rejected_task_icon_off}
            className="inline"
            alt="Rejected Tasks"
          />
          <br />
          <b>Rejected</b>
        </div>
      </div>
      <br />
      <br />
      <a
        href="./index.html"
        className="bg-black text-white rounded-full p-3 mr-2 pointer"
      >
        Reports
      </a>
    </div>
  );
};

export default SideBar;
