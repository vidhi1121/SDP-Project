import React,{useState} from 'react'
import { Form,Col,Row, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Message from '../components/shared/Message';

const Result =() =>{
    return(
        <Message variant="success">Your message has been sent successfully.</Message>
    )
}


const ContactComponent = () => {


    const [result, showResult] = useState(false);
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_qqh7lb5", 'template_af1lkih', e.target, 'YsWXzKgp5omFYv2iX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

      
  return (
    <div>
 {/* <FormContainer>
        <h1>Get in touch</h1> */}
<Form onSubmit={sendEmail}>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
    <Form.Label column sm={2}>
      Full Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name='fullname' placeholder="Full Name"  required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" name='email' placeholder="Email" required/>
    </Col>
  </Form.Group>


  

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Mobile No
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name='phone' placeholder="Mobile No" pattern="[1-9]{1}[0-9]{9}"  required/>
    </Col>
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label >Type your message here...</Form.Label>
    <Form.Control as="textarea" name='message' rows={3}  required/>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>

<div className='row'>
    {result ? <Result/> : null}
    </div>

</Form>
{/* </FormContainer> */}
    </div>
  )
}

export default ContactComponent