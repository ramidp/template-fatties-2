import React, { useEffect, useState } from "react";
import styled from "styled-components";


const LoadingPage = () => {

    const logo = require('../images/logo-fatties.png')

    const [hideLoading, setHideLoading] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setHideLoading('hidding')
        }, 2000);

    },[])


    return ( 
        <LoadingPageContainer className={hideLoading}>
                <img className="logo1" src={logo} alt="" />
        </LoadingPageContainer>
     );
}
 
export default LoadingPage;

const LoadingPageContainer = styled.div`

    background-color: white;
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
    animation-duration: 1s;
    animation-delay: 1.5s;
    left: 0;


    h1 {
      color: white;
      text-align: center;
    }

    &.hidding {
      display: none;
    }

        .logo1 {
          filter: opacity(0%);
          height: 200px;
          animation-name: lightup;
          animation-duration: 1.5s;
          animation-delay: 300ms;

          @media (min-width: 2048px) {
            height: 250px;
            }

          @media (max-width: 764px) {
            height: 150px;
          }

            @keyframes lightup {
            0% {filter: opacity(0%);
            }
            50% {filter: opacity(100%);
                transform: scale(1.5);
            }
            100% {filter: opacity(0%);
                  transform: scale(1);
            }
        }


    @keyframes disolve {
        0% {filter: opacity(100%)}
        100% {filter: opacity(0%)}
    }
  }
    
`