import styled from "styled-components";
import {ReactComponent as WhatsAppLogo} from '../images/icons/whatsapp.svg'


const WhatsAppBtn = () => {

    const logowhatsapp = require('../images/icons/whatsapp.png')

    return ( 
        <Container>
            <a href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, qué tal? Me gustaría hacerles una consulta."
            target="_blank">

            {/* <WhatsAppLogo/> */}

            <img src={logowhatsapp} alt="" />
            </a>
        </Container>
     );
}
 
export default WhatsAppBtn;

const Container = styled.div`
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: -2.5%;
    right: 3.5%;
    z-index: 100;

    img {
        width: 60px;
    }
    
    svg { 
        width: 60px;
        height: 60px;
        fill: rgb(18,140,126);
        box-shadow: 0px 0px 17px -2px rgba(0,0,0,0.45);
        background: white;
        
        &:hover {
            fill: rgb(27, 173, 81);
            }
        }
    
`