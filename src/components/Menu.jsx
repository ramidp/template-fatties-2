import styled from "styled-components";
import Datos from "./Datos";
import React, { useState, useEffect } from 'react'
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

    const [hidden, setHidden] = useState(false)

    return ( 
            <MenuContainer
            >
                <div className={color ? 'menu-white' : 'menu-transparent'}>
                {/* <Datos/> */}
                <NavBar/>
                </div>

                <h1
                onClick={() => setHidden('visible')}
                >
                  |||</h1>
                <div
                className={hidden ? 'hidden-menu visible' : 'hidden-menu hidden'}
                >
                  <p
                  onClick={() => setHidden(false)}
                  >X</p>

                  <a onClick={() => setHidden(false)} href="/">HOME</a>
                  <a onClick={() => setHidden(false)} href="#servicios">SERVICIOS</a>
                  <a onClick={() => setHidden(false)} href="/nosotros">¿QUIÉNES SOMOS?</a>
                  <a onClick={() => setHidden(false)} href="#contacto">CONTACTO</a>
                </div>
                <></>
                
            </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    left: 0;
    justify-content: flex-end;
    align-items: center;
    z-index: 10;
    
    .hidden-menu {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.secondary};
      filter: opacity(90%);
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      transition: opacity 0.5s linear;
      z-index: 100;

      p {
        cursor: pointer;
        font-size: 40px;
        z-index: 11;
      }
      
      a {
          font-size: 22px;
          text-decoration: none;
          color: white;
          &:hover {
            filter: contrast(30%)
          }
        }
      }

      .hidden {
        opacity: 0;
        z-index: -10;

      }
  
      .visible {
        opacity: 1;
      }

      h1 {
        color: white;
        width: auto;
        margin-right: 10px;
        display: none;
        cursor: pointer;
        padding: 5px;
        background-color: ${props => props.theme.secondary};

        &:hover {
          filter: contrast(50%);
        }

        @media (max-width: 764px) {
          display: block;
        }
      }
    

    .menu-transparent {
        width: 100%;
        height: 70px;
        transition: 500ms linear;
        background-color: transparent;
        z-index: 100;

        @media (max-width: 764px) {
          display: none;
        }

      }

    .menu-white {
        width: 100%;
        height: 70px;
        transition: 500ms linear;
        background: linear-gradient(70deg, orange 10% ,${props => props.theme.secondary} 48%, rgba(255, 255, 255, 1) 48.07%);
        box-shadow: 0px 0px 100px -20px black;
        z-index: 100;

        @media (max-width: 764px) {
          display: none;
        }


        @media (max-width: 1100px) {
          background: rgba(255,255,255,0.95);
        }
    }
    
    `
    