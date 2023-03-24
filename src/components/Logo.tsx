import styled from "styled-components";
import React, { useContext } from 'react'
import { ContextHide} from "../context/HideContext";


const Logo = () => {

    const logo = require('../images/logo-fatties.png')

    const {menuOff} = useContext<any>(ContextHide)

    return ( 
        <LogoContainer className="col-3">
            <a onClick={menuOff} href="/">
                <img src={logo} alt="" />
            </a>
        </LogoContainer>
     );
}
 
export default Logo;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;

    @media (max-width: 1100px) {
        width: auto;
        align-items: flex-start;
    }

    a {
    text-decoration: none;
        img {
            max-height: 10vh;
            &:hover {
                filter: contrast(130%);
            }
            @media (max-width: 1100px) {
                max-width: 70px;
            } 
        }
    }
`