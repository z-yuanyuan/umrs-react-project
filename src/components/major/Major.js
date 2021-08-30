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
        <div>
          {details.description ? (
            <div className="major-description">
              <div className="description">
                <h4>Description</h4>
                <hr />
                <p>{details.description}</p>
                <h4>Career Opportunities</h4>
                <hr />
                <p>{details.sample_job_title}</p>
              </div>
              Î
              <div className="sample-jobs">
                <h4>Job options</h4>
                <hr />
                <p>Jobs directly related to your degree include:</p>
                <ul>
                  {details.related_job_options &&
                    details.related_job_options
                      .split(",")
                      .map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <p>Jobs where your degree would be useful include:</p>
                <ul>
                  {details.useful_job_options &&
                    details.useful_job_options
                      .split(",")
                      .map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          ) : (
            <div className="major-description-false">
              <p>Oops... there is no deatils for this major.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Major;
