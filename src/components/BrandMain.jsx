import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from 'react-scroll'
import Service from "./products/Service";
import { faPhoneVolume, faHandshake } from '@fortawesome/free-solid-svg-icons';


const BrandMain = () => {

    const logo = require('../images/fatties200white.png')
    const logoMp = require('../images/mplogo.png')
    const logoCalim = require('../images/calim-logo.png')
    const wallimg = require('../images/celular-v2.png')

    const animation = 'zoom-in'
    const animation3 = 'fade-out'

    useEffect (() => {
        Aos.init({
            duration: 1500,
            once: true,
        });
    },[])

    const servicesArray = [
        {
            id: 1,
            title: 'Representante Oficial',
            text: 'Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio',
            text2: 'Ejemplo de texto que explique el Servicio',
            logo: logoMp,
            anchorclass: ' mp-div',
            logoclass: 'mp',
        },
        {
            id: 2,
            title: 'Puesta a Punto',
            text: 'Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app',
            text2: 'Ejemplo de texto que explique el Servicio',
            logo: logoCalim,
            anchorclass: ' calim-div',
            logoclass: 'calim',
        },
        {
            id: 3,
            title: 'Atención telefónica',
            text: 'Nuestro canal de atención telefónica es una herramienta conveniente y eficiente para que nuestros clientes se comuniquen con nosotros.Contamos con un equipo de profesionales altamente capacitados que están disponibles para brindar ayuda y solucionar cualquier consulta o problema que puedas tener.',
            text2: 'Ejemplo de texto que explique el Servicio',
            logo: faPhoneVolume,
            anchorclass: ' f2',
            logoclass: '',
        },
        {
            id: 4,
            title: 'Conectar',
            text: 'En Fatties lo que ofrecemos como uno de nuestros servicios es conectar clientes con clientes para todo tipo de servicios. Nos interesa hacer de nexo entre gente que busca un servicio y gente que ofrece dicho servicio',
            text2: 'Ejemplo de texto que explique el Servicio',
            logo: faHandshake,
            anchorclass: ' f1',
            logoclass: '',
        }
    ]
    
    return (
        <BrandMainContainer id="top" className="p-0">
            {/* <Logo/> */}
            <div className="absolute">
                <div className="brand-logo"
                            data-aos={animation3}
                            data-aos-delay='2500'
                >
                        <div className="brand-title">
                            <div className="brand-title-1">
                                    <img className="fatties-logo" src={logo} alt="" />
                                 <h1 
                                >
                                Soluciones
                                <br /> 
                                <span>
                                digitales
                                </span>
                                </h1>
                            <p className="m-0 pt-0">
                                Somos consultores certificados por 
                                <br />
                                Mercado Pago.
                                <br />
                                Contribuimos en garantizar un servicio de postventa completo.
                            </p>

                            </div>

                            <img className="cellphone-logo" src={wallimg} alt="" />

                        </div>
                        <div className="btns-box">

                            <a href="#servicios"
                            className="contactbtn"
                            >
                                SERVICIOS
                            </a>
                            <a 
                            className="contactbtn"
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            href="#marcas"
                            >
                                CLIENTES
                            </a>
                            <a href="#referencias"
                            className="contactbtn"
                            >
                                REFERENCIAS
                            </a>
                            
                        </div>
                </div>
                <div  
                className="features-box">
                    
                <span id="servicios"></span>

                            <h1
                            className='features-title'
                            >SERVICIOS</h1>

                            {
                                servicesArray.map((service, index) => {
                                    return (
                                        <Service
                                        key={service.id}
                                        service={service}
                                        />

                                    )
                                })
                            }
                </div>
            </div>
                        
        </BrandMainContainer>
    );
}

export default BrandMain;


const BrandMainContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;

    .modal-service-container {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            height: 100vh;
            background-color: #a3a3a3a9;
            z-index: 100;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            animation-name: opening;
            animation-duration: 500ms;

            @keyframes opening {
                0% { filter: opacity(0%)}
                100% { filter: opacity(100%)}
            }


            h2 {
                color: white;
                cursor: pointer;
                font-weight: bold;
                text-shadow: 0px 0px 10px black;
                transition: 400ms ease all;
                background-color: gray;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                height: 50px;
                width: 50px;

                &:hover {
                    transform: scale(1.15);
                    filter: contrast(50%);
                }
            }

            .modal-service-box {
                    border-radius: 20px;
                    box-shadow: 0px 0px 5px 5px rgba(58, 58, 58, 0.281);
                    display: flex;
                    background-color: white;
                    width: 65%;
                    height: 70%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;

                    h1, h3 {
                        text-align: center;
                    }
            }
        }

        .closed {
        animation-name: closing;
        animation-duration: 500ms;

        @keyframes closing {
            0% { filter: opacity(100%)}
            100% { filter: opacity(0%)}
        }

    }
        
    .absolute {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
      
        .brand-logo {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            min-height: 100vh;
            height: auto;
            gap: 7vh;
            display: flex;
            // Buena solucion para que la linea diagonal no tenga pixeles, es sumarle .03% al que divide.  
            background: linear-gradient(70deg, orange 10% ,${props => props.theme.secondary} 40%, rgba(255, 255, 255, 1) 40.04%);
            animation: bgmovement 4s ease forwards;
            background-size: 200vw 200vw;


            @media (max-width: 1100px) {
                background: linear-gradient(70deg, orange 10% ,${props => props.theme.secondary} 68%);
                gap: 10vh;
            }

            @media (max-width: 764px) {
                gap: 5vh;
                padding: 0 0 50px 0;
            }

            @media (max-height: 720px) {
                gap: 0vh;
                padding: 0 0 50px 0;
            }


            @keyframes bgmovement {
                0% {
                    background-position: 100% 100%;
                }
                100% {
                    background-position: 30% 50%;
                    }
            }
            
            .brand-title {
                width: 100%;
                padding: 70px 100px 0 100px ;
                min-height: 70vh;
                height: auto;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                
                @media (max-width: 1400px) {
                    padding: 70px 50px 0 50px;
                }

                @media (max-width: 1100px) {
                    flex-direction: column;
                    min-height: 50vh;
                }

                @media (max-width: 764px) {
                    padding: 30px 0;
                }

                .brand-title-1 {
                    width: 50%;
                    gap: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;

                    @media (max-width: 1100px) {
                        width: 100%;
                    }

                    a { 
                        width: fit-content;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                        @media (max-width: 1100px) {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                        }
                        
                    }

                    .fatties-logo {
                        height: 150px;
                        width: 200px;
                        object-fit: scale-down;

                        
                        @media (max-width: 1100px) {
                            align-self: center;
                            width: 150px;
                        }

                        @media (max-width: 764px) {
                            width: 150px;
                        }
    
                    }
                }

                .cellphone-logo {
                    width: 50%;
                    height: 80%;
                    object-fit: scale-down;

                    @media (max-width: 1100px) {
                        display: none;
                    }
                }


                span {
                    font-weight: bold;
                }

                h1 {
                text-align: left;
                font-weight: 600;
                width: 100%;
                font-size: 60px;
                color: white;
                text-shadow: 0px 0px 3px ${props => props.theme.secondary};

                @media (max-width: 1400px) {
                padding: 0;
                font-size: 50px;
                }

                @media (max-width: 1100px) {
                padding: 0;
                text-align: center;
                width: 100%;
                }

                @media (max-width: 764px) {
                font-size: 40px;
                }

            }
            p {
                text-align: left;
                font-weight: 600;
                width: 80%;
                font-size: 20px;
                color: white;
                text-shadow: 0px 0px 3px ${props => props.theme.secondary};

                @media (max-width: 1400px) {
                width: 100%;
                font-size: 18px
                }

                @media (max-width: 1100px) {
                text-align: center;
                width: 100%;
                }

                @media (max-width: 764px) {
                    font-size: 16px;
                }
            }
            }
        }
        
        .btns-box {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            min-height: 10vh;
            height: auto;
            padding: 10px;

            @media (max-width: 764px) {
                display: flex;
                flex-wrap: wrap;
                justify-items: center;
                align-content: center;
                gap: 10px;
            }

            .contactbtn {
                text-align: center;
                color: ${props => props.theme.secondary};
                text-decoration: none;
                display: flex;
                justify-content: center;
                font-weight: 600;
                align-items: center;
                font-size: 16px;
                padding: 10px 30px;
                width: 20%;
                border-radius: 15px;
                border: 1px solid ${props => props.theme.secondary};
                background: white;
                transition: 0.5s ease all;

                @media (max-width: 1100px) {
                    font-size: 14px;
                }
                
                @media (max-width: 764px) {
                    width: 80%;
                }

                &:hover {
                    border: 1px solid white;
                    background-color: ${props => props.theme.secondary};
                    color: white;
                    cursor: pointer;
                    filter: brightness(150%);
                    }
            }
        }
    }
    
    .features-box {
        width: 100%;
        height: auto;
        font-size: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        gap: 50px;

       
    .features-title {
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(240deg, orange 10% ,${props => props.theme.secondary} 30%);
        color: white;
        text-align: center;
        font-weight: 900;
        font-size: 60px;

        @media (max-width: 1400px) {
          font-size: 50px;
        }

        @media (max-width: 764px) {
          font-size: 40px;
        }
    }

    }

`