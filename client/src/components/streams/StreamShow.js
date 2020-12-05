import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { Container } from 'react-bootstrap';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    const { title, description } = this.props.stream;

    return (
      <Container>
        <h3>{title}</h3>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
