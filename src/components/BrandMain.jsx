import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from "react";
import Service from "./products/Service";
import { faPhoneVolume, faHandshake } from '@fortawesome/free-solid-svg-icons';


const BrandMain = () => {

    const logo = require('../images/fatties200white.png')
    const logoMp = require('../images/mplogo.png')
    const logoCalim = require('../images/calim-logo.png')
    const wallimg = require('../images/celular-v2.png')

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
            subtitle: 'Asociación con Mercado Pago',
            text: 'Somos Partner oficial de Mercado Pago, brindamos asistencia y asesoramiento en el uso de la plataforma.',
            text2: 'Por tener a Fatties como consultora certificada su comercio accede sin costo alguno a los siguientes beneficios:',
            text3: 'Reposición de materiales de marca sin costo: cartelería QR y rollos de papel para Point.',
            text4: 'Recambio de lectores (garantía de por vida)',
            text5: 'Acceso a bonificaciones de tasas exclusivas para su marca.',
            text6: 'Canal de atención telefónica exclusivo de lunes a viernes de 9 a 18 hs.',
            text7: 'Acceso a nuevas funcionalidades y herramientas de la plataforma de la mano de una empresa con 5 años de experiencia en el rubro.',
            text8: 'Si tu comercio todavía no tiene un consultor asignado, no dudes en contactarnos nuestros asesores con gusto les informaran como darse de alta al programa de representación.',
            contacttext: 'https://api.whatsapp.com/send?phone=5491123956360&text="Buenas, Me gustaría contactarlos para más información sobre sus servicios asociados a Mercado Pago y querría hablar con un representante"',
            logo: logoMp,
            anchorclass: ' mp-div',
            logoclass: 'mp',
        },
        {
            id: 2,
            title: 'Partner Oficial',
            subtitle: 'Asociación con Calim',
            text: 'Soluciones contables para Monotributos, Responsables inscriptos y Empresas. Gestioná tus inscripciones, liquidaciones de sueldos y todo tipo de trámites ante AFIP 100% online.',
            text2: 'Sueldos: Liquidaciones, Form 931 mensual, Asesoría, Novedades y Libro de sueldo digital',
            text3: 'Monotributos: Inscripciones, recategorizaciones, facturador móvil, asistencia.',
            text4: 'Resp Inscriptos: Inscripciones, declaraciones juradas, facturador móvil.',
            text5: 'Empresas: Creación de SA y SRL, Impuestos y balances, facturador móvil, asistencia con contador.',
            text6: 'Para saber más sobre como suscribirse a Calim y tener una reunión con uno de nuestros representantes contactanos.',
            contacttext: 'https://api.whatsapp.com/send?phone=5491123956360&text="Buenas, Me gustaría contactarlos para más información sobre sus servicios asociados a Calim y querría hablar con un representante"',
            logo: logoCalim,
            anchorclass: ' calim-div',
            logoclass: 'calim',
        },
        {
            id: 3,
            title: 'Centro de atención telefónica',
            subtitle: 'Servicio exclusivo de Fatties',
            text: 'Nuestro call center es el corazón de nuestro servicio al cliente. Con un equipo de agentes altamente capacitados y comprometidos, nos enfocamos en brindar una experiencia excepcional a cada persona que nos contacta. Nuestro centro de atención telefónica utiliza tecnología de vanguardia y procesos eficientes para garantizar una comunicación fluida y eficaz',
            text2: 'Nuestro centro de atención, se encuentra disponible de Lunes a Viernes de 9 a 18 hs,',
            text3: 'Si estás interesado en sumar el servicio de Atención telefónica para tu marca no dudes en contactarnos',
            contacttext: 'https://api.whatsapp.com/send?phone=5491123956360&text="Buenas, Me gustaría contactarlos por el servicio de Atención telefónica"',
            logo: faPhoneVolume,
            anchorclass: ' f2',
            logoclass: 'svg-serv svg1',
        },
        {
            id: 4,
            title: 'Cross-Selling Estratégico',
            subtitle: 'Servicio exclusivo de Fatties',
            text: 'En Fatties ofrecemos conectar clientes con clientes para todo tipo de servicios. Hacemos de nexo entre gente que busca un servicio y gente que ofrece dicho servicio',
            text2: 'Nuestro equipo de expertos en ventas trabaja en estrecha colaboración contigo para desarrollar un programa de cross-selling adaptado a tus necesidades específicas. Comenzamos analizando en detalle tu cartera propia de comercios y evaluando las oportunidades de ventas cruzadas entre ellos. A partir de ahí, diseñamos estrategias y tácticas personalizadas para promover y fomentar la colaboración entre tus comercios, incentivando a tus clientes a realizar compras adicionales.',
            text3: 'Para tener una llamada con uno de nuestros representantes y saber mas sobre nuestras campañas de ventas contactanos.',
            contacttext: 'https://api.whatsapp.com/send?phone=5491123956360&text="Buenas, Me gustaría contactarlos por servicio de Cross-Selling"',
            logo: faHandshake,
            anchorclass: ' f1',
            logoclass: 'svg-serv svg2',
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
                            Somos tu aliado digital en el crecimiento de tu comercio.
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

                {/* <div
                className='phrase'
                >
                
                <p 
                data-aos="fade-in"
                data-aos-delay="100"
                className="m-0 pt-0">
                "Contribuimos experiencia y conocimiento 
                <br />
                para el crecimiento de su negocio."
                </p>


                </div> */}

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
                    transform: scale(1.1);
                    filter: contrast(50%);
                }
            }

            .modal-service-box {
                    border-radius: 20px;
                    box-shadow: 0px 0px 10px 5px rgba(58, 58, 58, 0.281);
                    display: flex;
                    background-color: white;
                    width: 65%;
                    min-height: 40%;
                    height: auto;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px 0;
                    padding: 50px;

                    @media (max-width: 764px) {
                        width: 90%;
                        min-height: 85%;
                    }

                    p {
                        font-size: 18px;
                        font-weight: 300;
                        text-align: left;
                        width: 100%;
                        margin: 0;
                        margin-bottom: 5px;
                    }

                    h1 {
                        background-color: ${ prop => prop.theme.secondary};
                        padding: 10px 100px;
                        text-align: center;
                        border-radius: 5px;
                        color: white;
                        display: flex;
                    }

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

        .phrase {
            background-color: gray;
            width: 100%;
            height: 40vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 50px 0 0 0;


            p { 
                font-size: 30px;
                color: white;
                font-weight: 600;
                text-align: center;
                text-shadow: 0px 0px 5px black;

                @media (max-width: 1100px) {
                font-size: 26px;
                 }

                @media (max-width: 764px) {
                font-size: 22px;
                 }

            }
        }
      
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
            background: linear-gradient(74deg, ${prop => prop.theme.tertiary} 10% ,${props => props.theme.secondary} 40%, rgba(255, 255, 255, 1) 40.04%);
            animation: bgmovement 4s ease forwards;
            background-size: 200vw 200vw;


            @media (max-width: 1100px) {
                background: linear-gradient(70deg, ${prop => prop.theme.tertiary}  10% ,${props => props.theme.secondary} 68%);
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
                        height: 100px;
                        width: 100px;
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
                width: 100%;
                font-size: 22px;
                color: white;
                text-shadow: 0px 0px 3px ${props => props.theme.secondary};

                @media (max-width: 1400px) {
                width: 100%;
                }

                @media (max-width: 1100px) {
                text-align: center;
                width: 100%;
                }

                @media (max-width: 764px) {
                    font-size: 18px;
                    padding: 0 30px;
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

        #servicios {
            padding-top: 15px;
            margin-top: -15px;
        }

       
    .features-title {
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(240deg, ${prop => prop.theme.tertiary}  10% ,${props => props.theme.secondary} 30%);
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