import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSkills, deleteSocial, setSocial } from "../redux/action";

const SocialAccount = () => {
  const { links } = useSelector((state) => state);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(Date.now());
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add Social Accounts </h2>
      <div>
        <label htmlFor=""> Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label htmlFor=""> Link</label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
        />
        <Button  onClick={() => dispatch(setSocial({ id: id, title, link }))}>
          Add
        </Button>
        <Button variant="danger" onClick={() =>{
          setId(Date.now())
          setLink("")
          setTitle("")
        }}>
     Reset
        </Button>
        <div id="link-lists">
          {links?.map((el, i) => (
            <div
              onClick={() => {
                setTitle(el.title);
                setLink(el.link);
                setId(el.id);
              }}
              key={i}
            >
              {el.title}
              <span onClick={() => dispatch(deleteSocial(el.id))} id="cut">
                x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
