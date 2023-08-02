import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase/firebaseConfig';
import SearcherBar from './SearcherBar';


const MenuNav = () => {

  const logo = require('../images/fattiescolores200.png')

  const [active, setActive] = useState(true)
  
  const location = useLocation().pathname;

  // Esto se desbloquea cuando se termine, porque por cada cambio se vuelve a renderizar y entonces aplica el useEffect

  useEffect(() => {
    setTimeout(() => {
      setActive(false)
    }, 2000)

  },[])

  return (
    <MenuNavContainer
    style={{ justifyContent: location === '/' ? 'flex-end' : 'space-between'}}
    className={location === '/' ? '' : 'menu-white'}
    >

              {
              location !== '/' &&

              <a 
              onClick={() => logEvent(analytics, 'Menu | Home')}
              href="/">
                <img src={logo} alt="" />
              </a>
              }


              <div
              style={{ display: 'flex',
              gap: '20px'}}
              >

                {
                  <a 
                onClick={() => logEvent(analytics, 'Menu | Blog')}
                href="#top">
                  <h1>HOME</h1></a>}

                <a 
                onClick={() => logEvent(analytics, 'Menu | Blog')}
                href="/blog">
                  <h1>BLOG</h1></a>

                {/* <a href="/faq">
                  <h1>FAQ</h1></a> */}

                <a 
                onClick={() => logEvent(analytics, 'Menu | Nosotros')}
                href="/nosotros">
                  <h1>¿QUIÉNES SOMOS?</h1></a>

                <a
                onClick={() => logEvent(analytics, 'Menu | Contacto')}
                href="#contacto"><h1>CONTACTO</h1></a>
                <div 
                className={
                  active ? 'search-bar active' : 'search-bar'}>
                  <FontAwesomeIcon icon={faSearch} 
                  onClick={() => {setActive(!active); logEvent(analytics, 'Menu | Buscador')}}
                  />
                  { active && 
                  <SearcherBar
                  active={active}
                  />
                  }
                </div>

              </div>

                  

                
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    gap: 25px;
    padding:  0 17vw;

    @media (max-width: 1600px) {
      padding: 0 260px;
    }

    @media (max-width: 1400px) {
      padding: 0 50px;
    }

    @media (max-width: 1100px) {
      padding: 0 50px;
    }

    a {
          img {
            height: 30px;
            transition: 500ms linear;
            cursor: pointer; 
            filter: brightness(0%) invert(1);

            @media (max-width: 1100px) {
              filter: invert(0) brightness(100%);
            }

            &:hover {
              filter: brightness(0%) invert(1) contrast(50%);
            }

          }
      } 

    
    .search-bar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 50px;
      height: 30px;
      background: linear-gradient(50deg, ${props => props.theme.primaryOpact} 10%, ${props => props.theme.primary} 40%);
      border-radius: 20px;
      padding-left: 10px ;
      transition: width 1.5s ease;

      input {
        background-color: transparent;

        &:focus {
          outline: none;
        }
      }

      svg {
        font-size: 18px;
        color: white;

        @media (min-width: 2048px) {
            font-size: 22px;
          }

        &:hover {
        cursor: pointer;
        filter: contrast(70%);
      }
    }
      }

     

    .active {
      width: 9vw;

    @media (min-width: 2048px) {
            width: 200px;
          }
          
}

    a {
      width: auto;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;

      h1 {
        margin: 0;
        width: auto;
        font-size: 14px;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
        font-weight: 600;
        color: black;

      @media (min-width: 2048px)  {
          font-size: 20px;
          }

        
        @media (max-width: 764px) {
          width: max-content;
          padding: 0 10px;
        }
  
        &:hover {
          cursor: pointer;
          color: ${props => props.theme.primary};
          }
      }
    } 
    

`

