import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Customize = () => {
  const { education } = useSelector((state) => state);
  return (
    <div>
      <h2>Customize</h2>
      <div>
        <label htmlFor="">Institute</label>
        <input type="text" />
        <label htmlFor="">Course/Degree</label>
        <input  type="text" />
        <label htmlFor="">Start Year</label>
        <input maxLength={4} type="text" />
        <label htmlFor="">End Year</label>
        <input maxLength={4} type="text" />
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

export default Customize;
