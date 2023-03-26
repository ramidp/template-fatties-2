import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faKey, faGears } from '@fortawesome/free-solid-svg-icons';
import Marcas from "./Marcas";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Logo from "./Logo";


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
        <BrandMainContainer className="p-0">
            <div data-aos={animation2} data-aos-delay="1700" className="absolute">
            {/* <img className="fattieslogo" src={logo} alt="" /> */}
                <div className="brand-logo">
                        <div className="brand-title">
                        <Logo/>  
                            <h1>Soluciones Digitales. 
                                <br />
                                Servicios complementarios.
                                <br/>
                                Atención personalizada.</h1>
                    </div>
                            <p className="m-0 pt-0">"Cumplimos las exigencias en seguridad, claridad y confianza en la gestión de cuentas.
                                Somos Consultores Certificados por Mercado Pago.
                                Contribuimos en garantizar un servicio de postventa completo."
                            </p>
                        <div className="btns-box">
                            <a className="contactbtn" href="#servicios">Servicios</a>
                            <a className="contactbtn" href="#nosotros">Nosotros</a>
                            <a className="contactbtn" href="#">3rd Btn</a>
                            <a className="contactbtn" href="#">4th Btn</a>
                        </div>
                </div>
                <Marcas/>
                <span id="servicios"></span>
                <div  className="features-box">

                    <div style={{background: '#f0f0f0'}} className="features">
                        <div data-aos={animation} className="logos-div">
                            <img className="mp" src={logoMp} alt="" />
                        </div>
                        <div data-aos={animation} className="features-info">
                            <h1>Representante Oficial</h1>
                            <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                            <div className="more-btn">
                                <a className="more" href="/service1">Leer más</a>
                            </div>
                        </div>
                    </div>

                    <div style={{background: 'white'}} className="features">
                        <div data-aos={animation} className="features-info">
                        <h1>Puesta a Punto</h1>
                        <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                        <div>
                            <a className="more" href="/service2">Leer más</a>
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
    height: auto;
    width: 100%;
    display: flex;
    background-color: #f0f0f0;

    .fattieslogo {
        position: absolute;
        width: 50%;
        top: -9%;
        z-index: -20;
        filter: opacity(10%);
        }

        
    .absolute {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;

            p {
                font-size: 1.5em;
            }
      
        .brand-logo {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            min-height: 50vh;
            height: auto;
            width: 100%;
            display: flex;
            padding: 25px;

            @media (max-width: 1100px) {
                padding-bottom: 30px;
            }

            h1 {
                text-align: center;
                width: 50%;
                font-size: 36px;

                @media (max-width: 1100px) {
                font-size: 24px;
                }

                @media (max-width: 764px) {
                font-size: 20px;
                }

            }
            p {
                text-align: center;
                width: 70%;
                font-size: 26px;

                @media (max-width: 1400px) {
                width: 100%;
                font-size: 16px;
                }

                @media (max-width: 1100px) {
                font-size: 14px;
                }

                @media (max-width: 764px) {
                font-size: 12px;
                }

            }

            h1, p {
                color: ${props => props.theme.secondary};
             }


            .brand-title {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

        }
        
        .btns-box {
            display: flex;
            gap: 5px;

            @media (max-width: 764px) {
                gap: 5px;
            }

            .contactbtn {
                color: white;
                text-decoration: none;
                background-color: ${props => props.theme.secondary};
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                height: 7vh;
                width: 9vw;
                box-shadow: 0px 0px 40px -30px rgba(0,0,0,1);
               
                
                &:hover {
                    filter: contrast(60%)
                }
    
                @media (max-width: 764px) {
                    padding: 5px 15px;
                    font-size: 14px;
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
        padding-top: 7vh;
        background-color: ${props => props.theme.gray};
         
        .features {
            height: 23.3vh;
            width: 100%;
            padding: 10px 400px;
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
                    height: 100px;
                    @media (max-width: 1100px) {
                    height: 80px;
                    }
                    @media (max-width: 764px) {
                    height: 60px;
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
                font-size: 70px;
                color: ${props => props.theme.secondary}
                ;
                @media (max-width: 1100px) {
                    font-size: 60px;
                }

            }
            
        }
    }

`