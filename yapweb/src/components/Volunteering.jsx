import React from "react";
import "./Volunteering.css";

const Volunteers = () => {
  return (
    <div className="volunteers-container mt-5 py-5">
      {/* <h1 className="volunteers-title">VOLUNTEERS</h1> */}
      <div className="volunteers-diagram">
        <div className="volunteer-branch operation">Operation</div>
        <div className="volunteer-branch event-management">Event Management</div>
        <div className="volunteer-branch production">Production</div>
        <div className="volunteer-branch logistics">Logistics</div>
        <div className="volunteer-center">Can be part of</div>
      </div>
    </div>
  );
};

export default Volunteers;
