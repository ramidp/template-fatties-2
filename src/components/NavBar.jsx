import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'


const MenuNav = () => {

const [display, setDisplay] = useState(false)

const location1 = useLocation()
const isHome = location1.pathname === '/'

useEffect(() => {

  if (window.innerWidth <= 1100) {
    setDisplay(true)
  } else {
    setDisplay(false)
  }

},[display])


  return (
    <MenuNavContainer>
            {/* <OffCanvasTop/> */}
                <>
                {isHome ?
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
                }
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

    a {
      width: auto;
      text-decoration: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0 20px;
      color: ${props => props.theme.secondary}!important;

      &:hover {
          background-color: #f0f0f0;
        }
    }

`

