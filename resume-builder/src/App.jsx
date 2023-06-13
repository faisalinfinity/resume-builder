import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/Home.module.css";
import Resume from "./components/Resume";
import ResumeModal from "./components/Modal";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.first}>
          {" "}
          <div className={styles.menu}>
            <div >
              {" "}
              <i
                style={{ fontSize: "50px",color:"teal"}}
                className="bi bi-file-earmark-person-fill"
              ></i>{" "}
              Content
            </div>
            <div>
              {" "}
              <i
                style={{ fontSize: "50px",color:"teal" }}
                className="bi bi-pencil-square"
              ></i>{" "}
              Edit
            </div>
            <div>
              {" "}
              <i
                style={{ fontSize: "50px",color:"teal" }}
                className="bi bi-eye-fill"
              ></i>{" "}
             View
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div>
            <h1>
              Edit  personal details
            </h1>
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
        </div>
        <div className={styles.third}>
          <ResumePreview/>
        </div>
      </div>
    </>
  );
}

export default App;
