import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
export const Contact = () => {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    console.log(firstName + email + message);
    e.preventDefault();

    setButtonText("Sending...");

    emailjs
    .sendForm('service_jnt92qj','template_pvzooxx', e.target, '2oTR0TS38u11P0PdO',)
    .then(
      () => {
        setButtonText("Sent!");
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center"> 
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col sm={6} className="px-1">
                      <input type="text" name ="firstName" placeholder="Name" onChange = {(e) => {setFirstName(e.target.value)}} required />
                  </Col>
                  
                  <Col sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email" onChange = {(e) => {setEmail(e.target.value)}} required/>
                  </Col>
                  <Col className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" onChange = {(e) => {setMessage(e.target.value)}} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                      status.message &&
                      <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                  }
              </Row>
          </form>
 
        </Row>
      </Container>
    </section>
  )
}