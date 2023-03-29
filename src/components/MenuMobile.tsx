import styled from 'styled-components'
import Logo from './Logo';
import React from 'react'
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import NavBarAlt from './NavBarAlt';
import WhatsAppBtn from './WhatsApp';


const MenuMobile = (props : {handleChangeTheme: ()=> void}) => {

    const location = useLocation()
    const isMain = location.pathname === "/"


    return ( 
        <MenuMobileContainer>
                <NavBar/>
            {/* <p onClick={props.handleChangeTheme}>Change Theme</p> */}

        </MenuMobileContainer>
     );
}

export default  MenuMobile;

const MenuMobileContainer = styled.div`
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
        padding: 10px 0;

        @media (max-width: 1100px) {
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
        }

        p {
            width: auto;
            cursor: pointer;
            padding: 10px 20px;
            &:hover {
                font-weight: bold;
            }
        }
`