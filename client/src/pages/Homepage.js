import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {HashLink as Link} from 'react-router-hash-link'
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Homepage = () => {

  const {darkMode} = useContext(DarkModeContext)

  let iconSize = "40"
  let iconColor = "#37B3A8"
  let iconClasses = 'mx-3 cursor-pointer'

  return (
    <section 
      className={darkMode ? 
                `homepage bg-dark` : 
                `homepage bg-light`} 
      id='home'
    >

        {/* DESCRIPTION */}
        <div className="hero-section" >
          
          <div>
            {/* INTRODUCTION */}
            <h1 className="my-3 text-center" >
              Hi, I am Michelle | Full Stack Developer
            </h1>

            {/* SOCIAL MEDIA ICONS */}
            <div className='text-center mb-5'>
              <a rel='noopener noreferrer' target='_blank' href='https://github.com/midoritiba'>
                <FaGithub size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/michelle-midori/'>
                <FaLinkedinIn size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='mailto:mic.tiba@gmail.com'>
                <FaEnvelope size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
            </div>
          
            <h4 className="mt-0 mt-md-4 text-center">
              I'm a lifelong learner, interested in beautiful designs and clean coding
            </h4>
            <p className="text-center">
              When I am not coding I'm most probably dancing Zumba 💃 or shower singing 🎤🚿
            </p>

            {/* CALL TO ACTION BUTTON */}
            <Link to='#projects' className="mt-2 mt-md-5 wrap">
              <button className="button">check out projects</button>
            </Link>
          </div>

          {/* MAIN-IMAGE */}
          <div className='img ms-5 align-self-center'>
             <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
          </div>

        </div>

    </section>
      
  )
}

export default Homepage