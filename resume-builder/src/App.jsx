import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/Home.module.css";
import Resume from "./components/Resume";
import ResumeModal from "./components/Modal";
import ResumePreview from "./components/ResumePreview";
import ProfileInfo from "./components/ProfileInfo";
import SocialAccount from "./components/SocialAccount";
import AddSkills from "./components/AddSkills";
import AddAbout from "./components/AddAbout";
import AddEducation from "./components/AddEducation";
import AddExperience from "./components/AddExperience";

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(6);
  const ref1=useRef()
  if(ref1.current){
    ref1.current.style.backgroundColor="lightblue"
  }


  return (
    <>
      <div className={styles.main}>
        <div className={styles.first}>
          {" "}
          <div className={styles.menu}>
            <div>
              {" "}
              <i
                style={{ fontSize: "50px", color: "teal" }}
                className="bi bi-file-earmark-person-fill"
              ></i>{" "}
              Content
            </div>
            <div>
              {" "}
              <i
                style={{ fontSize: "50px", color: "teal" }}
                className="bi bi-pencil-square"
              ></i>{" "}
              Edit
            </div>
            <div>
              {" "}
              <i
                style={{ fontSize: "50px", color: "teal" }}
                className="bi bi-eye-fill"
              ></i>{" "}
              View
            </div>
          </div>
        </div>
        <div className={styles.second}>
          {page == 1 && <ProfileInfo />}
          {page==2 && <AddAbout/>}
          {page == 3 && <SocialAccount />}
          {page == 4 && <AddSkills />}
          {page == 5 && <AddEducation />}
          {page == 6 && <AddExperience />}
          <Button className={styles.next} size="lg">
            NEXT
          </Button>
        </div>
        <div className={styles.third}>
          <ResumePreview ref1={ref1} />
        </div>
      </div>
      {/* <Resume/> */}
    </>
  );
}

export default App;
