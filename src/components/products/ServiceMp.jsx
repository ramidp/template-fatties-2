import styled from "styled-components";
import React, {useState, useEffect} from "react";
import MPLogo from '../../images/mplogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase/firebaseConfig";
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'
import Container from './styles/estilomodalshared'
import info from '../../data/info.json'


const ServiceMp = ({show, show2, show3, forward, backwards, delayedClosingModal, setClosedModal}) => {

    const qrImage = require('../../images/services/mp/qr.png')
    const smartImage = require('../../images/services/mp/smart.png')
    const chatImage = require('../../images/services/mp/chat.png')

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 765) {
            setIsMobile(true)
        };
        document.removeEventListener('keydown', closeOnEscape);
    }, [])

    const closeOnEscape = (event) => {
        if (event.key === 'Escape') {
          setClosedModal(false)
          delayedClosingModal()
        }
      };

      
      // Attach the event listener on component mount
      document.addEventListener('keydown', closeOnEscape);

    return ( 
        <Container>
            
           <section
            style={{ display: show ? 'flex' : 'none'  }}
            className='first-section'
            >
                <img 
                rel='preload'
                className='logo-mp' 
                src={MPLogo} alt="" />

                <p
                className='title'
                >Somos Partner oficial de <span>Mercado Pago</span>, brindamos <span>asistencia y asesoramiento</span> en el uso de la plataforma</p>

                <h1
                className='subtitle h1-mp'
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
                <div
                className='div-mp'
                >
                    <img 
                    className='h1-mp img-mp'
                    rel='preload'
                    src={qrImage} alt="" />
                    <div>
                    <h3>Reposición de materiales de marca <span>sin costo</span></h3>
                        <ul>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Carteleria Qr</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Rollos de papel para Point</ol>
                        </ul>
                    </div>
                </div>

            { 
            !isMobile &&
            <div
            className='div-mp'
            >
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
                    <img 
                    className='h1-mp img-mp'
                    rel='preload'
                    src={smartImage} alt="" />
                </div>
                }
            { 
            isMobile &&
            <div
            className='div-mp'
            >
                    <img 
                    className='h1-mp img-mp'
                    rel='preload'
                    src={smartImage} alt="" />

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
                
                <div
            className='div-mp'
            >
                <img 
                className='h1-mp img-mp'
                rel='preload'
                src={chatImage} alt="" />
                    <div>
                    <h3>Canal de atención <span>telefónica exclusiva</span></h3>
                        <ul>                      

                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Lunes a viernes de 9 a 18h</ol>
                        </ul>

                    </div>
                </div>
                {/* <div
                className='buttons'
                >
                    <p
                    onClick={() => {setShow2(false); setShow(true)}}
                    >2</p>  
                    <p
                    onClick={() => {setShow2(false); setShow3(true)}}
                    >3</p>  
                </div> */}

            </section>

             <section
             style={{ display: show3 ? 'flex' : 'none' }}
             >
                <h1
                className='h1-mp'
                >Acceso a bonificaciones de tasas 
                    <br />
                    exclusivas para su marca</h1>
                <h1
                className='h1-mp'
                >Acceso funcionalidades y 
                    <br />
                    herramientas de la plataforma</h1>

                <p>Si tu comercio todavía no tiene un <span>consultor asignado</span>, no dude en contactarse para dar de alta el <span>programa de representación</span> de la mano de una empresa con 5 años de experiencia en el rubro</p>

                <a 
                onClick={logEvent(analytics, 'Service Info | Mercado Pago')}
                href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + "&text=Hola, Me gustaría hacerles una consulta con respecto a la asignación de un consultor para el programa de representación de Mercado Pago."}
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
            className='sect-nav h1-mp'
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
 
export default ServiceMp;