import styled from "styled-components";
import React, { useContext } from 'react'
import { ContextHide} from "../context/HideContext";


const Logo = () => {

    // const logo = require('../images/ikkenaireduc.png') // EJEMPLO

    const {menuOff} = useContext<any>(ContextHide)

    return ( 
        <LogoContainer className="col-3">
            <a onClick={menuOff} href="/#">
                <h1><b>Fatties</b> Mercado Pago</h1>
                {/* <img src={logo} alt="Logo" /> */}
            </a>
        </LogoContainer>
     );
}
 
export default Logo;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* img {
        max-width: 150px;
        padding: 6px 0;
    }
     */
    a {
    text-decoration: none;
        h1 {
            color: ${props => props.theme.fontFour};
            margin: 0;
            font-size: 1.8em;
        }
    }
`