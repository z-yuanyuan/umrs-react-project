import React, { useState } from "react";
import "./major.styles.css";

const Major = ({ details }) => {
  const [show, toggleShow] = useState(false);

  return (
    <div className="major">
      <p className="major-title" onClick={() => toggleShow((prev) => !prev)}>
        {details.major_title}
      </p>

      {show && (
        <div className="major-description">
          <div className="description">
            <h4>Description</h4>
            <hr />
            <p>{details.description}</p>
            <h4>Sample Job Options</h4>
            <hr />
            <p>{details.sample_job_title}</p>
          </div>

          <div className="sample-jobs">
            <h4>Job options</h4>
            <hr />
            <p>Jobs directly related to your degree include:</p>
            <ul>
              {details.related_job_options.split(",").map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>Jobs where your degree would be useful include:</p>
            <p>{details.useful_job_options}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Major;
