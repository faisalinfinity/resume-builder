import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddSkills = () => {
  const { skills } = useSelector((state) => state);
  return (
    <div>
      <h2>Add Skills </h2>
      <div>
        <label htmlFor=""> Title</label>
        <input type="text" />
        <Button>Add</Button>
        <div id="link-lists">
          {skills?.map((el, i) => (
            <div key={i}>{el}
            <span id="cut">x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
