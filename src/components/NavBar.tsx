import { useContext, useState } from 'react';
import styled from 'styled-components';
import {ContextHide} from '../context/HideContext'
import React from 'react'
import { OffCanvasTop } from './OffCanvasTop';


const MenuNav = () => {

  const {menuHidding, menuOff} = useContext<any>(ContextHide)

  return (
    <MenuNavContainer>
            <OffCanvasTop/>
            <a className="hide" href="#menu"><h3 onClick={menuHidding}>Servicios</h3></a>
            <a className="hide" onClick={menuOff} href="#promociones"><h3>Nosotros</h3></a>
            <a className="hide" onClick={menuOff} href="#contacto"><h3>Contacto</h3></a>
            <a className="hide" onClick={menuOff} href="#" target="_blank"><h3>Blog</h3></a>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    color: white;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    a {
      text-decoration: none;
      h3 {
        margin: 0;
        font-size: 20px;
        color: ${props => props.theme.fontFour};
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.fontFour};
        }
      }
    }
    
    .hide {
@media (max-width: 991px) {
      display: none;
    }
}
`

