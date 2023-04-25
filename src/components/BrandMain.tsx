import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPhoneVolume, faKey, faHandshake, faHand } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from "react";
import Logo from "./Logo";
import { Link } from 'react-scroll'

const BrandMain = () => {

    const logo = require('../images/logo-fatties.png')
    const logoMp = require('../images/mplogo.png')
    const logoCalim = require('../images/calim-logo.png')

    const animation = 'zoom-in'
    const animation2 = 'fade-zoom-in'
    const animation3 = 'fade-right'

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
                <div className="brand-logo">
                        <div className="brand-title">
                                <a 
                                data-aos={animation3}
                                data-aos-delay='2000'
                                href="/">
                                    <img src={logo} alt="" />
                                </a>
                                 <h1 
                                data-aos={animation2} 
                                data-aos-delay="2200" >
                                Soluciones 
                                <br /> 
                                <span>
                                digitales
                                </span>
                                </h1>
                            <p data-aos={animation2} data-aos-delay="2400" className="m-0 pt-0">
                                Somos consultores certificados por Mercado Pago.
                                <br />
                                Contribuimos en garantizar un servicio de postventa completo.
                            </p>
                        </div>
                        <div className="btns-box">

                            <a href="/blog"
                             data-aos={animation2} 
                             data-aos-delay="2600"
                            className="contactbtn"
                            >
                                BLOG
                            </a>
                            <a href="/faq"
                            data-aos={animation2}
                            data-aos-delay="2600"
                            className="contactbtn"
                            >
                                FAQ
                            </a>
                            <a 
                            data-aos={animation2} 
                            data-aos-delay="2600"
                            className="contactbtn"
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            href="#marcas"
                            >
                                CLIENTES
                            </a>
                            <a href="#referencias"
                             data-aos={animation2} 
                             data-aos-delay="2600"
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

    .fattieslogo {
        position: absolute;
        width: 50%;        
        font-size: 100px;
        top: -9%;
        z-index: -20;
        filter: opacity(10%);
        }

        
    .absolute {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        background-color: #e2e2e2;
        
      
        .brand-logo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100vh;
            display: flex;
            // Buena solucion para que la linea diagonal no tenga pixeles, es sumarle .03% al que divide.  
            background: linear-gradient(70deg, orange 10% ,${props => props.theme.secondary} 45%, rgba(255, 255, 255, 1) 45.04%);
            animation: bgmovement 4s ease forwards;
            background-size: 200% 200%;


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
                padding: 25px 0 0 50px;
                height: auto;

                img {
                    width: 250px;
                    filter: brightness(0%) invert(100%);
                    &:hover {
                        cursor: pointer;
                        filter: brightness(0%) contrast(5%);
                    }
                }

                span {
                    font-weight: bold;
                }

                h1 {
                text-align: left;
                width: 100%;
                font-size: 80px;
                color: white;


                @media (max-width: 1100px) {
                width: 100%;
                font-size: 40px;
                }

                @media (max-width: 764px) {
                font-size: 30px;
                }

            }
            p {
                text-align: left;
                width: 50%;
                font-size: 24px;
                color: white;


                @media (max-width: 1100px) {
                font-size: 20px;
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
            height: 20vh;
            background: white;

            @media (max-width: 764px) {
                display: grid;
                grid-template-columns: repeat(2, 50%);
                grid-template-rows: repeat(2, 50%);
                justify-items: center;
                align-content: center;
                gap: 20px;
            }

            .contactbtn {
                text-align: center;
                color: white;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                height: 30%;
                width: 20%;
                border-radius: 15px;
                background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%);
                
                @media (max-height: 720px) {
                    font-size: 18px;
                }
                @media (max-width: 1100px) {
                    font-size: 16px;
                    height: 6vh;
                    width: 10vw;
                }

                &:hover {
                    cursor: pointer;
                    filter: contrast(150%);
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
        padding: 50px 0;


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
        font-size: 70px;
    }
    
    .f1 {
        background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%);
    }
    .f2 {
        background: linear-gradient(240deg, orange 10% ,${props => props.theme.secondary} 30%);
    }

    .features-anchor {
        text-decoration: none;
        width: 85%;
        cursor: default;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 100px -45px black;

        .features {
            height: 60vh;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: black;
            padding: 50px 0;

            /* @media (max-width: 1475px) {
                padding: 10px 50px;
                width: 100%;
                }

             @media (max-width: 764px) {
                padding: 5px;
            }
 */
            
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
                    height: 200px;
                    @media (max-width: 1100px) {
                    height: 100px;
                    }
                    @media (max-width: 764px) {
                    height: 70px;
                    }

                }
                .calim {
                    filter: brightness(0%) invert(100%);
                    height: 90px;
                    @media (max-width: 1100px) {
                    height: 40px;
                    }
                    @media (max-width: 764px) {
                    height: 30px;
                    }
                }
            }

                p {
                text-align: justify;
                width: 65%;
                font-size: 24px;
                margin: 0;
                color: white;

                @media (max-height: 720px) {
                    font-size: 14px;
                }

                @media (max-width: 1100px) {
                font-size: 14px; 
                }
                @media (max-width: 764px) {
                font-size: 12px; 
                }
                @media (max-width: 500px) {
                display: none;
                }
            
            }
            h1 {
                text-transform: uppercase;
                color: white;
                width: 100%;
                text-align: center;
                font-size: 60px;
                font-weight: bold;
                margin: 0;

                @media (max-height: 720px) {
                    font-size: 24px;
                }

                @media (max-width: 1100px) {
                 width: 100%;
                 font-size: 20px;
                }
                @media (max-width: 764px) {
                 width: 100%;
                 font-size: 18px;
                }
                
                @media (max-width: 500px) {
                 padding-left: 10px;
                }
            }
            .underline {
                width: 70%;
                height: 4px;
                background-color: white;
                border-radius: 50%;
            }

            svg {
                font-size: 90px;
                color: white;

                @media (max-width: 1100px) {
                    font-size: 50px;
                }
                @media (max-width: 764px) {
                    font-size: 40px;
                }

            }
            }
        }
    }

`