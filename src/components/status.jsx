import React, { useState } from 'react';
import ic_tick from '../assets/icons/ic_tick.svg';
import ic_truck_small_stepper from '../assets/icons/ic_truck_small_stepper.svg';
import ConfirmationBox from './confirmationBox';
import ConfirmedBox from './confirmedBox';
import RejectionMessageBox from './rejectionMessageBox';

const Status = ({ current }) => {
  const [showStatus, setShowStatus] = useState(false);
  const [confirmed, setConfirmed] = useState('');
  if (current === 0) {
    return (
      <React.Fragment>
        <div className="progress-bar ml-10 mt-10">
          <div className="flex flex-row">
            <div className="bg-green h-6 w-6 pt-1 pl-1 pr-1 pb-1 rounded-full mt-3">
              <img src={ic_tick} alt="completed" />
            </div>
            <div className="ml-4">
              <p className="text-black text-md font-bold">ARRIVAL</p>
              <p className="text-grey text-xs">
                Location A, Noida
                <span className="text-black ml-10"> 7 July, 9:30 AM</span>
              </p>
            </div>
          </div>

          <div className="h-20 w-2 rounded-full bg-gray ml-2">
            <div className="h-20 w-2 rounded-full bg-green"></div>
          </div>

          <div className="flex flex-row -mt-2">
            <div className="bg-green h-6 w-6 pt-1 pl-1 pr-1 pb-1 rounded-full mt-3">
              <img src={ic_truck_small_stepper} alt="completed" />
            </div>
            <div className="ml-4">
              <p className="text-black text-md font-bold">UNLOADING</p>
              <p className="text-grey text-xs">
                Location B, Noida
                <span className="text-black ml-10"> 7 July, 11:30 AM</span>
              </p>
            </div>
          </div>

          <div className="h-20 w-2 rounded-full bg-green ml-2 bg-gray">
            <div className="h-12 w-2 rounded-full bg-green"></div>
          </div>

          <div className="flex flex-row -mt-2">
            <div className="bg-white h-3 w-3 p-2 rounded-full mt-3 border-gray"></div>
            <div className="ml-4">
              <p className="text-black text-md font-bold">UNLOADING</p>
              <p className="text-grey text-xs">
                Location C, Noida
                <span className="text-black ml-10"> 7 July, 12:10 AM</span>
              </p>
            </div>
          </div>

          <div className="h-20 w-2 rounded-full bg-green ml-2 bg-gray">
            <div className="h-0 w-2 rounded-full bg-green"></div>
          </div>

          <div className="flex flex-row -mt-2">
            <div className="bg-white h-3 w-3 p-2 rounded-full mt-3 border-gray"></div>
            <div className="ml-4">
              <p className="text-black text-md font-bold">DEPARTURE</p>
              <p className="text-grey text-xs">
                Location C, Noida
                <span className="text-black ml-10"> 7 July, 14:30 AM</span>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (current === 1) {
    if (confirmed === '') {
      return (
        <ConfirmationBox
          showStatus={showStatus}
          setShowStatus={setShowStatus}
          setConfirmed={setConfirmed}
        />
      );
    } else if (confirmed === 'yes') {
      return <ConfirmedBox />;
    } else if (confirmed === 'no') {
      return <RejectionMessageBox />;
    }
  } else if (current === 2) {
    return (
      <React.Fragment>
        <div className="w-350px">
          <div className="ml-8 mt-6">
            <h6 className="text-grey text-sm font-bold">ETA</h6>
            <p className="text-black font-bold">19/06/20 @ 10:00 AM</p>

            <hr
              className="bg-grey w-32 mt-2 mb-2"
              style={{ border: '1px solid #e5e6ea' }}
            />

            <h6 className="text-grey text-sm font-bold">UNLOADING</h6>
            <p className="text-black font-bold">Starts @ 10:25 AM</p>

            <hr
              className="bg-grey w-32 mt-2 mb-2"
              style={{ border: '1px solid #e5e6ea' }}
            />

            <h6 className="text-grey text-sm font-bold">LOADING</h6>
            <p className="text-black font-bold">Starts @ 12:00 PM</p>

            <hr
              className="bg-grey w-32 mt-2"
              style={{ border: '1px solid #e5e6ea' }}
            />
          </div>
          <div className="ml-1 mt-3  p-2 text-center w-350px ">
            <div className="mt-8" id="status-table">
              <table className="table-fixed text-xs m-auto status-table">
                <thead>
                  <tr>
                    <th className="px-3 py-2 ">Date</th>
                    <th className="px-3 py-2 ">Commodity</th>
                    <th className="px-3 py-2 ">Quantity</th>
                    <th className="px-3 py-2 ">Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 ">20.06.20</td>
                    <td className="px-3 py-2 ">SPLIT AC</td>
                    <td className="px-3 py-2 ">64</td>
                    <td className="px-3 py-2 ">GURGAON</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className=" w-350px">
          <div className="ml-8 mt-6 pr-6">
            <p className="text-lg font-black bg-red text-white py-2 w-12 pl-2 rounded-md">
              NA
            </p>

            <br />

            <h6 className="text-grey text-sm font-bold">ETA</h6>
            <p className="text-black font-bold">19/06/20 @ 10:00 AM</p>

            <hr
              className="bg-grey w-32 mt-2 mb-2"
              style={{ border: '1px solid #e5e6ea' }}
            />

            <h6 className="text-grey text-sm font-bold">UNLOADING</h6>
            <p className="text-black font-bold">Starts @ 10:25 AM</p>
            <p className="text-black font-bold">Ends @ 12:00 PM</p>

            <hr
              className="bg-grey w-32 mt-2 mb-2"
              style={{ border: '1px solid #e5e6ea' }}
            />

            <br />

            <p className="text-black text-sm font-bold">
              Vehicle leaves the Warehouse @ 13:10 PM because
            </p>

            <br />

            <p
              className="text-grey text-sm px-3 py-2 font-bold rounded-md"
              style={{ border: '1px solid #999' }}
            >
              MW3 did not indent the load on time. We will recieve commodity xxx
              on 21.06.20
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Status;
