import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/Home.module.css";
import Resume from "./components/Resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Resume/>
    // <>
    //   <div className={styles.main}>
    //     <div className={styles.first}>sm=8</div>
    //     <div className={styles.second}><Resume/></div>
    //   </div>
    // </>
  );
}

export default App;
