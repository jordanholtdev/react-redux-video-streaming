import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import CustomModal from '../Modal';
import { Button } from 'react-bootstrap';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <>
        <Link to='/'>
          <Button variant='secondary'>Close</Button>
        </Link>
        <Button onClick={() => this.props.deleteStream(id)} variant='danger'>
          Delete
        </Button>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete stream called: ${this.props.stream.title}`;
  }

  render() {
    return (
      <CustomModal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          return history.push('/');
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
