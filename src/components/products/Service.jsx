import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase/firebaseConfig";
import ServiceMp from "./ServiceMp";
import ServiceCalim from "./ServiceCalim";
import ServiceTel from "./ServiceTel";
import ServiceCross from "./ServiceCross";


const Service = ({service}) => {

    const logoMp = require('../../images/mplogo.png')
    const logoCalim = require('../../images/calim-logo.png')
    const animation = 'zoom-in'

    useEffect (() => {
        Aos.init({
            duration: 500,
            once: true,
        });
    },[])

    const [modal, setModal] = useState(false)
    const [closedModal, setClosedModal] = useState(false)

    const delayedClosingModal = () => {

        setTimeout(() => {
            setModal(false)
        },400);

        setTimeout(() => {
            setShow(true)
            setShow2(false)
            setShow3(false)
            setShow4(false)
        }, 450)
    }

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    const backwards = () => {
        if (show2 === true) {
            setShow(true);
            setShow2(false);
        } 
        if (show3 === true) {
            setShow2(true);
            setShow3(false)
        }
        if (show4 === true) {
            setShow3(true);
            setShow4(false)
        }
    }

    const forward = () => {
        if (show === true) {
            setShow(false);
            setShow2(true);
        } 
        if (show2 === true) {
            setShow2(false);
            setShow3(true)
        }
        if (show3 === true) {
            setShow3(false);
            setShow4(true)
        }
    }

const [serviceValue, setServiceValue] = useState('')




    return ( 
        <Container>
                    <div 
                    className={"features-div" + `${service.anchorclass}`}
                    data-aos={animation}
                    >
                        <div  className="features">
                            <div className="logos-div">
                                {service.logo === logoMp || service.logo == logoCalim ? <img 
                                rel='preload'
                                className={service.logoclass} src={service.logo} alt="" />
                                :
                                <FontAwesomeIcon 
                                className={service.logoclass}
                                icon={service.logo} />
                            }
                            </div>
                                <h1>{service.title}</h1>
                                <div className="underline"></div>
                                <p>{service.text}</p>

                                
                                <div
                                className="read-more"
                                >
                                    <h3
                                    onClick={() => {setModal(true); setClosedModal(true); setServiceValue(service.name);logEvent(analytics, 'Service | ' + `${service.name}`)}}
                                    >Leer más
                                    </h3>
                                    <FontAwesomeIcon 
                                    className='svg-more'
                                    icon={faArrowRight}/>
                                </div>
                        </div>

                    </div>


                    {modal &&                         
                        <div
                        className={closedModal ? "modal-service-container" : 'modal-service-container closed'}
                        >
                            
                            <div
                            onClick={() => {delayedClosingModal(); setClosedModal(false)}}
                            className='closing-div'
                            ></div>
                        
                            <div
                            className='modal-div'
                            >
                            {/* {show === true ? 
                            <span
                            className='movers'
                            ></span>
                            :
                            <p
                            className='movers'
                            onClick={backwards}
                            >
                               <FontAwesomeIcon icon={faChevronLeft}/>
                                </p>} */}

                            {
                            serviceValue === 'Mercado Pago' &&
                            <ServiceMp
                            show={show}
                            show2={show2}
                            show3={show3}    
                            forward={forward}                        
                            backwards={backwards}
                            delayedClosingModal={delayedClosingModal}
                            setClosedModal={setClosedModal}
                            />
                            }
                            
                            {
                            serviceValue === 'Calim' &&
                            <ServiceCalim
                            show={show}
                            show2={show2}
                            show3={show3} 
                            show4={show4} 
                            forward={forward}                        
                            backwards={backwards} 
                            delayedClosingModal={delayedClosingModal}
                            setClosedModal={setClosedModal}
                           />
                            }

                            {
                            serviceValue === 'Atención Telefónica' &&
                            <ServiceTel
                            show={show}
                            show2={show2}
                            show3={show3} 
                            show4={show4} 
                            forward={forward}                        
                            backwards={backwards}   
                            delayedClosingModal={delayedClosingModal}
                            setClosedModal={setClosedModal}
                           />
                            }

                            {
                            serviceValue === 'Cross-Selling' &&
                            <ServiceCross
                            show={show}
                            show2={show2}
                            show3={show3} 
                            show4={show4} 
                            forward={forward}                        
                            backwards={backwards}  
                            delayedClosingModal={delayedClosingModal}
                            setClosedModal={setClosedModal}
                           />
                            }

                            {/* {
                             show3 === true ?
                             <span
                             className='movers'
                             ></span> 
                            :
                            <p
                            className='movers'
                            onClick={forward}
                            >
                               <FontAwesomeIcon icon={faChevronRight}/>
                                </p>} */}

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
        /* background: linear-gradient(240deg, orange 10% ,${props => props.theme.secondary} 30%); */
        
    }
    .calim-div {
        background: linear-gradient(50deg,#C0D749 30%, #2192A5 70%);
        /* background: linear-gradient(50deg, #7cdaa3 10%, ${props => props.theme.primary} 40%); */

    }

    .f1 {
        background: linear-gradient(50deg, ${props => props.theme.primaryOpact} 10%, ${props => props.theme.primary} 40%);
    }
    .f2 {
        background: linear-gradient(240deg, ${props => props.theme.tertiary} 10% ,${props => props.theme.secondary} 30%);
    }


    .features-div {
        text-decoration: none;
        width: 50vw;
        min-height: 45vh;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px 5px rgba(107, 107, 107, 0.5);

        &:hover {
            transform: scale(1.05)
        }

        @media (max-width: 1400px) {
            width: 70vw;
            min-height: 45vh;
        }

        @media (max-width: 1100px) {
            width: 70vw;
            min-height: 45vh;
        }

        @media (max-width: 764px) {
            width: 90vw;
        }

        .features {
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            color: black;
            padding: 50px 0;
            gap: 15px;
            background-color: white;

            @media (max-width: 1100px) {
                padding: 40px 20px;
                }

            
                .read-more {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 5px 15px;
                    gap: 10px;
                    transition: 300ms ease all;


                    h3 {
                    font-size: 16px;
                    border-radius: 7px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    cursor: pointer;
                    margin: 0;

                    @media (min-width: 2048px) {
                    font-size: 22px;                     
                    }
                    }

                    
                    .svg-more {
                        font-size: 12px;
                    }

                    &:hover {
                        color: ${props => props.theme.secondary};
                    }                    
                    

                    @media (max-width: 764px) {
                        &:active {
                            color: ${props => props.theme.secondary};
                        }
                    }

            }

            
            .logos-div {
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;

                @media (max-width: 500px) {
                width: 50%;
                }


                .mp {
                    height: 170px;

                    @media (min-width: 2048px) {
                    height: 200px;                 
                    }

                    @media (max-width: 1100px) {
                    height: 150px;
                    }

                    @media (max-width: 764px) {
                    height: 130px;
                    }

                }
                .calim {
                    height: 65px;

                    @media (min-width: 2048px) {
                    height: 80px;                 
                    }

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
                color: gray;
                
                @media (min-width: 2048px) {
                font-size: 26px;                 
                }

                @media (max-width: 1400px) {
                font-size: 16px; 
                width: 80%;
                }

                @media (max-width: 1100px) {
                font-size: 16px; 
                width: 90%;
                }
            }
            h1 {
                text-transform: uppercase;
                color: gray;
                width: 70%;
                text-align: center;
                font-size: 40px;
                font-weight: 800;
                margin: 0;

                @media (min-width: 2048px) {
                font-size: 50px; 
                width: 90%;
                }

                @media (max-width: 1400px) {
                font-size: 36px; 
                width: 90%;
                }

                @media (max-width: 1100px) {
                 width: 100%;
                }

                @media (max-width: 764px) {
                 width: 100%;
                 font-size: 22px;
                }

            }
            .underline {
                width: 70%;
                height: 4px;
                background-color: white;
                border-radius: 50%;
            }

            .svg1 {
                background: linear-gradient(240deg, ${prop => prop.theme.tertiary}  10% ,${props => props.theme.secondary} 30%);
            }

            .svg2 {
                background: linear-gradient(50deg, ${prop => prop.theme.primaryOpact} 10%, ${props => props.theme.primary} 40%);
            }

            .svg-serv {
                color: white;
                border-radius: 50%;
                padding: 20px;
                width: 55px;
                height: 55px;

                @media (min-width: 2048px) {
                    width: 65px;
                    height: 65px;
                    padding: 20px;              
                    }

                @media (max-width: 1100px) {
                    width: 45px;
                    height: 45px;
                    padding: 20px;
                }

                @media (max-width: 764px) {
                    width: 40px;
                    height: 40px;
                    padding: 15px;
                }

            }
            }
        }

`
