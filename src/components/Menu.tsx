import styled from "styled-components";
import Datos from "./Datos";
import MenuHide from "./MenuHide";
import MenuMobile from "./MenuMobile";
import React from 'react'


const Menu = () => {


    return ( 
        <MenuContainer>
                    <div className="col-12 p-0">
                        <Datos/>
                        <MenuMobile/>
                        {/* <MenuHide/> */}
                    </div>
        </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 8%;
    min-width: 120px;
    height: 100vh;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 100;
    transition: 2s ease all;
    box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
    `
    