import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
// import {HashLink as Link} from 'react-router-hash-link'

const Contact = () => {
  const {darkMode} = useContext(DarkModeContext)
  
  return (
    
    <section className={darkMode ? `contact bg-dark` : `contact bg-light`} id='contact'>
      <div className='d-flex'>
        <h1 className='mb-3'>Contact me</h1>
        <img className='mt-5' src={process.env.PUBLIC_URL + '/images/contact.png'} style={{width: '150px', borderRadius: '50%'}} alt="" />
      </div>
      
    </section>
  )
}

export default Contact