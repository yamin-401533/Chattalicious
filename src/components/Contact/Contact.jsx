import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css'; // Import the CSS file

function AppContact() {
    return (
    <section id="contact" className="block contact-block">
        <Container fluid>
        
        <div className="title-holder">
            <h1>Get In Touch</h1>
        </div>
        <Form className='contact-form'>
            <div className="title-holder">
                <p>Share Your Experience with Us</p>
            </div>
            <Row>
                <Col sm={4}>
                    <Form.Control type="text" className="form-control name-field" placeholder="Enter your full name" required />
                </Col>
                <Col sm={4}>
                    <Form.Control type="email" placeholder="Enter your email address" required />
                </Col>
                <Col sm={4}>
                    <Form.Control type="tel" placeholder="Enter your contact number" required />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Form.Control as="textarea" className="form-control message-field" placeholder="Enter your contact message" required />
                </Col>
            </Row>
            <div className='btn-holder'>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.526707176728!2d91.7987063149596!3d22.3568519852926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd883b8e1f1b1%3A0x4b1e8b1e8b1e8b1e!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1633025868782"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              slytherin@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              987-654-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              JamalKhan, Chittagong, Bangladesh
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;