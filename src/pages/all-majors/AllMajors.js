import React from "react";
import "./all-majors.styles.css";
import majorlist from "../../api/majorlist";
import MajorCategory from "../../components/major-category/MajorCategory";
import ScrollUpButton from "react-scroll-up-button";

const AllMajors = () => {
  return (
    <div className="all-majors">
      <div className="">
        {majorlist.map((major, idx) => (
          <MajorCategory key={idx} major={major} />
        ))}
      </div>
      <ScrollUpButton style={{backgroundColor: "#87ceeb"}} />
    </div>
  );
};

export default AllMajors;
