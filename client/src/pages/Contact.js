import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ContactForm from '../components/ContactForm';


const Contact = () => {
  const {darkMode} = useContext(DarkModeContext)

  return (
    
    <section className={darkMode ? `contact bg-dark` : `contact bg-light`} id='contact'>
      <h1 className='mt-5 mb-3 title'>Get in touch</h1>
      <h5 className="mt-1 mb-5">Don't hesitate contacting me 🤗</h5>
      <div className="contact-wrapper">
          <ContactForm />            
          <div className='d-flex flex-column text-center form-img'>
            <img  src={process.env.PUBLIC_URL + '/images/contact.png'} style={{width: '300px', borderRadius: '50%'}} alt="" /> 
          </div>   
      </div>
     

      
    </section>
  )
}

export default Contact