import styled from "styled-components";
import React, { useState } from 'react'
import {ReactComponent as FacebookLogo} from '../images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg'
import {ReactComponent as LinkedInLogo} from '../images/icons/linkedin.svg'
import {ReactComponent as WhatsAppLogo} from '../images/icons/whatsapp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import Alerta from '../components/Alerta'

const Footer = () => {

    const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState<boolean>(false);
    const [alerta, cambiarAlerta] = useState<any>({})



    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && telephone !== "" && message !== "") {

            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "exito",
             mensaje: "Su mensaje ha sido enviado"});
    
        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "exito",
             mensaje: "Favor de completar todos los campos"});

        }
        setName('')
        // setEmail('')
        setTelephone('')
        setMessage('')
    }

    return ( 
        <>
        <span id="contacto"></span>
            <FooterContainer>
                        <div className="first-part">
                            <p>
                                <span>
                                Atención comercial: 
                                </span>
                                <br />
                                Lunes a viernes de 9 a 18hs.
                                <br />
                                <br />
                                Somos una empresa de servicios y consultoría, que brinda soluciones digitales.  
                                <br />
                                Su información es totalmente confidencial.
                                <br />
                                <br />
                                <span>
                                Todos los derechos reservados.
                                </span>
                               </p>
                        </div>
                        <div>

                        <div className="second-part">
                            <div className="brand-info">
                                <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>Igualdad 1449, 3° A, Haedo, Buenos Aires</p>
                                </div>
                                <div>
                                <FontAwesomeIcon icon={faAt} />
                                    <p>mercadopago@fatties.com.ar</p>
                                </div>
                                <div>
                                <FontAwesomeIcon icon={faPhone} />
                                    <p> +54 (011) 5-263-8549 </p>
                                </div>
                                <div>
                                <WhatsAppLogo
                                style={{height: '25px'}}
                                />
                                    <p> +54 (011) 2395-6360 </p>
                                </div>
                            </div>
                            <div className="copyright">
                                {/* <FontAwesomeIcon icon={faRegistered} /> */}
                                <div>
                                    <a href="https://www.linkedin.com/company/fatties/" target="_blank"><LinkedInLogo/> </a>
                                    <a href="https://www.facebook.com/mp.vendedores/" target="_blank" ><FacebookLogo/> </a>
                                    <a href="https://www.instagram.com/fatties.ac" target="_blank"><InstagramLogo/> </a>
                                </div>
                                <p>©  2023 Fatties</p> 
                            </div>
                        </div>
                        <div className="third-part">
                            <p>
                                <strong>
                                El uso del sitio web fatties.com.ar está sujeto a los Términos de uso de Fatties y la Política de privacidad
                                </strong>
                                </p>
                        </div>
                        </div>

                    <Alerta
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje}
                    estadoAlerta={estadoAlerta}
                    cambiarEstadoAlerta={cambiarEstadoAlerta}/>

            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    display: flex;
    min-height: 55vh;
    height: auto;
    flex-direction: column;
    background-color: white;
    justify-content: space-between;


    
    .first-part {
        min-height: 20vh;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(270deg, ${props => props.theme.tertiary} 10% ,${props => props.theme.secondary} 45%);
        padding: 20px;
        width: 100%;
       
        p {
            text-align: center;
            color: white;
            font-size: 20px;

            span {
                font-weight: 700;
            }
            @media (max-width: 1400px) {
            font-size: 18px;
            }

            @media (max-width: 764px) {
            font-size: 16px;
            }

            

        }
    }
    .second-part {
        height: auto;
        min-height: 25vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #696969;
        padding: 0 100px;

        @media (max-width: 1400px) {
            padding: 0 10px;
        }

        @media (max-width: 1100px) {
            padding: 0px;
            flex-direction: column;
        }


        .brand-info {
            color: white;
            fill: white;
            display: grid;
            gap: 10px;
            height: 100%;
            width: 70%;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            padding: 50px 30px 20px;

            @media (max-width: 1100px) {
            padding: 20px;
            width: 100%;
            }

            @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }


            div {
                gap: 20px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 10px 0;


                @media (max-width: 800px) {
                justify-content: center;
                align-items: center;
                }

                p { 
                    text-align: center;
                    margin: 0;
                    font-size: 14px;
                }
            }

        }

        .copyright {
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 30px;
            height: 100%;
            width: 30%;
            padding: 50px 30px 20px 30px;

            @media (max-width: 1100px) {
            width: 100%;
            padding: 20px;
            }


            p {
                font-size: 14px;
                text-align: center;
                margin: 0;
            }
            a { 
                text-decoration: none;
                svg {
                    margin: 0 5px;
                    width: 40px;
                    fill: white;
                    transition: 300ms ease all;

                    &:hover {
                        transform: scale(1.05);
                        filter: contrast(50%);
                    }
                }
            } 
            
        }
    }
    .third-part {
        background-color: #696969;
        padding-bottom: 30px;
        height: auto;

        p {
            margin: 0;
            color: white;
            text-align: center;
            font-family: 900;

            @media (max-width: 1100px) {
                    padding: 0 50px;
                    font-size: 14px;
                }

        }
    }

`