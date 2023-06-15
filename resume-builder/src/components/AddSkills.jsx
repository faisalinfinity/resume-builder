import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSkills, setSkills } from "../redux/action";

const AddSkills = () => {
  const { skills } = useSelector((state) => state);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(Date.now());
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add Skills </h2>
      <div>
        <label htmlFor=""> Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        <Button onClick={() => dispatch(setSkills({ id: id, title }))}>
          {skills.length == 0 ? "Add" : "Add More"}
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setId(Date.now());
            setTitle("");
          }}
        >
          Reset
        </Button>
        <div id="link-lists">
          {skills?.map((el, i) => (
            <div
              onClick={() => {
                setId(el.id);
                setTitle(el.title);
              }}
              key={i}
            >
              {el.title}
              <span onClick={()=>dispatch(deleteSkills(el.id))} id="cut">x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
