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

    const {menuOff} = useContext<any>(ContextHide)

    return ( 
        <LogoContainer 
        data-aos={animation}
        data-aos-delay="2000"
        className="col-3">
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
    height: 100%;
    position: fixed;
    z-index: -1;

    @media (max-width: 1100px) {
        width: auto;
        align-items: flex-start;
    }

    a {
    text-decoration: none;
        img {
            width: 100%;
            filter: opacity(20%);
            object-fit: none;
            object-position: 50% 48%;
            mix-blend-mode: multiply;
        }
    }
`