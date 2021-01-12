import React, { useState } from 'react';
import RejectionBox from './rejectionBox';

const RejectionMessageBox = () => {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return <RejectionBox />;
  } else {
    return (
      <React.Fragment>
        <div id="rejected-message-box" className="mt-8 ml-2 p-4 w-350px">
          <p className="text-grey text-sm font-bold">
            Oops ! We were sure of picking up AA Tons of commodity xxx to be
            transported to Warehouse MW3 on 19.06.20
          </p>
          <br />
          <p className="text-black text-sm font-bold">
            Please mention the reason for unavailibility of load
          </p>

          <textarea
            name="rejection-message"
            rows="4"
            cols="30"
            className="textarea text-sm"
            defaultValue="MW3 did not indent the load on time. We will recieve commodity xxx
            on 21.06.20"
          ></textarea>

          <button
            className="bg-blue py-2 px-8 ml-48 mt-10 rounded-full text-sm text-white font-bold pointer shadow"
            id="submit-message"
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
};

export default RejectionMessageBox;
