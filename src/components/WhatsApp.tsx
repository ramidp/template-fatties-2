import styled from "styled-components";
import React from 'react'


const WhatsAppBtn = () => {

    const logowhatsapp = require('../images/icons/whatsapp.png')

    return ( 
        <Container>
            <div>
                <a href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, qué tal? Me gustaría hacerles una consulta."
                target="_blank">
                <img src={logowhatsapp} alt="" />
                </a>
            </div>
        </Container>
     );
}
 
export default WhatsAppBtn;

const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 5px 15px 0;
    bottom: 0;
    right: 0;
    z-index: 100;
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