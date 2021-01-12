import React from 'react';

const ConfirmationBox = ({ showStatus, setShowStatus, setConfirmed }) => {
  return (
    <React.Fragment>
      <div className="w-350px" id="confirmation-box">
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
          <p
            className="-px-1 py-6 rounded-lg text-xs text-grey font-bold"
            style={{ border: '1px solid #e5e6ea' }}
          >
            DO YOU CONFIRM THE AVAILABILITY OF LOAD ?
          </p>
          <br />

          <button
            id="load-status-btn"
            className="bg-black text-xs shadow text-white px-2 py-3 mt-3 rounded-lg text-center w-32 font-black m-auto"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowStatus(prevStatus => !prevStatus)}
          >
            {showStatus ? 'HIDE STATUS' : 'LOAD STATUS'}
          </button>
          {showStatus ? (
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
          ) : null}

          <div className="flex flex-row mt-3 py-8 px-10">
            <button
              className="bg-blue py-1 px-8 rounded-full text-white font-bold pointer shadow"
              id="yes"
              onClick={() => setConfirmed('yes')}
            >
              Yes
            </button>
            <button
              className="ml-auto bg-red py-1 px-8 rounded-full text-white font-bold pointer shadow"
              id="no"
              onClick={() => setConfirmed('no')}
            >
              No
            </button>
          </div>
        </div>
      </div>
      {/* yes no box */}
    </React.Fragment>
  );
};

export default ConfirmationBox;
