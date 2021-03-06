import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import { Container } from 'react-bootstrap';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <Container fluid className='px-0'>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </Container>
  );
};

export default App;
