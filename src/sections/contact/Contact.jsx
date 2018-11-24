import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ContactForm from './contact-form/ContactForm';

import './contact.scss';

// @TODO check valid icon input

export default class Contact extends Component {
  state = {
    isFormValid: true,
    isFormSubmitted: false,
  };

  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      this.setState({ isFormValid: false });
      return;
    }

    this.setState({
      isFormValid: true,
      isFormSubmitted: true,
    });
  };

  renderForm() {
    const { isFormValid } = this.state;

    return (
      <ContactForm 
        isFormValid={isFormValid}
        onSubmit={this.handleSubmit}
      />
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
