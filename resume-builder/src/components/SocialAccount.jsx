import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const SocialAccount = () => {
  const { links } = useSelector((state) => state);
  return (
    <div>
      <h2>Add Social Accounts </h2>
      <div>
        <label htmlFor=""> Title</label>
        <input type="text" />
        <label htmlFor=""> Link</label>
        <input type="text" />
        <Button>Add</Button>
        <div id="link-lists">
          {links?.map((el, i) => (
            <div key={i}>{el.title}
            <span id="cut">x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
