import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
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
