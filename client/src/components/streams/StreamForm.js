import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Container, Button } from 'react-bootstrap';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <Form.Text className='text-muted'>{error}</Form.Text>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...input} autoComplete='off' />
        {this.renderError(meta)}
      </Form.Group>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name='title'
            label='Enter title'
            component={this.renderInput}
          />
          <Field
            name='description'
            label='Enter description'
            component={this.renderInput}
          />
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
