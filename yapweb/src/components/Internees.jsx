import React from "react";
import "./Internees.css";

const InterneesPage = () => {
  return (
    <div className="internees-container mt-5 py-5">
      {/* <h1 className="internees-title">YAP Internship Opportunities</h1> */}
      <div className="internees-diagram">

        <div className="internee-branch left-option web-development">Content Writing</div>
        <div className="internee-branch left-option graphic-design">Marketing</div>
        <div className="internee-branch left-option data-analytics">Data Management</div>
        <div className="internee-branch left-option cyber-security">Human Resources</div>

        <div className="internee-center">Internees</div>

        <div className="internee-branch right-option marketing">Production</div>
        <div className="internee-branch right-option content-writing">Event Management</div>
        <div className="internee-branch right-option ai-research">Web Developemnt</div>
        <div className="internee-branch right-option ui-ux">Data Analysis</div>
      </div>
    </div>
  );
};

export default InterneesPage;
