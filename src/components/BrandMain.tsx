import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faKey, faGears } from '@fortawesome/free-solid-svg-icons';
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
                            <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="servicios"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={100}>
                                Servicios
                                </Link>

                            <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="marcas"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={100}>
                                Clientes
                                </Link>

                            <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="referencias"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={100}>
                                Qué dicen
                                <br />
                                de Nosotros?
                                </Link>

                            
                            <a 
                            className="contactbtn"
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
                        <div data-aos={animation} className="features-info">
                        <h1>Puesta a Punto</h1>
                        <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                        <div>
                            <a className="more" href="/faq/calim_faq">Leer más</a>
                         </div>
                         </div>
                        <div data-aos={animation} className="logos-div">
                            <img className="calim" src={logoCalim} alt="" />
                        </div>
                    </div>

                    <div style={{background: '#f0f0f0'}} className="features">
                        <div data-aos={animation} className="logos-div">
                            <FontAwesomeIcon icon={faGears} />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Servicio Extra Fatties #1</h1>
                            <p>Servicio Nuevo? Que se puede agregar aca? Hace faltan más servicios? (Se podria agregar un 4to tmb) Esto dirige a la pagina del servicio, una breve descripcción</p>
                            <div >
                                <a className="more" href="/service3">Leer más</a>
                            </div>
                         </div>

                    </div>

                    <div style={{background: 'white'}}className="features">
                        <div data-aos={animation} className="features-info">
                            <h1>Servicio Extra Fatties #2</h1>
                            <p>4to Servicio? Esto dirige a la pagina del servicio, una breve descripcción</p>                        
                            <div>
                                <a className="more" href="/service4">Leer más</a>
                            </div>
                         </div>
                        <div data-aos={animation} className="logos-div">
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                    </div>

                </div>
            </div>
        </BrandMainContainer>
    );
}

export default BrandMain;


const BrandMainContainer = styled.div`
    height: 186vh;
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
            height: 93vh;
            width: 100%;
            display: flex;
            padding: 25px;
            gap: 150px;
            padding-top: 100px;
            background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255, 255, 255, 0) 100%);


            @media (max-width: 1100px) {
                padding-bottom: 30px;
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
                font-size: 24px;
                }

                @media (max-width: 764px) {
                font-size: 20px;
                }

            }
            p {
                text-align: left;
                width: 100%;
                font-size: 26px;

                @media (max-width: 1100px) {
                font-size: 14px;
                }

                @media (max-width: 764px) {
                font-size: 12px;
                }
            }

            h1,p {
                color: white;
                text-shadow: 0px 0px 20px black;
                }
            }
        }
        
        .btns-box {
            display: flex;
            gap: 10px;

            @media (max-width: 764px) {
                gap: 5px;
            }

            .contactbtn {
                text-align: center;
                border-top-left-radius: 20px;
                border-bottom-right-radius: 20px;
                color: white;
                cursor: pointer;
                text-decoration: none;
                border: 1px solid ${props => props.theme.secondary};
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                height: 12vh;
                width: 11vw;
                box-shadow: 0px 0px 40px -30px rgba(0,0,0,1);
                transition: ease 1s all;
                background:  ${props => props.theme.secondary};
                
                &:hover {
                    background: white;
                    color: ${props => props.theme.secondary};
                }

                @media (max-width: 1100px) {
                    font-size: 18px;
                    height: 8vh;
                    width: 11vw;
                }
    
                @media (max-width: 764px) {
                    padding: 5px 15px;
                    font-size: 14px;
                    height: 70px;
                    width: 100px;
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
        align-items: flex-start;
        background-color: ${props => props.theme.gray};
         
        .features {
            height: 23.3vh;
            width: 100%;
            padding: 10px 250px;
            gap: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: black;

            @media (max-width: 1475px) {
                padding: 10px 50px;
                }

            @media (max-width: 1100px) {
                height: 20vh;
                }

             @media (max-width: 764px) {
                padding: 10px 50px;
            }

            
            .logos-div {
                display: flex;
                width: 40%;
                justify-content: center;
                align-items: center;
                filter: opacity(70%);


                .mp {
                    height: 150px;
                    @media (max-width: 1100px) {
                    height: 80px;
                    }
                    @media (max-width: 764px) {
                    height: 60px;
                    }

                }
                .calim {
                    height: 80px;
                    @media (max-width: 1100px) {
                    height: 40px;
                    }
                    @media (max-width: 764px) {
                    height: 30px;
                    }
                }
            }

            .features-info {
                width: 40%;
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: flex-start;
                height: auto;

                @media (max-width: 1100px) {
                    gap: 10px;
                    width: 100%;
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
                font-size: 16px;
                margin: 0;

                @media (max-width: 1100px) {
                font-size: 14px; 
                }
                @media (max-width: 764px) {
                font-size: 12px; 
                display: none; 
                }
            
            }
            h1 {
                color: ${props => props.theme.secondary};
                width: 100%;
                text-align: left;
                font-size: 22px;
                font-weight: bold;
                margin: 0;
                @media (max-width: 1100px) {
                 width: 100%;
                 font-size: 20px;
                }

            }
            }

            svg {
                font-size: 90px;
                color: ${props => props.theme.secondary}
                ;
                @media (max-width: 1100px) {
                    font-size: 60px;
                }

            }
            
        }
    }

`