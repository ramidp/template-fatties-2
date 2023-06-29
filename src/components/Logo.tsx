import styled from "styled-components";
import React from 'react'
import 'aos/dist/aos.css'

const Logo = () => {

    const logo = require('../images/Banner/banner-2.png')

    return ( 
        <LogoContainer>
                <img src={logo} alt="" />
        </LogoContainer>
     );
}
 
export default Logo;

const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -10;
    
        img {
            object-fit: none;
            object-position: 50% 50%;
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