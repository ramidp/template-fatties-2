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

    const logo = require('../images/Banner/banner-2.png')

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
            object-position: 50% 50%;
            mix-blend-mode: multiply;
            animation: kenburns-top-left 20s ease-out both;

            @media (max-width: 1100px) {
                object-position: 50% 50%;
            }
            
            /**
            * ----------------------------------------
            * animation kenburns-top
            * ----------------------------------------
            */
            @keyframes kenburns-top-left {
                0% {
                    transform: scale(1) translate(0, 0);
                    transform-origin: 16% 16%;
                }
                100% {
                    transform: scale(1.25) translate(-20px, -15px);
                    transform-origin: top left;
                }
        }
    }
`