import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const OffCanvasExample = ({ name, ...props } : any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OffCanvasContainer>
      <Button onClick={handleShow}>
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <Link onClick={handleClose} to='/'>  <h3>Home</h3></Link>
              <Link onClick={handleClose} to='/blog'><h3>Blog</h3></Link>
              <Link onClick={handleClose} to='/faq'><h3>FAQ</h3></Link>
              <Link onClick={handleClose} to='/contacto'><h3>Contacto</h3></Link>
        </Offcanvas.Body>
      </Offcanvas>
    </OffCanvasContainer>
  );
}

const OffCanvasTop = () => {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export {OffCanvasExample, OffCanvasTop}

const OffCanvasContainer = styled.div`

  
  .btn {
    background-color: ${props => props.theme.secondary};
    border: none;
    }


  display: none;
  @media (max-width: 1100px) {
  display: inline-block; 
  }

  `