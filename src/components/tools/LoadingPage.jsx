import React, { useEffect, useState } from "react";
import styled from "styled-components";


const LoadingPage = () => {

    const logo = require('../../images/logo-fatties.png')

    const [hideLoading, setHideLoading] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setHideLoading('hidding')
        }, 1400);

    },[])


    return ( 
        <LoadingPageContainer className={hideLoading}>
                  <div className="lds-dual-ring"></div>
        </LoadingPageContainer>
     );
}
 
export default LoadingPage;

const LoadingPageContainer = styled.div`

    background-color: ${prop => prop.theme.secondary};
    display: flex;
    align-items: center;
    position: fixed;
    flex-direction: column;
    margin: 0;
    width: 100%;
    padding-top: 30vh;
    height: 100%;
    z-index: 1000;
    animation-name: disolve;
    animation-duration: 500ms;
    animation-delay: 1s;
    left: 0;

    @keyframes disolve {
        0% {filter: opacity(100%)}
        100% {filter: opacity(0%)}
    }

    h1 {
      color: white;
      text-align: center;
    }

    &.hidding {
      display: none;
    }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 120px;
    height: 120px;
    margin: 8px;
    border-radius: 50%;
    border: 10px solid white;
    border-color:  white transparent white transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    
    @media (max-width: 1100px) {
      width: 100px;
      height: 100px;
      border: 5px solid white;
      border-color:  white transparent white transparent;
    }
    @media (max-width: 764px) {
      width: 50px;
      height: 50px;
      border: 5px solid white;
      border-color:  white transparent white transparent;
    }
    
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

    
`