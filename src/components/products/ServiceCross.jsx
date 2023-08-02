import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase/firebaseConfig";
import FattiesLogo from '../../images/fattiescolores200.png'
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'
import Container from './styles/estilomodalshared'

const ServiceCross = ({show, show2, show3, forward, backwards, delayedClosingModal, setClosedModal}) => {

    const cross1 = require('../../images/services/cross/cross1.png')

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
                style={{textAlign: 'center', fontSize: '30px'}}
                className='title'
                >
                    <span>Cross-Selling
                        <br />
                        Estratégico</span></p>

                <h1
                className='subtitle h1-cross'
                >Nuestro equipo de ventas trabaja en colaboración
                con su marca para <span>maximizar el potencial</span>
                de ventas del negocio</h1>
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
                    className='h1-cross'
                    rel='preload'
                    src={cross1} alt="" />
                    <div>
                    <h3>Elaboramos <span>estrategias</span>,
                            aprovechando los establecimientos
                            que forman parte del ecosistema
                            de Fatties <span>optimizando el alcance</span>
                            de nuestra cartera de clientes.
                      </h3>
                                
                    </div>
                </div>

            </section>

            <section
            style={{ display: show3 ? 'flex' : 'none' }}
            >
                <p>Para saber mas sobre nuestras
                campañas de ventas <span>contactate</span> con
                uno de nuestros representantes</p>

                <a 
                onClick={logEvent(analytics, 'Service Info | Cross-Selling')}
                href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, Me gustaría hacerles una consulta con respecto al servicio de Cross-Selling Estratégico."
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
 
export default ServiceCross;