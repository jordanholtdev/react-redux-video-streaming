import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';

const CustomModal = (props) => {
  return ReactDOM.createPortal(
    <Modal onHide={props.onDismiss} show centered animation>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.content}</p>
        </Modal.Body>

        <Modal.Footer onClick={(e) => e.stopPropagation()}>
          {props.actions}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>,
    document.querySelector('#modal')
  );
};

export default CustomModal;
