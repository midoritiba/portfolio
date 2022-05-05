import emailjs from 'emailjs-com'
import { useRef, useState } from 'react';
import{ init } from '@emailjs/browser';
init('kmek_W5mktXnxykMV');

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kkzq1oa', 'template_9ewedmh', form.current, 'kmek_W5mktXnxykMV')
    .then(
      (result) => {
        console.log(result.text);
        alert('SUCCESS!');
      },
      (error) => {
        console.log(error.text);
        alert('FAILED...', error);
      });
      setSubmitted(true);

  };

  if (submitted) {
    return (
      <>
        <h1 className='text-2xl'>Thank you!</h1>
        <h1 className='text-md'>I'll be in touch soon.</h1>
      </>
    );
  }

  return (
        <div className="section-content">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}  ref={form}>
              <div>
                <input required placeholder='Enter your name'  type='text' name='user_name' />
                <input required type='text' placeholder='Enter your email' name='user_email' />
                <input required as='textarea' type='text' placeholder='Leave a message :)' name='message' />
              </div>
              <button className='fill btn mt-5 fw-bold'
                    type='submit'
                    style={{backgroundColor: 'white', color: 'blueviolet'}}>Send</button>
            </form>
          </div>
        </div>

  );
};

export default ContactForm;