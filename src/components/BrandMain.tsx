import styled from "styled-components";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faKey, faGears} from '@fortawesome/free-solid-svg-icons';
import '../images/fondo1.jpg'
import Fondo from "./Wallpaper";


const BrandMain = () => {

// const wallpaper = require('../images/fondo1.jpg')
const mplogo = require('../images/mplogo.png')

    return ( 
        <BrandMainContainer className="p-0">
                {/* <img className="wallpaper" src={wallpaper} alt="" /> */}
                <Fondo/>
                <div className="absolute">
                    <div className="brand-logo">
                        <div>
                            <h1>Representación Oficial</h1>
                            <p className="m-0">Cumplimos las exigencias en seguridad, claridad y confianza en la gestión de cuentas. 
                                <br />
                                Somos Consultores Certificados por Mercado Pago.
                                <br />
                                Contribuimos en garantizar un servicio de postventa completo.             
                            </p>
                        </div>
                        <img className="logo" src={mplogo} alt="" />
                    </div>
                    <div className="features-box row">
                        <div className="features col-3">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h1>Representante Oficial</h1>
                            <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                        </div>
                        <div className="features col-3">
                            <FontAwesomeIcon icon={faKey} />
                            <h1>Puesta a Punto</h1>
                            <p>Cubrimos toda la gestión en comercios, desde la necesidad de conocer cómo funciona y por qué se necesitan los nuevos procesadores de pago, hasta la integración en los sistemas que requieran nuestros clientes.</p>
                        </div>
                        <div className="features col-3">
                            <FontAwesomeIcon icon={faGears} />
                            <h1>Servicio Tecnico e Impositivo</h1>
                            <p>Recambios de equipos, envíos de insumos, asistentes técnicos y contables. Un equipo dispuesto a estar siempre acompañando tu negocio.</p>
                        </div>
                    </div>
                 </div>
        </BrandMainContainer>
     );
}
 
export default BrandMain;


const BrandMainContainer = styled.div`
    background: inherit;
    height: 100vh;
        
    .absolute {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.fontPrim};
        z-index: 10;
            p {
                font-size: 1.5em;
            }

        @media (max-width: 991px) {
            font-size: 1.5em;
        }
        .brand-logo {
            display: flex;
        }

    }
    .logo {
        width: 300px;
    }
    .features-box {
        padding-top: 50px;
        width: 90%;
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    
        .features {
            height: 100%;
            padding: 15px;
            margin: 0 15px;
            background: ${props => props.theme.primary};
            border-radius: 20px;
            gap: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            color: ${props => props.theme.fontPrim};
            svg {
                font-size: 50px;
                color : ${props => props.theme.tertiary};
            }
            p {
                text-align: center;
                font-size: 1em;
            }
            h1 {
                text-align: center;
                font-size: 20px;
            }
        }
    }

`