import { useRef } from "react";
import "../styles/resume.css";
import ReactToPdf from "react-to-pdf";
const Resume = () => {
  const ref = useRef();
  const options = {
    orientation: "p",
    unit: "mm",
    format: "a2",
    
    putOnlyUsedFonts: true,
    floatPrecision: 16,
    width: 200,
    x: 0,
    y: 0,
  };
  return (
    <>
      {/* <ReactToPdf
        options={options}
        scale={1}
        targetRef={ref}
        filename="document.pdf"
      >
        {({ toPdf }) => (
          <button onClick={toPdf} className="button">
            Generate PDF
          </button>
        )}
      </ReactToPdf> */}
      <div ref={ref} id="container">
        <div id="profile">
          <div id="image">
            <img
              id="profile-photo"
              src="http://mnnit.ac.in/ss/images/shashank.jpg"
              alt="Profile-Image"
            />
            <a href="#">
              <i className="fas fa-pen stroke-transparent"></i>
            </a>
          </div>
          <p id="name">
            Shashank Srivastava
            <br />
            <span id="email">shashank12@mnnit.ac.in</span>
          </p>
          <p id="designation">
            Assistant Professor
            <br />
            <span id="college">
              Motilal Nehru National Institute of Technology, Allahabad,
              Prayagraj, India
            </span>
          </p>
          <div id="social-links">
            <a href="#">
              <i className="fab fa-facebook-f stroke-transparent"></i>
            </a>
            <a>
              <i className="fab fa-twitter stroke-transparent"></i>
            </a>
            <a>
              <i className="fab fa-linkedin-in stroke-transparent"></i>
            </a>
            <a>
              <i className="fab fa-github stroke-transparent"></i>
            </a>
          </div>
          <a id="edit-intro" href="#">
            <i className="fas fa-pen-alt blue"></i>&nbsp;&nbsp;Edit Intro
          </a>
          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>About</p>
            <a href="#">
              <i className="fas fa-pen stroke-transparent-blue"></i>
            </a>
          </div>
          <p id="year-graduation">
            Expected Year of Graduation
            <br />
            <strong>March, 2014</strong>
          </p>
          <p id="education">
            Education
            <br />
            <strong>
              Doctorate, Indian Institute of Information Technology-Allahabad
            </strong>
          </p>
          <p id="more-about">
            More about me
            <br />
            <span>DUGC of Computer Science & Engineering Department</span>
          </p>
          <p id="telephone">
            Telephone
            <br />
            <strong>0532-2271351</strong>
          </p>
          <p id="fax">
            Fax
            <br />
            <strong>+91-532-25453441</strong>
          </p>
        </div>
        <div id="info-cards">
          <div className="card">
            <p>
              <i className="fas fa-br/iefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Work Experience
            </p>
            <a href="#">
              + Add work experience, including contracts and internships
            </a>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-br/iefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Workshop
            </p>
            <ul>
              <li>
                <p className="tags">
                  5 th IEEE Conference on Wireless Communication and Sensor
                  Networks
                  <br />
                  <span>
                    IIIT-Allahabad | <span>2010</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Microsoft Theory Day
                  <br />
                  <span>
                    IISc Bangalore | <span>2012</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Microsoft Research India 2012 Summer School on Distributed
                  Algorithms, Systems and Programming
                  <br />
                  <span>
                    IISc Bangalore | <span>2012</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  IEEE workshop on Cyber security
                  <br />
                  <span>
                    DAIICT Gandhi Nagar | <span>Nov, 2013</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Author workshop jointly organized by Central Libr/ary
                  <br />
                  <span>
                    MNNIT Allahabad & Springer (India) Pvt. Ltd New Delhi |{" "}
                    <span>29th October, 2015</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Workshop for Computer Science Teachers
                  <br />
                  <span>
                    IIT Kanpur | <span>July, 2014</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  15th International Conference on Cryptology INDOCRYPT
                  <br />
                  <span>
                    {" "}
                    | <span>2014</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
            </ul>
            <a href="#">+ Add workshops attended</a>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-graduation-cap stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Education
            </p>
            <ul>
              <li>
                <p className="tags">
                  Indian Institute of Information Technology-Allahabad
                  <br />
                  <span>
                    Secure Mobile Agent Based Communication for Real Time
                    Applications, Doctorate | <span>March, 2014</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Indian Institute of Information Technology-Allahabad
                  <br />
                  <span>
                    Information Security, MS | <span>1994-1996</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              <li>
                <p className="tags">
                  Institute of Engineering and Rural Technology, U.P.T.U.
                  Allahabad
                  <br />
                  <span>
                    Computer Science & Engineering, B.Tech |{" "}
                    <span>1988-1992</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
            </ul>
            <a href="#">+ Add new</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;