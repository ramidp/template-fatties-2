import styled from "styled-components";
import React, { useState } from 'react'
import { ReactComponent as FacebookLogo } from '../images/icons/facebook.svg'
import { ReactComponent as InstagramLogo } from '../images/icons/instagram.svg'
import { ReactComponent as LinkedInLogo } from '../images/icons/linkedin.svg'
import { ReactComponent as WhatsAppLogo } from '../images/icons/whatsapp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase/firebaseConfig";
import info from '../data/info.json'


const Footer = () => {

    const qrAFIP = require('../images/dataweb-qr.jpg')

    const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState<boolean>(false);
    const [alerta, cambiarAlerta] = useState<any>({})



    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()

    //     if (name !== "" && telephone !== "" && message !== "") {

    //         cambiarEstadoAlerta(true);
    //         cambiarAlerta({
    //             tipo: "exito",
    //             mensaje: "Su mensaje ha sido enviado"
    //         });

    //     } else {
    //         cambiarEstadoAlerta(true);
    //         cambiarAlerta({
    //             tipo: "exito",
    //             mensaje: "Favor de completar todos los campos"
    //         });

    //     }
    //     setName('')
    //     // setEmail('')
    //     setTelephone('')
    //     setMessage('')
    // }

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
                        {info.attention}
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
                                <p>{info.address}</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAt} />
                                <a
                                    target='_blank'
                                    href={"mailto:" + `${info.email}`}>
                                    <p>{info.email}</p>
                                </a>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <p> {info.tel1}</p>
                            </div>
                            <div>
                                <WhatsAppLogo
                                />
                                <p> {info.tel2}</p>
                            </div>
                        </div>
                        <div className="copyright">
                            {/* <FontAwesomeIcon icon={faRegistered} /> */}
                            <div>

                                <a
                                    onClick={() => logEvent(analytics, 'Footer | LinkedIn')}
                                    href={"https://www.linkedin.com/company/" + `${info.linkedin}`} target="_blank"><LinkedInLogo /> </a>
                                <a
                                    onClick={() => logEvent(analytics, 'Footer | Facebook')}
                                    href={"https://www.facebook.com/" + `${info.facebook}`} target="_blank" ><FacebookLogo /> </a>
                                <a
                                    onClick={() => logEvent(analytics, 'Footer | Instagram')}
                                    href={"https://www.instagram.com/" + `${info.instagram}`} target="_blank"><InstagramLogo /> </a>
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

                        <a
                            onClick={() => logEvent(analytics, 'Footer | QR AFIP')}
                            href='/' target="_blank">
                            <img src={qrAFIP} alt="" />
                        </a>

                    </div>
                </div>

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
    background-color: #696969;
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

            @media (min-width: 2048px) {
                    font-size: 26px;
                }

            span {
                font-weight: 700;
            }
            @media (max-width: 1400px) {
            font-size: 18px;
            }

            @media (max-width: 764px) {
            font-size: 14px;
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
                
                svg {
                    height: 22px;
                    @media (min-width: 2048px) {
                    font-size: 26px;
                    height: 30px;
                }
                }

                a {
                    color: white;
                    text-decoration: none;
                    transition: 300ms ease all;

                    &:hover {
                        color: gray;
                    }
                }

                p { 
                    text-align: left;
                    margin: 0;
                    font-size: 14px;

                    @media (min-width: 2048px) {
                    font-size: 20px;
                }
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
                @media (min-width: 2048px) {
                    font-size: 20px;
                }
            }

            div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 5px;

                a { 
                    text-decoration: none;                    
     
                    svg {
                        margin: 0 5px;
                        width: 40px;
                        fill: white;
                        transition: 500ms ease all;
    
                        @media (min-width: 2048px) {
                           width: 50px;
                        }
    
                        @media (min-width: 765px) {
                            &:hover {
                                transform: scale(1.05);
                                filter: contrast(50%);                       
                            }
                        }
    
                        @media (max-width: 764px) {
                            &:active {
                                transform: scale(1.05);
                                filter: contrast(50%); 
                            }
                        }
                    }
                } 
            }
            
        }
    }
    .third-part {
        padding: 20px 0;
        min-height: 15vh;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        @media (max-width: 764px) {
                padding: 15px 0;
                flex-direction: column;
                gap: 20px;
            }


        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;

            @media (max-width: 764px) {
                width: 40px;
            }
            
            img {
                width: 100%;
                height: 100%;

        }
    }
        p {
            height: 100%;
            width: calc(100% - 25% - 60px);
            margin: 0;
            color: white;
            text-align: center;
            font-family: 900;

            @media (min-width: 2048px) {
                    font-size: 20px;
                }

            @media (max-width: 1100px) {
                    font-size: 14px;
                }

            @media (max-width: 764px) {
                padding: 0 10px;
                width: calc(100% - 40px)
                }

        }
    }

`