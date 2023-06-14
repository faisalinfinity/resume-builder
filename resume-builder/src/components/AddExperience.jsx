import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddExperience = () => {
  const { education } = useSelector((state) => state);
  return (
    <div>
      <h2>Add Work Experience </h2>
      <div>
        <label htmlFor="">Organisation/Company</label>
        <input type="text" />
        <label htmlFor="">Role/Designation</label>
        <input  type="text" />
        <label htmlFor="">Start Date</label>
        <input  type="date" />
        <label htmlFor="">End Date</label>
        <input  type="date" />
        <Button>{education.length==0?"Add":"Add More"}</Button>
        <div id="link-lists">
          {education?.map((el, i) => (
            <div key={i}>{el.course.split(" ")[0]}
            <span id="cut">x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
