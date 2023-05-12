import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPhoneVolume, faKey, faHandshake, faHand } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from "react";
import Logo from "./Logo";
import { Link } from 'react-scroll'

const BrandMain = () => {

    const logo = require('../images/fatties-white.png')
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
                <div  className="features-box">
                    
                <span id="servicios"></span>

                            <h1
                            className='features-title'
                            >SERVICIOS</h1>

                    <a 
                    className="features-anchor f1"
                    href="/faq/mercadopago_faq"
                    data-aos={animation}
                    >
                        <div  className="features">
                            <div className="logos-div">
                                <img className="mp" src={logoMp} alt="" />
                            </div>
                                <h1>Representante Oficial</h1>
                                <div className="underline"></div>
                                <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                        </div>
                    </a>

                    <a 
                    className="features-anchor f2"
                    href="/faq/calim_faq"
                    data-aos={animation} 
                    >
                        <div  className="features">
                            <div className="logos-div">
                                <img className="calim" src={logoCalim} alt="" />
                            </div>
                                <h1>Puesta a Punto</h1>
                                <div className="underline"></div>
                                <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                        </div>
                    </a>
                    
                    <a 
                    className="features-anchor f1"
                    href="/faq/fatties_faq"
                    data-aos={animation} 
                    >
                    <div className="features">
                        <div className="logos-div">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                            <h1>Atención telefónica</h1>
                            <div className="underline"></div>
                            <p>Nuestro canal de atención telefónica es una herramienta conveniente y eficiente para que nuestros clientes se comuniquen con nosotros. 
                            Contamos con un equipo de profesionales altamente capacitados que están disponibles para brindar ayuda y solucionar cualquier consulta o problema que puedas tener.</p>

                    </div>
                    </a>

                    <a 
                    className="features-anchor f2"
                    href="/faq/fatties_faq"
                    data-aos={animation}
                    >
                        <div  className="features">
                            <div  className="logos-div">
                                <FontAwesomeIcon icon={faHandshake} />
                            </div>
                                <h1>Conectar</h1>
                                <div className="underline"></div>
                                <p>En Fatties lo que ofrecemos como uno de nuestros servicios es conectar clientes con clientes para todo tipo de servicios.
                                    Nos interesa hacer de nexo entre gente que busca un servicio y gente que ofrece dicho servicio.</p>                        
                    </div>
                    </a>
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
    z-index: 2;
        
    .absolute {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
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
                gap: 10vh;
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
                        width: 200px;
                        
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

                @media (max-height: 720px) {
                font-size: 50px;
                }

            }
            p {
                text-align: left;
                width: 80%;
                font-size: 20px;
                color: white;
                text-shadow: 0px 0px 3px ${props => props.theme.secondary};

                @media (max-height: 720px) {
                padding-bottom: 20px;
                font-size: 18px;
                }

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
                gap: 20px;
            }

            .contactbtn {
                text-align: center;
                color: ${props => props.theme.secondary};
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
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
                    font-size: 16px;
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
        font-weight: 700;
        font-size: 60px;

        @media (max-width: 1400px) {
          font-size: 50px;
        }

        @media (max-width: 764px) {
          font-size: 40px;
        }
    }
    
    .f1 {
        background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%);
    }
    .f2 {
        background: linear-gradient(240deg, orange 10% ,${props => props.theme.secondary} 30%);
    }

    .features-anchor {
        text-decoration: none;
        width: 70%;
        cursor: default;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px 5px rgba(107, 107, 107, 0.5);

        @media (max-width: 764px) {
            width: 90%;
        }

        .features {
            min-height: 50vh;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: black;
            padding: 50px 0;
            gap: 10px;

            @media (max-width: 1100px) {
                padding: 40px 20px;
                width: 100%;
                min-height: 45vh;
                }

            @media (max-width: 764px) {
                min-height: 45vh;
                }

            
            .logos-div {
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                filter: grayscale(100%);

                @media (max-width: 500px) {
                width: 50%;
                }


                .mp {
                    filter: brightness(20%) invert(100%);
                    height: 180px;

                    @media (max-width: 1100px) {
                    height: 150px;
                    }

                    @media (max-width: 764px) {
                    height: 130px;
                    }

                }
                .calim {
                    filter: brightness(0%) invert(100%);
                    height: 65px;

                    @media (max-width: 1100px) {
                    height: 50px;
                    }
                    @media (max-width: 764px) {
                    height: 40px;
                    }
                }
            }

                p {
                text-align: justify;
                width: 65%;
                font-size: 18px;
                margin: 0;
                color: white;

                @media (max-width: 1400px) {
                font-size: 16px; 
                width: 80%;
                }

                @media (max-width: 1100px) {
                font-size: 14px; 
                width: 90%;
                }
            }
            h1 {
                text-transform: uppercase;
                color: white;
                width: 100%;
                text-align: center;
                font-size: 40px;
                font-weight: bold;
                margin: 0;

                @media (max-width: 1400px) {
                font-size: 36px; 
                width: 90%;
                }

                @media (max-width: 1100px) {
                 width: 100%;
                }

                @media (max-width: 764px) {
                 width: 100%;
                 font-size: 20px;
                }

            }
            .underline {
                width: 70%;
                height: 4px;
                background-color: white;
                border-radius: 50%;
            }

            svg {
                font-size: 70px;
                color: white;

                @media (max-width: 1100px) {
                    font-size: 60px;
                }

                @media (max-width: 764px) {
                    font-size: 50px;
                }

            }
            }
        }
    }

`