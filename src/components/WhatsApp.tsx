import styled from "styled-components";
import React, { useEffect, useState } from 'react'


const WhatsAppBtn = () => {

    const logowhatsapp = require('../images/icons/whatsapp.png')

    let timeHour = new Date().getHours()

    let [timeValue, setTimeValue] = useState('')

    useEffect(() => {
        if (timeHour > 13 && timeHour < 19)  {
            setTimeValue('Buenas tardes') 
        } else if (timeHour >= 6 && timeHour <= 13) {
            setTimeValue('Buenos días') 
        } else {
            setTimeValue('Buenas noches') 
        }
    },[timeHour])

    const mensaje = timeValue + ', me gustaría hacer una consulta.'

    return ( 
        <Container>
            <div>
                <a href={"https://api.whatsapp.com/send?phone=5491123956360&text=" + `${mensaje}`}
                target="_blank">
                <img src={logowhatsapp} alt="" />
                </a>
            </div>
        </Container>
     );
}
 
export default WhatsAppBtn;

const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 10px 15px 0;
    bottom: 1%;
    right: 0%;
    z-index: 5;

    animation-name: bounce-in-bottom;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;

        @keyframes bounce-in-bottom {
  0% {
    -webkit-transform: translateY(500px);
            transform: translateY(500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(65px);
            transform: translateY(65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(28px);
            transform: translateY(28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

    img {
        width: 50px;

        &:hover {
            filter: contrast(80%);
        }

    @media (max-width: 1100px) {
            width: 40px;
            }

    }
    
`