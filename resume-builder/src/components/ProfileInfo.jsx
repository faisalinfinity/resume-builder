import React from "react";

const ProfileInfo = () => {
  return (
    <div>
      <h2>Edit personal details</h2>
      <div>
        <label htmlFor=""> Full name</label>
        <input type="text" />
        <label htmlFor=""> Job title</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Phone</label>
        <input type="text" />
        <label htmlFor="">Address</label>
        <input type="text" />
      </div>
    </div>
  )
};

export default ProfileInfo;
