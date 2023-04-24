import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MenuNav = () => {

const [display, setDisplay] = useState(false)

const location1 = useLocation()
const isHome = location1.pathname === '/'

const fatties = require('../images/logo-fatties.png')

  return (
    <MenuNavContainer>
            {/* <OffCanvasTop/> */}
                <>
                {/* {isHome ?
                <Link
                to="top"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                >Home

                </Link>
                  :
                <a href="/">Home</a>
                } */}
                <a 
                className="logo"
                href="/">
                  <img src={fatties} alt="" />
                </a>
                </>
                <a href="/blog">Blog</a>
                <a href="/faq">FAQ</a>
                <a href="/nosotros">Nosotros</a>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
    background-color: white;

    @media (max-width: 1100px) {
      padding: 0;
      justify-content: center;
    }

    .logo {
      padding: 0;
      transition: ease 0.5s all;

      &:hover{
        background: inherit!important;
        filter: contrast(70%);
      }
    }

    a {
      transition: ease 0.5s all;
      width: auto;
      text-decoration: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      padding: 0 20px;
      color: ${props => props.theme.secondary}!important;

      &:hover {
          background-color: #e0e0e0;
        }

        img {
          height: 60px;
        }
    }

`

