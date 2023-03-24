import styled from "styled-components";
import { ContextHide } from "../context/HideContext";
import { useContext } from "react";
import React from 'react'



const MenuHide = () => {

    const {hide} = useContext<any>(ContextHide)


    return ( 
        <MenuHideContainer>
            {hide?
            <div className="submenu">
                <a href="#menu"><h3>Servicio 1</h3></a>
                <a href="#menu"><h3>Servicio 2</h3></a>
            </div>
            :
            <></>
                }
        </MenuHideContainer>
     );
}
 
export default MenuHide;

const MenuHideContainer = styled.div`
    .submenu {
        padding-right: 100px;
        display: flex;
        justify-content: flex-end;
        background-color: ${props => props.theme.primary};
        a {
            text-decoration: none;
            padding: 10px 15px;
            h3 {
                margin: 0;
                font-size: 15px;
                color: ${props => props.theme.fontPrim};
                &:hover {
                    color: ${props => props.theme.fontTert};
                }
        }
    }
@media (max-width: 1100px) {
    display: none;
}
}
`