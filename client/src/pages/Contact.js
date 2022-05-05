import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ContactForm from '../components/ContactForm';


const Contact = () => {
  const {darkMode} = useContext(DarkModeContext)

  return (
    
    <section className={darkMode ? `contact bg-dark` : `contact bg-light`} id='contact'>
      <h1 className='mb-3'>Get in touch</h1>
      <h5 className="mt-1 mb-5">Don't hesitate contacting me 🤗</h5>
      <div className="contact-wrapper">
        <div className="d-flex flex-column" style={{}}>
          <ContactForm />    
        </div>     
          
        <div className='d-flex flex-column text-center '>
          <img  src={process.env.PUBLIC_URL + '/images/contact.png'} style={{width: '300px', borderRadius: '50%'}} alt="" /> 
        </div>   
      </div>
     

      
    </section>
  )
}

export default Contact