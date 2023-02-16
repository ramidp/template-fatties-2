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
    width: 100%;

    @media (max-width: 991px) {
        width: 50%;
        align-items: flex-start;
    }

    a {
    text-decoration: none;
        img {
            max-width: 150px;
            &:hover {
                filter: contrast(90%)
            }
            @media (max-width: 991px) {
                max-width: 100px;
            } 
        }
    }
`