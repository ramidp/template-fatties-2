import styled from "styled-components";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faKey, faGears} from '@fortawesome/free-solid-svg-icons';
import '../images/fondo1.jpg'


const BrandMain = () => {

    const logo = require('../images/logo-fatties.png')
    const logoMp = require('../images/mplogo.png')
    const logoCalim = require('../images/calim-logo.png')

    return (
        <BrandMainContainer className="p-0">
                <div className="absolute">
                    <div className="brand-logo">
                        <div className="d-flex flex-column justify-content-center">
                            <h1>Soluciones Digitales</h1>
                            <p className="m-0">"Cumplimos las exigencias en seguridad, claridad y confianza en la gestión de cuentas."
                            <br/>
                            Somos Consultores Certificados por Mercado Pago.
                            <br/>
                            Contribuimos en garantizar un servicio de postventa completo.
                            </p>
                        </div>
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <div>
                        <a className="more" href="#contacto">Saber Más...</a>
                    </div>
                    <div className="features-box row">
                        <div className="features col-3">
                            <div className="logos-div">
                                <img className="mp" src={logoMp} alt="" />
                            </div>
                            <h1>Representante Oficial</h1>
                            <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                        </div>
                        <div className="features col-3">
                            <div className="logos-div">
                                <img className="calim" src={logoCalim} alt="" />
                            </div>
                            <h1>Puesta a Punto</h1>
                            <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                        </div>
                        <div className="features col-3">
                            <div className="logos-div">
                                <FontAwesomeIcon icon={faGears} />
                            </div>
                            <h1>Servicio Extra Fatties #1</h1>
                            <p>Servicio Nuevo? Que se puede agregar aca? Hace faltan más servicios? (Se podria agregar un 4to tmb)</p>
                        </div>
                        <div className="features col-3">
                            <div className="logos-div">
                                <FontAwesomeIcon icon={faKey} />
                            </div>
                            <h1>Servicio Extra Fatties #2</h1>
                            <p>4to Servicio?</p>
                        </div>
                    </div>
                 </div>
        </BrandMainContainer>
     );
}
 
export default BrandMain;


const BrandMainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        
    .absolute {
        background: white;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        z-index: 10;
            p {
                font-size: 1.5em;
                
            }

        @media (max-width: 991px) {
            font-size: 1.5em;
        }
        .brand-logo {
            padding: 0 100px;
            display: flex;

            h1 {
                font-size: 35px;
            }
            p {
                font-size: 22px;
            }

            h1, p {
                color: white;
                text-shadow: black 1px 1px 7px;          
             }
        }
        .more {
            color: white;
            border-radius: 10px ;
            text-decoration: none;
            background-color: ${props => props.theme.secondary};
            padding: 10px 20px;
            &:hover {
                filter: contrast(70%)
            }
        }

    }
    .logo {
        height: 300px;
        margin-left: 10px;
    }
    
    .features-box {
        padding-top: 50px;
        width: 100%;
        height: 45vh;
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        
        .features {
            height: 100%;
            width: 18%;
            padding: 15px;
            margin: 0 15px;
            background-color: white;
            border-radius: 20px;
            gap: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            color: black;
            box-shadow: 0px 15px 70px -35px rgba(0, 0, 0, 0.753);
            &:hover {
                cursor: pointer;
                background-color: rgba(239,73,49, 0.2);
            }
            
            .logos-div {
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                filter: opacity(70%);

                .mp {
                    height: 80px;
                }
                .calim {
                    height: 50px;
                }
            }

            svg {
                font-size: 50px;
                color: ${props => props.theme.secondary};
            }
            p {
                text-align: center;
                font-size: 14px;
                margin: 0;
            }
            h1 {
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                margin: 0;
            }
        }
    }

`