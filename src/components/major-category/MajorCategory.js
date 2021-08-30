import React, { useEffect } from "react";
import Major from "../major/Major";
import "./major-category.styles.css";
import { useHistory } from "react-router";

const MajorCategory = ({ major }) => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.state) {
      let id = history.location.state.id;
      console.log("id:", id);
      //const anchor = document.querySelector(`#${id}`);
      let anchor = Array.from(document.querySelectorAll("p")).find(
        (el) => el.textContent === id
      );
      anchor.scrollIntoView({ behavior: "smooth", block: "start" }); //block positions: center, start, end
    }
  }, [history]);

  return (
    <div className="major-category">
      <p className="category-name">{major.major_category.toUpperCase()}</p>
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
