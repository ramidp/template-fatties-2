import styled from "styled-components";
import Datos from "./Datos";
import React, { useState } from 'react'
import NavBar from "./NavBar";

const Menu = () => {

    const [color, setColor] = useState(false)
    
    const changeColor = () => {
      if (window.scrollY >=  70) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    
    window.addEventListener('scroll', changeColor)

    return ( 
            <MenuContainer>
                <div className={color ? 'menu-white' : 'menu-transparent'}>
                {/* <Datos/> */}
                <NavBar/>
                </div>
            </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: fixed;
    z-index: 100;
    left: 0;
    
    .menu-transparent {
        width: 100%;
        height: 70px;
        transition: 500ms linear;
        background-color: transparent;
    }
    .menu-white {
        width: 100%;
        height: 70px;
        transition: 500ms linear;
        background: linear-gradient(70deg, orange 10% ,${props => props.theme.secondary} 45%, rgba(255, 255, 255, 1) 45.07%);
        box-shadow: 0px 0px 100px -20px black;
    }
    
    `
    