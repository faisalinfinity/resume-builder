import Button from "react-bootstrap/Button";
import React, { useState } from 'react'
import Resume from './Resume';
import { Modal } from "react-bootstrap";


const ResumeModal = () => {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
       
          <Button className="me-2" onClick={() => handleShow(true)}>
           View 
          </Button>
        
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Your Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body><Resume/></Modal.Body>
        </Modal>
      </>
    );
}

export default ResumeModal