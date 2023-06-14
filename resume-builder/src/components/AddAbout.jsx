import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAbout, setAdress } from "../redux/action";

const AddAbout = () => {
  const { about } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add About</h2>
      <div>
        <label htmlFor="">Describe About Yourself</label>
        <textarea
          onChange={(e) => dispatch(setAbout(e.target.value))}
          value={about}
          rows={10}
          cols={10}
          type="text"
        />
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default AddAbout;
