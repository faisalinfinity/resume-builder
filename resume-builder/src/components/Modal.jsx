import Button from "react-bootstrap/Button";
import React, { useState } from 'react'
import Resume from './Resume';
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";


const ResumeModal = ({show,setShow}) => {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
   
    const {name}=useSelector((state)=>state)
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
       
          <div onClick={() => handleShow(true)}>
              {" "}
              <i
                style={{ fontSize: "50px", color: "teal" }}
                className="bi bi-eye-fill"
              ></i>{" "}
             Full view
            </div>
        
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{name} Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body><Resume/></Modal.Body>
        </Modal>
      </>
    );
}

export default ResumeModal