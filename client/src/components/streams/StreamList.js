import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === null) {
      return;
    } else if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>
            <Button variant='primary' size='lg' block>
              Edit
            </Button>
          </Link>
          <Button variant='outline-danger' size='lg' block>
            Delete
          </Button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <ListGroup.Item
          key={stream.id}
          as='li'
          variant='dark'
          style={{ marginBottom: '8px' }}
        >
          <Container>
            <Row>
              <Col>
                <Card style={{ height: '100%', padding: '8px' }}>
                  <Card.Title>{stream.title}</Card.Title>
                  <Card.Text>{stream.description}</Card.Text>
                </Card>
              </Col>
              <Col md='auto'>
                <div>{this.renderAdmin(stream)}</div>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new'>
            <Button variant='success' size='lg'>
              Create new Stream
            </Button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <Container>
        <h2>Streams</h2>
        <ListGroup as='ul'>{this.renderList()}</ListGroup>
        {this.renderCreate()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
