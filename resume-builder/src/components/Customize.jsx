import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Customize = ({ref1,ref2,ref3}) => {
  const { education } = useSelector((state) => state);

  return (
    <div>
      <h2>Customize</h2>
      <div>
        <label htmlFor="">Profile Section</label>
        <input onChange={(e)=>{
            if(ref1.current){
                ref1.current.style.backgroundColor=e.target.value
            }
        }} type="color" />
        <label htmlFor="">Experience Section</label>
        <input onChange={(e)=>{
            if(ref2.current){
                ref2.current.style.backgroundColor=e.target.value
            }
        }}  type="color" />
        <label htmlFor="">Font Family</label>
        <select onChange={(e)=>{
             if(ref3.current){
                ref3.current.style.fontFamily=e.target.value
            }
        }} name="" id="">
        <option value="" >Choose Font style</option>
            <option value="sans-serif" style={{fontFamily:"sans-serif"}}>Sans-serif</option>
            <option value="cursive"  style={{fontFamily:"cursive"}}>Cursive</option>
            <option value="monospace"  style={{fontFamily:"monospace"}}>Monospace</option>
        </select>
        {/* <div id="link-lists">
          {education?.map((el, i) => (
            <div key={i}>{el.course.split(" ")[0]}
            <span id="cut">x</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Customize;
