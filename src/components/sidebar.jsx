import React from 'react';
import today_task_icon from '../assets/icons/ic_today_task_on.svg';
import future_task_icon from '../assets/icons/ic_future_task_icon.svg';
import completed_task_icon from '../assets/icons/ic_completed_task_icon.svg';
import rejected_task_icon from '../assets/icons/ic_rejected_task_icon.svg';
import brand_logo from '../assets/icons/brand_logo.png';
import vehicles from '../assets/vehicles.json';
import vehicles1 from '../assets/vehicles1.json';
import vehicles2 from '../assets/vehicles2.json';
// import vehicles3 from '../assets/vehicles3.json';

const SideBar = ({ setVehicles }) => {
  return (
    <div className="side-nav pr-6 pt-8 text-right">
      <div className="brand-logo">
        <img src={brand_logo} className="w-24 inline" alt="Haul Logo" />
      </div>
      <div
        className="today-tasks mt-24 flex flex-row"
        onClick={() => setVehicles(vehicles)}
      >
        <div className="w-1 bg-orange h-16 rounded ml-auto"></div>
        &nbsp;&nbsp;&nbsp;
        <div
          className="p-2 text-sm rounded-md w-24 navs text-grey"
          style={{ 'background-color': '#feeadc' }}
        >
          <img
            src={today_task_icon}
            className="inline mr-6"
            alt="Today Tasks"
          />
          <br />
          <b>Today Tasks</b>
        </div>
      </div>
      <div
        className="future-tasks mt-10 flex flex-row"
        onClick={() => setVehicles(vehicles1)}
      >
        <div className="w-1 bg-orange h-16 rounded ml-auto hidden"></div>
        &nbsp;&nbsp;&nbsp;
        <div className="ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey">
          <img src={future_task_icon} className="inline" alt="Future Tasks" />
          <br />
          <b>Future Tasks</b>
        </div>
      </div>
      <div className="completed-tasks mt-10 flex flex-row">
        <div className="w-1 bg-orange h-16 rounded ml-auto hidden"></div>
        &nbsp;&nbsp;&nbsp;
        <div className="ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey">
          <img
            src={completed_task_icon}
            className="inline"
            alt="Completed Tasks"
          />
          <br />
          <b>Completed</b>
        </div>
      </div>
      <div
        className="rejected-tasks mt-10 flex flex-row"
        onClick={() => setVehicles(vehicles2)}
      >
        <div className="w-1 bg-orange h-16 rounded ml-auto hidden"></div>
        &nbsp;&nbsp;&nbsp;
        <div className="ml-auto p-2 text-sm rounded-md navs text-center w-24 text-grey">
          <img
            src={rejected_task_icon}
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
