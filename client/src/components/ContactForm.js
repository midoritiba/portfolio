import {Form, Container} from 'react-bootstrap'
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
      <div className='me-5'>
        <h5 className="mt-1 mb-3">Don't hesitate contacting me 🤗</h5>
          <Form ref={form} onSubmit={handleSubmit} style={{minWidth: '300px', maxWidth: '350px'}}>
            <Form.Control required className='mb-3'  placeholder='Enter your name'  type='text' name='user_name'/>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control required type='text' placeholder='Enter email' name='user_email' />
            </Form.Group>

            <Form.Group className='mb-2' >
              <Form.Control required as='textarea' rows={6} placeholder='Leave a message' name='message' />
            </Form.Group>
            <button
                className='link btn'
                type='submit'
                style={{backgroundColor: 'blueviolet', color: 'white'}}
              >
                Send a message
              </button>
        </Form>
      </div>

  );
};

export default ContactForm;