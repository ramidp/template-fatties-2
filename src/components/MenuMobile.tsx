import styled from 'styled-components'
import Logo from './Logo';
import React from 'react'
import NavBar from './NavBar';


const MenuMobile = () => {
    return ( 
        <MenuMobileContainer>
            <Logo/>
            <NavBar/>
        </MenuMobileContainer>
     );
}

export default  MenuMobile;

const MenuMobileContainer = styled.div`
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
        padding: 10px 0;

        @media (max-width: 991px) {
            flex-direction: row;
            width: 90%;
        }

`