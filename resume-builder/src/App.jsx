import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
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
import Customize from "./components/Customize";
import Welcome from "./components/Welcome";

function App() {
  const [page, setPage] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [show, setShow] = useState(false);
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
             New 
            </div>
            <div onClick={() => setPage(1)}>
              {" "}
              <i
                style={{ fontSize: "50px", color: "teal" }}
                className="bi bi-pencil-square"
              ></i>{" "}
              Edit
            </div>
            <ResumeModal show={show} setShow={setShow} />
          </div>
        </div>

        <div className={styles.second}>
         {page!==0 &&  <p style={{ width: "80%" }}>
            {" "}
            <ProgressBar
              variant="success"
              now={page * 14}
              label={`${page * 14}%`}
            />
          </p>}
          {page==0 && <Welcome/>}
          {page == 1 && <ProfileInfo />}
          {page == 2 && <AddAbout />}
          {page == 3 && <SocialAccount />}
          {page == 4 && <AddSkills />}
          {page == 5 && <AddEducation />}
          {page == 6 && <AddExperience />}
          {page == 7 && <Customize ref1={ref1} ref2={ref2} ref3={ref3} />}
          {page != 7 && (
            <Button
              onClick={() => setPage((prev) => prev + 1)}
              className={styles.next}
              size="lg"
            >
            {page==0?"Get Started":"Next"}
            </Button>
          )}
          {page == 7 && (
            <Button
              className={styles.next}
              size="lg"
              onClick={() => setShow(true)}
            >
              Finish and View
            </Button>
          )}
          {page != 1 && page!=0 && (
            <span
              onClick={() => setPage((prev) => prev - 1)}
              className={styles.back}
            >
              <i className="bi bi-arrow-left-circle"></i>
            </span>
          )}
        </div>
        <div className={styles.third}>
          <ResumePreview ref1={ref1} ref2={ref2} ref3={ref3} />
        </div>
      </div>
      {/* <Resume/> */}
    </>
  );
}

export default App;
