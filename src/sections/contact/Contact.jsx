import React, { Component } from 'react';

import { Form, Col } from 'react-bootstrap';
import Button from '../../common/components/button/Button';

import './contact.scss';

export default class Contact extends Component {
  state = {
    validated: false,
    isFormValid: true,
  };

  handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();

      this.setState({ isFormValid: false });
    }
    this.setState({ validated: true });
  };

  render() {
    const { validated, isFormValid } = this.state;

    return (
      <div className="contact">
        <div className="contact__header">
          We would love to hear from you
        </div>

        <Form className="contact__form"
              noValidate
              onSubmit={this.handleSubmit}
              validated={validated}
        >
          {
            !isFormValid && (
              <div className="contact__invalid-message">
                <i className="fas fa-exclamation-circle" />
                Please complete the form and try again.
              </div>
            )
          }

          <div className="contact__fields-wrapper">
            <Form.Row>
              <Form.Group as={Col} controlId="firstName" sm={6}>
                <Form.Control required type="text" placeholder="First name" />

                <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                  We need your first name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="lastName" sm={6}>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                  We need your last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email" sm={6}>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                  Please use a valid e-mail address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="phoneNumber" sm={6}>
                <Form.Control type="number" placeholder="Your phone number (optional)" />
              </Form.Group>
            </Form.Row>

            <Form.Group className="contact__form-group" controlId="exampleForm.message">
              <Form.Control required as="textarea" rows="3" placeholder="Your message" />
              <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                Sorry, your message can't be empty.
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Row className="contact__submit-form-row">
            <Button className="contact__submit-btn" type="submit">
              Send
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
