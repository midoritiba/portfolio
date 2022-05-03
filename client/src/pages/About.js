import { useContext,useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Accordion from "../components/Accordion";
import { accordionData } from "../data/accordionData";
import { technologiesData } from "../data/technologiesData";

const About = () => {
  const {darkMode} = useContext(DarkModeContext)
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <section className={darkMode ? `about bg-dark` : `about bg-light`} id='about'>
      <h1 className='mt-5 mb-2'>About me</h1>
      <h5>I'm a Full Stack Developer who has recently started my journey as a web developer.
          I'm a self-motivated learner with organization, time management & communication skills.
          I'm able to work independently & collaboratively in a team with attention to details.</h5>

      <div className="details mt-4">
        <h2>Technologies</h2>
        <div className="technologies">
          {technologiesData.map(technology => (
            <div className="technologie-wrapper mt-3 me-3">
              {technology}
            </div>
          ))}
        </div>
      </div>

      <div className="information d-flex" style={{width: '100%', height:'50vh'}}>

        <div className="left w-100">
          <img src={process.env.PUBLIC_URL + '/images/aboutme.svg'} style={{height: '80%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} alt="" />
        </div>

        <div className="mt-3 right w-100 text-center">

          <p className='human fw-bold fs-4 mb-5 '>grab a coffee and learn more about me ☕<br/>
            <input className='mx-2'
            type="checkbox"
            checked={checked}
            onChange={handleChange}  />
            <label for="confirm" >am I human<span class="blink px-2">?</span></label>
            <img className='ms-2' src={process.env.PUBLIC_URL + '/images/recaptcha-official.svg'} style={{width: '45px'}} alt="" />
          </p>

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