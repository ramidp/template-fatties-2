import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase/firebaseConfig";
import FattiesLogo from '../../images/fattiescolores200.png'
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'
import Container from './styles/estilomodalshared'

const ServiceTel = ({show, show2, show3, forward, backwards, delayedClosingModal, setClosedModal}) => {

    const tel1 = require('../../images/services/tel/tel2.png')
    const tel2 = require('../../images/services/tel/tel1.png')

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 765) {
            setIsMobile(true)
        }
    }, [])

    return ( 
        <Container>
            

            <section
            style={{ display: show ? 'flex' : 'none' }}
            className='first-section'
            >
                <img 
                rel='preload'
                className='logo-fatties'
                src={FattiesLogo} alt="" />

                <p
                style={{ textAlign: 'center', fontSize: '30px'}}
                className='title'
                >Centro de 
                    <br />
                    <span>atención telefónica</span></p>

                <h1
                className='subtitle h1-tel'
                >Como <span>consultora certificada</span> su comercio accede <span>sin costo alguno</span> a los siguientes beneficios</h1>
                {/* <div
                className='buttons'
                >
                    <p
                    style={{color: 'lightray'}}
                    >1</p>
                    <p
                    onClick={() => {setShow2(true); setShow(false)}}
                    >2</p>
                </div> */}
            </section>


            <section
            style={{ display: show2 ? 'flex' : 'none' }}
            >
                <div>
                    <img
                    className='h1-tel'                
                    rel='preload'
                    src={tel1} alt="" />
                    <div>
                    <h3>Nuestro centro de <span>atención telefónica</span>  
                        utiliza tecnología de vanguardia
                        y <span>procesos eficientes</span> para garantizar
                        una comunicación <span>fluida y eficaz.</span>
                      </h3>
                                
                    </div>
                </div>

            { 
            !isMobile &&
            <div>
                    <div>
                    <h3>Horarios</h3>
                        <ul>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                De lunes a viernes 9 a 18h</ol>
                        </ul>

                    </div>
                    <img 
                   className='h1-tel'             
                    rel='preload'
                    src={tel2} alt="" />
                </div>
                }
            { 
            isMobile &&
            <div>
                    <img 
                    className='h1-tel'             
                    rel='preload'
                    src={tel2} alt="" />

                    <div>
                    <h3>Recambio de <span>Lectores</span></h3>
                        <ul>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Garantía de por vida</ol>
                        </ul>
                    </div>
                </div>
                }   

            </section>

            <section
            style={{ display: show3 ? 'flex' : 'none' }}
            >
                <p>Si estás interesado en sumar el servicio de
                    atención telefónica para tu marca
                    no dudes en <span>contactarnos</span></p>

                <a 
                onClick={logEvent(analytics, 'Service Info | Telphone Service')}
                href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, Me gustaría hacerles una consulta con respecto al servicio de Atención Telefónica."
                target='_blank'
                >Comunicate con nosotros
               <WhatsAppLogo/>

                </a>
              

                {/* <div
                className='buttons'
                >
                    <p
                    onClick={() => {setShow3(false); setShow2(true)}}
                    >2</p>                      
                    <span></span>
                </div> */}
            </section>  

            <div
            className='sect-nav'
            >
            {show === true ? 
            <span
            className='movers'
            ></span>
            :
            <p
            className='movers movers-svg'
            onClick={backwards}
            >
                <FontAwesomeIcon icon={faChevronLeft}/>
                </p>}

                <h2
            onClick={() => {delayedClosingModal(); setClosedModal(false)}}
            >X</h2>



            {
            show3 === true ?
            <span
            className='movers'
            ></span> 
            :
            <p
            className='movers movers-svg'
            onClick={forward}
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </p>}
                </div>             

        </Container>
     );
}
 
export default ServiceTel;
