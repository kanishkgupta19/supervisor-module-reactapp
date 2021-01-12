import React from 'react';

const RejectionBox = () => {
  return (
    <React.Fragment>
      <div id="rejection-box" className="w-350px">
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

          <br />

          <button className="bg-blue py-2 px-8 ml-48  rounded-full text-sm text-white font-bold pointer shadow">
            OKAY
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RejectionBox;
