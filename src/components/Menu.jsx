import styled from "styled-components";
import React, { useState } from 'react'
import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTabletButton } from '@fortawesome/free-solid-svg-icons';
import { analytics } from "../firebase/firebaseConfig";
import { logEvent } from "firebase/analytics";


const Menu = () => {

    const [color, setColor] = useState(false)

      const windowHeight = window.innerHeight
    
    const changeColor = () => {
      if (window.scrollY >=  windowHeight * 0.1) {
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
                <div 
                className={color ? 'menu-white' : 'menu-transparent'}>
                <NavBar/>
                </div>

                  <FontAwesomeIcon
                  className="mobile-btn"
                  onClick={() => {setHidden(true); logEvent(analytics, 'Opening Mobile Menu')}}
                  icon={faTabletButton}/>
                <div
                className={hidden ? 'hidden-menu visible' : 'hidden-menu hidden'}
                >
                  <p
                  onClick={() => setHidden(false)}
                  >X</p>

                  <div>
                  <a onClick={() => {setHidden(false); logEvent(analytics, 'Mobile Menu | Home')}} href="/">HOME</a>
                  <a onClick={() => {setHidden(false); logEvent(analytics, 'Mobile Menu | Blog')}} href="/blog">BLOG</a>
                  {/* <a onClick={() => setHidden(false)} href="/faq">FAQ</a> */}
                  <a onClick={() => {setHidden(false); logEvent(analytics, 'Mobile Menu | Nosotros')}} href="/nosotros">¿QUIÉNES SOMOS?</a>
                  <a onClick={() => {setHidden(false); logEvent(analytics, 'Mobile Menu | Contacto')}} href="#contacto">CONTACTO</a>
                  
                  </div>
                </div>
                
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
      height: 100vh;
      background-color: ${props => props.theme.secondary};
      top: 0;
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: center;
      padding: 5px 20px;
      transition: 500ms ease-in-out;
      z-index: 10;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 50px 0 0 20px;
      }

      p {
        cursor: pointer;
        font-size: 30px;
        color: white;
        font-weight: bold;

        &:active {
          filter: contrast(30%);
        }
      }
      
      a {
          font-size: 20px;
          text-decoration: none;
          color: white;
          
          &:active { 
            filter: contrast(30%)
          }
        }
      }

      .hidden {
        visibility: hidden;
        opacity: 0!important;
      }
  
      .visible {
        visibility: visible;
        opacity: 1!important
      }

      .mobile-btn {
        color: white;
        font-size: 30px;
        width: auto;
        margin-right: 10px;
        display: none;
        cursor: pointer;
        padding: 10px;
        background-color: ${props => props.theme.secondary};
        border-radius: 10px;
        border: 1px solid white;

        &:active {
          filter: contrast(50%);
        }

        @media (max-width: 764px) {
          display: block;
        }
      }
    
   

    .menu-transparent {
        width: 100%;
        height: 70px;
        transition: 500ms ease-out;
        background-color: transparent;
        z-index: 10;

        @media (max-width: 764px) {
          display: none;
        }

      }

    .menu-white {
        width: 100%;
        height: 70px;
        transition: 300ms ease-in;
        background: linear-gradient(105deg, ${prop => prop.theme.tertiary}  1% ,${props => props.theme.secondary} 48.5%, rgba(255, 255, 255, 1) 48.59%);
        box-shadow: 0px 0px 5px 5px rgba(124, 124, 124, 0.5);
        z-index: 10;

        a {
          
          img {
            height: 30px;
            transition: 500ms ease-in-out;
            cursor: pointer; 
            
          }
        }

        @media (max-width: 1400px) {
          background: linear-gradient(105deg, ${prop => prop.theme.tertiary}  1% ,${props => props.theme.secondary} 43.5%, rgba(255, 255, 255, 1) 43.59%);
        }

        @media (max-width: 1100px) {
          background: rgba(255,255,255,1);
        }
        @media (max-width: 764px) {
          display: none;
        }
        
    }
    
    `
    