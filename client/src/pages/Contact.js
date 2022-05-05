import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ContactForm from '../components/ContactForm';


const Contact = () => {
  const {darkMode} = useContext(DarkModeContext)

  return (
    
    <section className={darkMode ? `contact bg-dark` : `contact bg-light`} id='contact'>
      
        <div className="d-flex flex-column" style={{}}>
          <h1 className='mb-3'>Get in touch</h1>

          <ContactForm />    
          </div>     
          
          <div className='d-flex flex-column text-center ms-5'>
            <img className='mt-5 ms-5' src={process.env.PUBLIC_URL + '/images/contact.png'} style={{width: '300px', borderRadius: '50%'}} alt="" /> 
          </div>        

      
    </section>
  )
}

export default Contact