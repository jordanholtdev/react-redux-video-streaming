import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { Container } from 'react-bootstrap';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <Container>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
