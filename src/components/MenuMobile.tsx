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
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        display: flex;
        background-color: ${props => props.theme.tertiary};
        padding: 10px 0;

`