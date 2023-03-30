import styled from "styled-components";
import React, { useContext, useEffect } from 'react'
import { ContextHide} from "../context/HideContext";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Logo = () => {

    const animation = 'fade-in'
    
    useEffect (() => {
        Aos.init({
            duration: 1500,
            once: true,
        });
    },[])

    const logo = require('../images/logo-fatties.png')

    return ( 
        <LogoContainer 
        className="col-3">
                <img src={logo} alt="" />
        </LogoContainer>
     );
}
 
export default Logo;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -10;
    
        img {
            width: 100% ;
            height: 100%;
            object-fit: none;
            object-position: 50% 51%;
            mix-blend-mode: multiply;

            @media (max-width: 1100px) {
                object-position: 50% 50%;
            }
        }
`