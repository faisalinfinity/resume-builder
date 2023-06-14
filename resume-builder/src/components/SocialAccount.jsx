import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSocial } from "../redux/action";

const SocialAccount = () => {
  const { links } = useSelector((state) => state);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add Social Accounts </h2>
      <div>
        <label htmlFor=""> Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <label htmlFor=""> Link</label>
        <input onChange={(e) => setLink(e.target.value)} type="text" />
        <Button onClick={() => dispatch(setSocial({ title, link }))}>
          Add
        </Button>
        <div id="link-lists">
          {links?.map((el, i) => (
            <div key={i}>
              {el.title}
              <span onClick={} id="cut">x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
