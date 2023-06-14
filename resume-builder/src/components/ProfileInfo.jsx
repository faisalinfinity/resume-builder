import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdress,
  setEmail,
  setJob,
  setName,
  setPhone,
} from "../redux/action";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const {email,name,phone,address,jobTitle}=useSelector((state)=>state)
  return (
    <div>
      <h2>Edit personal details</h2>
      <div>
        <label htmlFor=""> Full name</label>
        <input
          onChange={(e) => dispatch(setName(e.target.value))}
          type="text"
          value={name}
        />
        <label htmlFor=""> Job title</label>
        <input value={jobTitle} onChange={(e) => dispatch(setJob(e.target.value))} type="text" />
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => dispatch(setEmail(e.target.value))}
          type="text"
          value={email}
        />
        <label htmlFor="">Phone</label>
        <input
          onChange={(e) => dispatch(setPhone(e.target.value))}
          type="text"
          value={phone}
        />
        <label htmlFor="">Address</label>
        <input
          onChange={(e) => dispatch(setAdress(e.target.value))}
          type="text"
          value={address}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
