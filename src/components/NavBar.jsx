import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const MenuNav = () => {

  const [active, setActive] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setActive(false)
    }, 2000)

  },[])


  return (
    <MenuNavContainer>
                <a href="#servicios">SERVICIOS</a>
                <a href="/nosotros">¿QUIÉNES SOMOS?</a>
                <a href="#contacto">CONTACTO</a>
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
    padding-right: 300px;
    z-index: 100;

    @media (max-width: 1100px) {
      padding: 0;
      justify-content: center;
    }

    @media (max-width: 764px) {
      display: none;
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
      width: 150px;
      text-decoration: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      font-weight: 400;
      color: black!important;
      
      @media (max-width: 764px) {
        width: max-content;
        padding: 0 10px;
      }

      &:hover {
        cursor: pointer;
        font-weight: 700;
        
        @media (max-width: 1100px) {
            background-color: #dfdfdf;
          }
        }

        img {
          height: 60px;
        }
    }

`

