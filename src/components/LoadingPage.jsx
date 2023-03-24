import { useEffect, useState } from "react";
import styled from "styled-components";

const LoadingPage = () => {

    const logo = require('../images/logo-fatties.png')

    const [hideLoading, setHideLoading] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setHideLoading('hidding')
        }, 2250);

    })


    return ( 
        <LoadingPageContainer className={hideLoading}>
              {/* <div className="lds-facebook"><div></div><div></div><div></div></div> */}
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
    padding-top: 200px;
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
          height: 300px;
          animation-name: lightup;
          animation-duration: 2s;

            @keyframes lightup {
            0% {filter: opacity(0%)}
            50% {filter: opacity(100%)}
            100% {filter: opacity(0%)}
        }


    @keyframes disolve {
        0% {filter: opacity(100%)}
        100% {filter: opacity(0%)}
    }
  }

  .lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: gray;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
}
    
`