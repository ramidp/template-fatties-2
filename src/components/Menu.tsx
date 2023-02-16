import styled from "styled-components";
import Datos from "./Datos";
import MenuHide from "./MenuHide";
import MenuMobile from "./MenuMobile";
import React from 'react'


const Menu = () => {


    return ( 
        <MenuContainer>
                        <Datos/>
                        <MenuMobile/>
                        {/* <MenuHide/> */}
        </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    min-width: 150px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 100;
    transition: 2s ease all;
    box-shadow: -2px 16px 54px -27px rgba(0, 0, 0, 0.753);

        @media (max-width: 991px) {
            flex-direction: row;
            width: 100%;
            height: 100px;
        }
    `
    