import React, { useEffect } from "react";
import Major from "../major/Major";
import "./major-category.styles.css";
import { useHistory } from "react-router";

const MajorCategory = ({ major }) => {
  const history = useHistory();
  useEffect(() => {
    let id = history.location.state.id;
    if (id) {
      const anchor = document.querySelector(`#${id}`);
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [history]);

  return (
    <div className="major-category">
      <p id={`${major.major_category}`} className="category-name">
        {major.major_category}
      </p>
      <div className="major-list">
        {major.list.length > 0 &&
          major.list.map((details, idx) => (
            <Major key={idx} details={details} />
          ))}
      </div>
    </div>
  );
};

export default MajorCategory;
