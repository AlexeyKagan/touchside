import React, { Component } from 'react';

import { Form, Col, Container } from 'react-bootstrap';
import Button from '../../common/components/button/Button';

import './contact.scss';

// @TODO check valid icon input

export default class Contact extends Component {
  state = {
    validated: false,
    isFormValid: true,
    isFormSubmitted: false,
  };

  handleSubmit = (e) => {
    const form = e.currentTarget;
    // @TODO review
    e.stopPropagation();
    e.preventDefault();

    if (!form.checkValidity()) {
      this.setState({
        isFormValid: false,
        validated: true,
      });
      return;
    }

    this.setState({
      validated: true,
      isFormValid: true,
      isFormSubmitted: true,
    });
  };

  renderForm() {
    // @TODO
    const { validated, isFormValid } = this.state;

    return (
      <Form
        className="contact__form"
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
    );
  }

  render() {
    const { isFormSubmitted } = this.state;

    return (
      <div className="contact">
        <Container className="contact__container">
          <div className="contact__header">
            We would love to hear from you
          </div>

          {
            isFormSubmitted && (
              <div className="contact__submitted-message">
                <i className="fas fa-check-circle" />
                Thank you, we have received your message.
              </div>
            )
          }

          { !isFormSubmitted && this.renderForm() }

        </Container>
      </div>
    );
  }
}
