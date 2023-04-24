import styled from "styled-components";
import Datos from "./Datos";
import React from 'react'
import NavBar from "./NavBar";



const Menu = () => {


    return ( 
            <MenuContainer>
                <Datos/>
                <NavBar/>
            </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: fixed;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 100;
    box-shadow: -2px 16px 54px -27px rgba(0, 0, 0, 0.753);
    `
    