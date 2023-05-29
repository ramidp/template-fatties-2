import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


const MenuNav = () => {

  const logo = require('../images/fattiescolores200.png')

  const [active, setActive] = useState(true)

  const location = useLocation().pathname;

  useEffect(() => {
    setTimeout(() => {
      setActive(false)
    }, 2000)

  },[])


  return (
    <MenuNavContainer
    className={location === '/' ? '' : 'menu-white'}
    >

              {
              location !== '/' &&
              <a href="/">
                <img src={logo} alt="" />
              </a>
              }

                <a href="/blog">
                  <h1>BLOG</h1></a>

                {/* <a href="/faq">
                  <h1>FAQ</h1></a> */}

                <a href="/nosotros">
                  <h1>¿QUIÉNES SOMOS?</h1></a>

                <a href="#contacto"><h1>CONTACTO</h1></a>
                <div 
                onClick={() => setActive(!active)}
                className={
                  active ? 'search-bar active' : 'search-bar'}>
                  <FontAwesomeIcon icon={faSearch} />
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
    justify-content: flex-end;
    align-items: center;
    padding-right: 350px;
    z-index: 100;
    gap: 30px;

    @media (max-width: 1400px) {
      padding-right: 220px;
    }

    @media (max-width: 1100px) {
      padding-right: 50px;
    }

    a {
      img {
        transition: 500ms ease-in-out;
      }
    }
    
    .search-bar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 50px;
      height: 30px;
      background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%);
      border-radius: 20px;
      padding-left: 10px ;
      transition: width 1.5s ease;

      svg {
        font-size: 18px;
        color: white;
      }

      &:hover {
        cursor: pointer;
        filter: contrast(120%);
      }
    }

    .active {
      width: 150px!important;
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
        font-size: 14px!important;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
        font-weight: 400;
        color: black;
        
        @media (max-width: 764px) {
          width: max-content;
          padding: 0 10px;
        }
  
        &:hover {
          cursor: pointer;
          color: ${props => props.theme.primary};
          }
  
          img {
            height: 60px;
          }
      }
    } 
    

`

