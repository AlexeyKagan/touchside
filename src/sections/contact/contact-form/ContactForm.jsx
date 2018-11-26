import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';

import Button from '../../../common/components/button/Button';

function ContactForm(props) {
  const { isFormValid, onSubmit } = props;

  return (
    <Form
      className="contact__form"
      noValidate
      onSubmit={ onSubmit }
      validated={ !isFormValid }
    >
      {
        !isFormValid && (
          <div className="contact__invalid-message">
            <i className="fas fa-exclamation-circle"/>
            Please complete the form and try again.
          </div>
        )
      }

      <div className="contact__fields-wrapper">
        <Form.Row>
          <Form.Group as={ Col } controlId="firstName" sm={ 6 }>
            <div className="contact__field-input-wrapper">
              <Form.Control
                required
                type="text"
                placeholder="First name"
                className="contact__field-input"
              />
              <Form.Control.Feedback className="contact__valid-field">
                <i className="fas fa-check"/>
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                We need your first name.
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group as={ Col } controlId="lastName" sm={ 6 }>
            <div className="contact__field-input-wrapper">
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                className="contact__field-input"
              />
              <Form.Control.Feedback className="contact__valid-field">
                <i className="fas fa-check"/>
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                We need your last name.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={ Col } controlId="email" sm={ 6 }>
            <div className="contact__field-input-wrapper">
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                className="contact__field-input"
              />
              <Form.Control.Feedback className="contact__valid-field">
                <i className="fas fa-check"/>
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" className="contact__invalid-field">
                Please use a valid e-mail address.
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group as={ Col } controlId="phoneNumber" sm={ 6 }>
            <Form.Control type="number" placeholder="Your phone number (optional)" className="contact__field-input"/>
          </Form.Group>
        </Form.Row>

        <Form.Group className="contact__form-group" controlId="exampleForm.message">
          <div className="contact__field-input-wrapper">
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Your message"
              className="contact__field-input"
            />
            <Form.Control.Feedback className="contact__valid-field">
              <i className="fas fa-check"/>
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid" className="contact__invalid-field">
              Sorry, your message can't be empty.
            </Form.Control.Feedback>
          </div>
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

ContactForm.propTypes = {
  isFormValid: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default ContactForm;
