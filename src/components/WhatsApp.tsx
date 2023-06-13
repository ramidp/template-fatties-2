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
    bottom: 0%;
    right: 0%;
    z-index: 5;

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