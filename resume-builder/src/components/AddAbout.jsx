import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddAbout = () => {
  const { about } = useSelector((state) => state);
  return (
    <div>
      <h2>Add About</h2>
      <div>
        <label htmlFor="">Describe About Yourself</label>
        <textarea rows={10} cols={10} type="text" />
        <Button>Add</Button>
        
      </div>
    </div>
  );
};

export default AddAbout;
