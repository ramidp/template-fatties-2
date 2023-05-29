import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Service = ({service}) => {


    const logoMp = require('../../images/mplogo.png')
    const logoCalim = require('../../images/calim-logo.png')
    const animation = 'zoom-in'

    useEffect (() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    },[])

    const [modal, setModal] = useState(false)
    const [closedModal, setClosedModal] = useState(false)

    const delayedClosingModal = () => {
        setTimeout(() => {
            setModal(false)
        },500)
    }

    return ( 
        <Container>
                    <div 
                    className={"features-div" + `${service.anchorclass}`}
                    data-aos={animation}
                    onClick={() => {setModal(true); setClosedModal(true)}}
                    >
                        <div  className="features">
                            <div className="logos-div">
                                {service.logo == logoMp || service.logo == logoCalim ? <img 
                                className={service.logoclass} src={service.logo} alt="" />
                                :
                                <FontAwesomeIcon icon={service.logo} />
                            }
                            </div>
                                <h1>{service.title}</h1>
                                <div className="underline"></div>
                                <p>{service.text}</p>
                        </div>

                    </div>


                    {modal && 
                        <div
                        className={closedModal ? "modal-service-container" : 'modal-service-container closed'}
                        >
                            <h2
                            onClick={() => {delayedClosingModal(); setClosedModal(false)}}
                            >X</h2>
                            <div
                            className='modal-service-box'
                            >
                                
                                <div>
                                    <h1>{service.title}</h1>
                                    <h3>Subtitulo</h3>
                                </div>
                                <p>{service.text2}</p>
                                <a href="">Link a FAQ</a>

                            </div>
                        </div>    
                        }

        </Container>
     );
}
 
export default Service;

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;

    .mp-div {
        background: linear-gradient(50deg,  #100E9F 5%, #009FE3 30%, white 90%);
    }
    .calim-div {
        background: linear-gradient(50deg,#C0D749 30%, #2192A5 70%);
    }

    .f1 {
        background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%);
    }
    .f2 {
        background: linear-gradient(240deg, orange 10% ,${props => props.theme.secondary} 30%);
    }


    .features-div {
        text-decoration: none;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px 5px rgba(107, 107, 107, 0.5);
        cursor: pointer;

        &:hover {
            transform: scale(1.05)
        }


        @media (max-width: 764px) {
            width: 90%;
        }

        .features {
            min-height: 45vh;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
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
                text-align: center;
                width: 90%;
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
                font-weight: 800;
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

`