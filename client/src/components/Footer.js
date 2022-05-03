import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Footer = () => {

  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <footer className={darkMode ? `footer-dark` : `footer-light`}>
        <div className="footer-wrapper">
          <div className="copyright">
            <h1>Michelle Tiba</h1>
            <p>Build and designed by Michelle</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>

            <h5>About</h5>
          </div>
          <div className="footer-contact">
            <h4>Get in touch</h4>
            <h5>e-mail</h5>
          </div>
        </div>
    </footer>
  )
}

export default Footer