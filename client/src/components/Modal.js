import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Modal>Testing</Modal>,
    document.querySelector('#modal')
  );
};

export default Modal;
