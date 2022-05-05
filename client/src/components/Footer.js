import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
const Footer = () => {

  const {darkMode} = useContext(DarkModeContext)
  let iconSize = "32"
  let iconColor = "#37B3A8"
  let iconClasses = 'mx-3 cursor-pointer'
  return (
    <footer className={darkMode ? `footer-dark` : `footer-light`}>
        <div className="footer-wrapper">
          <div className="copyright pt-2">
            <h5>Michelle Tiba</h5>
            <p style={{fontSize: '12px'}}>&copy; 2022, Build and designed by Michelle Tiba</p>
          </div>

          <div className="footer-contact">
              <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://github.com/midoritiba'>
                <FaGithub size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
              <a rel='noopener noreferrer' target='_blank' className='link text-decoration-none' href='https://www.linkedin.com/in/michelle-midori/'>
                <FaLinkedinIn size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='mailto:mic.tiba@gmail.com' className='link'>
                <FaEnvelope size={iconSize} color={iconColor} className={iconClasses}/>
              </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer