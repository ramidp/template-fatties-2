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

    useEffect (() => {
        Aos.init({
            duration: 1500,
            once: true,
        });
    },[])
    
    return (
        <BrandMainContainer id="top" className="p-0">
            <Logo/>
            <div className="absolute">
                <div className="brand-logo">
                        <div className="brand-title">
                                 <h1 
                                data-aos={animation2} 
                                data-aos-delay="2000" >
                                Soluciones digitales. 
                                <br />
                                Servicios complementarios.
                                <br/>
                                Atención personalizada.
                                </h1>
                            <p data-aos={animation2} data-aos-delay="2300" className="m-0 pt-0">
                                Cumplimos las exigencias en seguridad, claridad y confianza en la gestión de cuentas.
                                <br />
                                Somos consultores certificados por Mercado Pago.
                                Contribuimos en garantizar un servicio de postventa completo.
                            </p>
                        </div>
                        <div data-aos={animation2} data-aos-delay="2600" className="btns-box">

                            <a href="#servicios"
                            className="contactbtn btn1"
                            >
                                Servicios
                            </a>
                            <a href="#marcas"
                            className="contactbtn btn1"
                            >
                                Clientes
                            </a>
                            <a href="#referencias"
                            className="contactbtn btn1"
                            >
                                ¿Qué dicen 
                                <br />
                                de Nostros?
                            </a>
                            <a 
                            className="contactbtn btn4"
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            href="/nosotros"
                            >Nuestro 
                            <br />
                            Equipo
                            </a>
                            
                        </div>
                </div>
                <div  className="features-box">
                <span id="servicios"></span>

                    <div style={{background: '#f0f0f0'}} className="features">
                        <div data-aos={animation} className="logos-div">
                            <img className="mp" src={logoMp} alt="" />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Representante Oficial</h1>
                            <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                            <div className="more-btn">
                                <a className="more" href="/faq/mercadopago_faq">Leer más</a>
                            </div>
                        </div>
                    </div>

                    <div style={{background: 'white'}} className="features">
                        <div data-aos={animation} className="logos-div">
                            <img className="calim" src={logoCalim} alt="" />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Puesta a Punto</h1>
                            <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                            <div>
                                <a className="more" href="/faq/calim_faq">Leer más</a>
                            </div>
                         </div>
                    </div>

                    <div style={{background: '#f0f0f0'}} className="features">
                        <div data-aos={animation} className="logos-div">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Atención telefónica personalizada</h1>
                            <p>Nuestro canal de atención telefónica es una herramienta conveniente y eficiente para que nuestros clientes se comuniquen con nosotros. 
                            Contamos con un equipo de profesionales altamente capacitados que están disponibles para brindar ayuda y solucionar cualquier consulta o problema que puedas tener.</p>
                            <div >
                                <a className="more" href="/faq/fatties_faq">Leer más</a>
                            </div>
                         </div>

                    </div>

                    <div style={{background: 'white'}}className="features">
                        <div data-aos={animation} className="logos-div">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Conectar</h1>
                            <p>En Fatties lo que ofrecemos como uno de nuestros servicios es conectar clientes con clientes para todo tipo de servicios.
                                Nos interesa hacer de nexo entre gente que busca un servicio y gente que ofrece dicho servicio.</p>                        
                            <div>
                                <a className="more" href="/faq/fatties_faq">Leer más</a>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </BrandMainContainer>
    );
}

export default BrandMain;


const BrandMainContainer = styled.div`
    height: auto;
    min-height: 186vh;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        
      
        .brand-logo {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: auto;
            min-height: 93vh;
            width: 100%;
            display: flex;
            padding: 25px;
            gap: 150px;
            padding-top: 100px;
            background: linear-gradient(15deg, rgba(255,255,255,1) 30%, rgba(255, 255, 255, 0) 70%);

            @media (max-height: 720px) {
                gap: 50px;
            }

            @media (max-width: 1100px) {
                padding: 5px;
                padding-top: 50px;
            }

            @media (max-width: 500px) {
                gap: 70px;
            }

            .brand-title {
                width: 70%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 50px;

                h1 {
                text-align: left;
                width: 70%;
                font-size: 50px;
                font-weight: bold;

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
                width: 80%;
                font-size: 26px;

                @media (max-width: 1100px) {
                font-size: 20px;
                }

                @media (max-width: 764px) {
                    width: 100%;
                }
            }

            h1,p {
                }
            }
        }
        
        .btns-box {
            display: flex;
            justify-content: center;
            width: 100%;
            border-radius: 20px;
            height: auto;
            gap: 10px;

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
                cursor: pointer;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                height: 12vh;
                width: 11vw;
                transition: ease 1s all;
                border-top-left-radius: 15px;
                border-bottom-right-radius: 15px;
                background: ${props => props.theme.secondary};
                border: 1px solid ${props => props.theme.secondary};
                
                @media (max-height: 720px) {
                    font-size: 20px;
                }


                @media (max-width: 1100px) {
                    font-size: 16px;
                    height: 10vh;
                    width: 20%;
                }
    
                @media (max-width: 764px) {
                    padding: 5px 15px;
                    font-size: 16px;
                    height: 10vh;
                    width: 70%;
                }

                &:hover {
                    filter: contrast(200%);
                    animation: movimiento2 0.8s forwards;                    
                    
                    @keyframes movimiento2 {
                        0% {transform: translate(0px, 0px);}
                        100% {transform: translate(0px, -10px);}
                    }
                }


            }
        }
    }
    
    .features-box {
        width: 100%;
        min-height: 93vh;
        height: auto;
        font-size: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;

        span {
            padding-top: 7vh;
            margin-top: -7vh;
        }

         
        .features {
            height: 23.3vh;
            width: 100%;
            padding: 10px 280px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: black;
            gap: 5px;


            @media (max-width: 1475px) {
                padding: 10px 50px;
                }

             @media (max-width: 764px) {
                padding: 5px;
            }

            
            .logos-div {
                display: flex;
                width: 30%;
                justify-content: center;
                align-items: center;
                filter: opacity(70%);

                .mp {
                    height: 100px;
                    @media (max-width: 1100px) {
                    height: 100px;
                    }
                    @media (max-width: 764px) {
                    height: 70px;
                    }

                }
                .calim {
                    height: 50px;
                    @media (max-width: 1100px) {
                    height: 40px;
                    }
                    @media (max-width: 764px) {
                    height: 30px;
                    }
                }
            }

            .features-info {
                width: 70%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-start;
                height: auto;

                @media (max-width: 764px) {
                    gap: 10px;
                }

                .more {
                    background-color: transparent;
                    color: ${props => props.theme.secondary};
                    text-decoration: none;
                    text-align: left;
                    &:hover {
                        filter: brightness(200%);
                    }
                    @media (max-width: 1100px) {
                        font-size: 14px;
                    }
                }

                p {
                text-align: left;
                width: 100%;
                font-size: 18px;
                margin: 0;

                @media (max-height: 720px) {
                    font-size: 14px;
                }

                @media (max-width: 1100px) {
                font-size: 14px; 
                }
                @media (max-width: 764px) {
                font-size: 12px; 
                }
            
            }
            h1 {
                color: ${props => props.theme.secondary};
                width: 100%;
                text-align: left;
                font-size: 28px;
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

            }
            }

            svg {
                font-size: 60px;
                color: ${props => props.theme.secondary}
                ;
                @media (max-width: 1100px) {
                    font-size: 50px;
                }
                @media (max-width: 764px) {
                    font-size: 40px;
                }

            }
            
        }
    }

`