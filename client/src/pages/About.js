import { useContext,useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { Accordion } from 'react-bootstrap'

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
          <div className="technologie-wrapper mt-3 me-3">
                HTML
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                CSS
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                SCSS
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                Bootstrap
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                Javascript
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                Node.js
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                React.js
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                Express.js
          </div>
          <div className="technologie-wrapper mt-3 me-3">
                MongoDB
          </div>

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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>5 years working in social projects</Accordion.Header>
                  <Accordion.Body>
                  At the age of 21 I got involved in my first social educational project which was a period of much learning and understanding of what motivates me professionally and personally. 
                  <br/>I acted as a Mathematics and Physics tutor, Physics teacher, HR coordinator and Director during my stay in this first project. <br/>As an introvert myself, much courage of me was required to face a loooot of public speaking (one of my greatest fears). BUT my greatest challenged was the quest on how to engage 50 students in the same room aged between 16 and 60 years old to learn 'Principle of Inertia' on a Friday at 10 pm. 
                  <br/><br/>
                  Leading a team of 20 teachers and 5 coordinators made me gain perspective and ability to listen, guide and delegate. 
                  <br/>My team managed to initiate an important partnerships of book donations and concessions of spaces for classes, study rooms and equipment. As well as establish an internal selection process for teachers, tutors and students, thus needing to interview numerous volunteers and students.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Hobbies</Accordion.Header>
                  <Accordion.Body>
                    I can spend hours sitting in front of a computer or reading a good book, but being active is a non negotiable deal to my body to main its sanity and well-being loaded. I have a history with team sports, but nowadays I weekly attend HipHop and Zumba classes.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            {/* <p>I've always been passionate about science and I was very engaged in subjects such as Physics and Mathematics during my years in school. My curiosity and interest in education, arts and social equity, however, have always been topics of high relevance in my life.
            </p>
            <br/> */}
            {/* <ul>
              <li className='fw-bold'>5 years working in social projects</li>
            </ul>
            <p className='px-3'>
            At the age of 21 I got involved in my first social educational project which was a period of much learning and understanding of what motivates me professionally and personally. 
            <br/>I acted as a Mathematics and Physics tutor, Physics teacher, HR coordinator and Director during my stay in this first project. <br/>As an introvert myself, much courage of me was required to face a loooot of public speaking (one of my greatest fears). BUT my greatest challenged was the quest on how to engage 50 students in the same room aged between 16 and 60 years old to learn 'Principle of Inertia' on a Friday at 10 pm. 
            <br/><br/>
            Leading a team of 20 teachers and 5 coordinators made me gain perspective and ability to listen, guide and delegate. 
            <br/>My team managed to initiate an important partnerships of book donations and concessions of spaces for classes, study rooms and equipment. As well as establish an internal selection process for teachers, tutors and students, thus needing to interview numerous volunteers and students.</p> */}
            </div>
          )}
        
        </div>
        
      </div>
      
    </section>
  )
}

export default About