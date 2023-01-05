import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const SignModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalContainer>
      <Button variant="primary" onClick={handleShow}>
        r4m4x h4ck3r
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trollea3</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're being trolleados</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  );
}

export default SignModal

const ModalContainer = styled.div`
    .btn {
        color: ${props => props.theme.fontPrim};
        background-color: inherit;
        border: none;
        border-radius: 100%;
        &:hover {
            color: ${props => props.theme.fontSecond};
 
        }
    }
`