import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp, setExp } from "../redux/action";

const AddExperience = () => {
  const { workExp } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    id: Date.now(),
    company: "Your company",
    field: "Your field",
    startYear: "2018",
    endYear: "2019",
  });
  const dispatch = useDispatch();

  const reset = () => {
    setFormData({
      id: Date.now(),
      company: "",
      field: "",
      startYear: "",
      endYear: "",
    });
  };
  return (
    <div>
      <h2>Add Work Experience </h2>
      <div>
        <label htmlFor="">Organisation/Company</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          value={formData.company}
          type="text"
        />
        <label htmlFor="">Role/Designation</label>
        <input
          onChange={(e) => setFormData({ ...formData, field: e.target.value })}
          value={formData.field}
          type="text"
        />
        <label htmlFor="">Start Date</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, startYear: e.target.value })
          }
          value={formData.startYear}
          type="text"
        />
        <label htmlFor="">End Date</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, endYear: e.target.value })
          }
          value={formData.endYear}
          type="text"
        />
        <Button
          onClick={() => {
            dispatch(setExp(formData));
            reset();
          }}
        >
          {workExp.length == 0 ? "Add" : "Add More"}
        </Button>
        <Button variant="danger" onClick={reset}>
          Reset
        </Button>
        <div id="link-lists">
          {workExp?.map((el, i) => (
            <div onClick={() => setFormData({ ...el })} key={i}>
              {el.company.split(" ")[0]}
              <span onClick={() => dispatch(deleteExp(el.id))} id="cut">
                x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
