import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { FaArrowAltCircleUp } from "react-icons/fa";
import {HashLink as Link} from 'react-router-hash-link'
import {useState, useEffect} from 'react';

function App() {

  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <DarkModeProvider>
    <Router>
      <Navbar />
      <Homepage/>
      <Projects />
      <About />
      <Contact />
      <Footer/>
      {showButton && (
            <Link to="#home" >
              <FaArrowAltCircleUp
              size={42} 
              style={
                {position: 'fixed', 
                bottom:'5%', 
                right: '5%', 
                cursor: 'pointer',
                color: '#FF5CED'}
              }/>
            </Link>)
          }
    </Router>
    </DarkModeProvider>
  );
}

export default App;
