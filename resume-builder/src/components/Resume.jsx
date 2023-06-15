import { useRef } from "react";
import "../styles/resume.css";
import ReactToPdf from "react-to-pdf";
import { useSelector } from "react-redux";
const Resume = ({ ref1, ref2,ref3 }) => {
  const { name, phone, email, jobTitle, links, about, skills, address, more,education,workExp } =
    useSelector((state) => state);

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
        targetRef={ref3}
        filename="document.pdf"
      >
        {({ toPdf }) => (
          <button onClick={toPdf} className="button">
            Generate PDF
          </button>
        )}
      </ReactToPdf> */}
      <div ref={ref3} id="container">
        <div ref={ref1} id="profile">
          {/* <div id="image">
            <img
              id="profile-photo"
              src="http://mnnit.ac.in/ss/images/shashank.jpg"
              alt="Profile-Image"
            />
            <a href="#">
              <i className="fas fa-pen stroke-transparent"></i>
            </a>
          </div> */}
          <p id="name">
            {name}
            <br />
            <span id="email">{email}</span>
          </p>
          <p id="designation">
            {jobTitle}
            <br />
            <br />
            <span id="link">
              <a href="#">
                <i className={`bi bi-phone`}></i>
                {phone}
              </a>
              {links.map((el, i) => (
                <a key={i} href={el?.link}>
                  <i className={`bi bi-${el?.title.toLowerCase()}`}></i>
                  {el?.title}
                </a>
              ))}
              <p>
                Address : <span>{address}</span>
              </p>
            </span>
          </p>
         

          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>About</p>
            <a href="#">
              <i className="fas fa-pen stroke-transparent-blue"></i>
            </a>
          </div>
          <p id="summary">
            {about}
            <br />
          </p>
          <p id="skills">
            Skills
            <br />
            <p className="skill-details">
              {skills.map((el, i) => (
                <p key={i}>{el.title}</p>
              ))}
            </p>
          </p>
          {more?.map((e, i) => {
            return (
              <p key={i} className="more">
                {e.title}
                <br />
                <p className="more-details">
                  {e.items.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </p>
              </p>
            );
          })}
         
        </div>
        <div  id="info-cards">
          <div className="card">
            <p>
              <i className="fas fa-br/iefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Education
            </p>
            <ul>
              {education.map((el,i)=>{
                return <li key={i}>
                <p className="tags">
                  {el.course}
                  <br />
                  <span>
                   {el.institute} | <span>{el.startYear}-{el.endYear}</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              })}
              
            </ul>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-br/iefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Work Experience
            </p>
            <ul>
              {workExp.map((el,i)=>{
                return <li key={i}>
                <p className="tags">
                  {el.company}
                  <br />
                  <span>
                   {el.field} | <span>{el.startYear}-{el.endYear}</span>
                  </span>
                </p>
                <a className="edit" href="#">
                  <i className="fas fa-pen stroke-transparent-blue"></i>
                </a>
              </li>
              })}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
