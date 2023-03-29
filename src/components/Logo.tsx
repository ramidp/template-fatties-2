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
    height: 70vh;
    width: 100%;
    position: absolute;
    background: linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(255, 255, 255, 0) 100%);

    @media (max-width: 1100px) {
        width: auto;
        align-items: flex-start;
    }
        img {
            width: 100%;
            height: 100%;
            object-fit: none;
            object-position: 50% 51%;
            mix-blend-mode: multiply;
            z-index: -1;


            @media (max-width: 1100px) {
                object-position: 50% 50%;
            }
        }
`