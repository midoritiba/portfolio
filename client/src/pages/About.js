import { useContext,useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Accordion from "../components/Accordion";
import { accordionData } from "../data/accordionData";
import { technologiesData } from "../data/technologiesData";
import { educationData } from "../data/educationData";
import {FaFileDownload} from 'react-icons/fa';

const About = () => {
  const {darkMode} = useContext(DarkModeContext)
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <section 
      className={darkMode ? 
                `about bg-dark` : 
                `about bg-light`} 
      id='about'
    >

      <h1 className='mt-5 mb-3 title'>About me</h1>

      <div className="introduction mb-5">
        <h5 className="intro">
          I'm a Full Stack Developer who has recently started my journey as a web developer.
          I'm a self-motivated learner with organization, time management & communication skills.
          I'm able to work independently & collaboratively in a team with attention to details.<br/>
        </h5>
        <div className="cv">
          <a rel='noopener noreferrer' target='_blank' href='https://drive.google.com/file/d/1QJcGQ-kqV1xmnY6AJgZM2rBVYSERXfgR/view?usp=sharing'>
            <FaFileDownload className="mt-3" size={42} color={darkMode ? 'white' : 'black'}/><p>Full CV</p>
          </a>
        </div>
        
      </div>

      <div className="details my-5">

        <div className="details-education">
          <h2>Certificates</h2>
          <div className="education mt-4">
            <ul>
              {educationData.map(ed => (
              <li>
                <p className="fw-bold">{ed.name}<br/>
                <span className="fw-light">{ed.date}</span></p>
            </li>
              ))}

            </ul>
          </div>
        </div>

        <div className="details-technologies me-2">
          <h2>Technologies</h2>
          <div className="technologies text-center">
            {technologiesData.map(technology => (
              <div className="technologie-wrapper">
                {technology}
              </div>
            ))}
          </div>
        </div>

      </div>



      <div className="extra-info d-flex mt-5">

        <div className="extra-info-img left">
          <div>
            <p className='human fw-bold fs-4'>
             grab a coffee and learn more about me ☕
            </p> 

            <div style={{backgroundColor: 'white', display: 'inline-block', borderRadius: '10px', border: '2px solid black'}} className="p-3 mb-2">
              <input className='mx-2'
                type="checkbox"
                checked={checked}
                onChange={handleChange}  />
                <label for="confirm" className="ms-1 fw-bold fs-4" >
                  not a robot<span class="blink px-2">?</span>
                </label>

                <img className='mb-1 ms-2' src={process.env.PUBLIC_URL + '/images/recaptcha-official.svg'} style={{width: '45px'}} alt="" />
            </div>
            </div>

            <img className='about-me-img' src={process.env.PUBLIC_URL + '/images/aboutme.svg'} alt="" />
        </div>

        <div className="extra-info-wrapper w-100">

          {checked && (
            <div className='more-about text-start'  data-simplebar>
              {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
              ))}
           </div>
          )}
        
        </div>
        
      </div>
      
    </section>
  )
}

export default About