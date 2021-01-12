import React from 'react';

const ConfirmedBox = () => {
  return (
    <div className="w-350px" id="confirmed-box">
      <div className="ml-8 mt-6">
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

        <h6 className="text-grey text-sm font-bold">LOADING</h6>
        <p className="text-black font-bold">Starts @ 12:00 PM</p>
        <p className="text-black font-bold">Ends @ 13:15 PM</p>

        <hr
          className="bg-grey w-32 mt-2"
          style={{ border: '1px solid #e5e6ea' }}
        />

        <br />

        <p
          className="p-2 px-4 rounded-lg text-sm w-64 text-grey font-bold"
          style={{ border: '2px solid #e5e6ea' }}
        >
          Vehicle leaves the warehouse LW1
          <span className="text-black"> @ 13:40 PM </span>
        </p>

        <br />

        <button className="bg-blue py-2 px-8 ml-40 rounded-full text-sm text-white font-bold pointer shadow">
          DONE
        </button>
      </div>
    </div>
  );
};

export default ConfirmedBox;
