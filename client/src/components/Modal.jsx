import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal as BsModal } from "react-bootstrap";

function Modal({ show, close, handleClose, children }) {
  return (
    <>
      <BsModal show={show} onHide={close}>
        <BsModal.Header closeButton>
          <BsModal.Title>Add Patient</BsModal.Title>
        </BsModal.Header>
        <BsModal.Body>{children}</BsModal.Body>
        <BsModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </BsModal.Footer>
      </BsModal>
    </>
  );
}

export default Modal;
