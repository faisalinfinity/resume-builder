import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteEdu, setEducation } from "../redux/action";

const AddEducation = () => {
  const { education } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    id: Date.now(),
    institute: "Dummy Institute",
    course: "Dummy Course",
    startYear: "2018",
    endYear: "2019",
  });

  const dispatch = useDispatch();

  const reset = () => {
    setFormData({
      id: Date.now(),
      institute: "",
      course: "",
      startYear: "",
      endYear: "",
    });
  };
  return (
    <div>
      <h2>Add education </h2>
      <div>
        <label htmlFor="">Institute</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, institute: e.target.value })
          }
          value={formData.institute}
          type="text"
        />
        <label htmlFor="">Course/Degree</label>
        <input
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          value={formData.course}
          type="text"
        />
        <label htmlFor="">Start Year</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, startYear: e.target.value })
          }
          value={formData.startYear}
          maxLength={4}
          type="text"
        />
        <label htmlFor="">End Year</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, endYear: e.target.value })
          }
          value={formData.endYear}
          maxLength={4}
          type="text"
        />
        <Button onClick={() =>{
           dispatch(setEducation(formData))
           reset()
        }}>
          {education.length == 0 ? "Add" : "Add More"}
        </Button>
        <Button variant="danger" onClick={reset}>
          Reset
        </Button>
        <div id="link-lists">
          {education?.map((el, i) => (
            <div onClick={() => setFormData({ ...el })} key={i}>
              {el.course.split(" ")[0]}
              <span onClick={() => dispatch(deleteEdu(el.id))} id="cut">
                x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
