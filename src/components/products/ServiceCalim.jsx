import styled from "styled-components";
import React from "react";
import CalimLogo from '../../images/calim-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase/firebaseConfig";
import { useState, useEffect } from 'react'
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'
import Container from './styles/estilomodalshared'
import info from '../../data/info.json'


const ServiceCalim = ({show, show2, show3, show4, forward, backwards, delayedClosingModal, setClosedModal}) => {

    const calim1 = require('../../images/services/calim/calim1.png')
    const calim2 = require('../../images/services/calim/calim2.png')
    const calim3 = require('../../images/services/calim/calim3.png')
    const calim4 = require('../../images/services/calim/calim4.png')

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
            style={{ display: show ? 'flex' : 'none' }}
            className='first-section'
            >
                <img 
                    rel='preload'
                    className='logo-calim'
                    src={CalimLogo} alt="" />
                <p
                className='title'
                >Somos Partner oficial de <span>Calim</span>, brindamos <span>asistencia y asesoramiento</span> en el uso de la plataforma</p>

                <h1
                className='subtitle h1-calim'
                ><span>Soluciones contables</span> para Monotributos,
                Responsables inscriptos y Empresas.
                Gestioná tus inscripciones, liquidaciones de sueldos
                y todo tipo de tramites ante <span>AFIP 100% online</span></h1>
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
                    className='h1-calim'
                     rel='preload'
                    src={calim1} alt="" />
                    <div>
                    <h3>Sueldos</h3>
                        <ul>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Liquidaciones</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Form 931 mensual</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Asesoría</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>   
                                Libro de sueldo digital</ol>
                        </ul>
                    </div>
                </div>

                {
                !isMobile && 
                        <div>
                                <div>
                                <h3>Monotributo</h3>
                                    <ul>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Inscripciones</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Recategorizaciones</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Facturador móvil</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Asistencia</ol>
                                    </ul>

                                </div>
                                <img 
                                 className='h1-calim'
                                 rel='preload'
                                src={calim2} alt="" />
                            </div>   }   

                {
                isMobile && 
                        <div>
                            <img
                           className='h1-calim' 
                            rel='preload'
                            src={calim2} alt="" />
                                <div>
                                <h3>Monotributo</h3>
                                    <ul>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Inscripciones</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Recategorizaciones</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Facturador móvil</ol>
                                        <ol>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                        <FontAwesomeIcon 
                                        className='svg'
                                        icon={faChevronRight}/>   
                                            Asistencia</ol>
                                    </ul>

                                </div>
                            </div>   }                                        
                            
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
                <div>
                <img 
                className='h1-calim'
                src={calim3} 
                rel='preload'
                alt="" />
                    <div>
                    <h3>Responsable inscripto</h3>
                        <ul>                      

                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Inscripcciones</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Declaraciones juradas</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Facturador móvil</ol>
                        </ul>

                    </div>
                </div>


             {
             !isMobile &&
             <div>
                
                    <div>
                    <h3>Empresas</h3>
                        <ul>                      

                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Creación de S.A y S.R.L</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Impuestos y balances</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Facturador móvil</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Asistencia con contador</ol>
                        </ul>

                    </div>
                    <img 
                   className='h1-calim'
                   rel='preload'
                    src={calim4} alt="" />
                </div>  }

             {
             isMobile &&
             <div>
                   <img 
                    rel='preload'
                   src={calim4} alt="" />                
                    <div>
                    <h3>Empresas</h3>
                        <ul>                      

                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Creación de S.A y S.R.L</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Impuestos y balances</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Facturador móvil</ol>
                            <ol>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <FontAwesomeIcon 
                            className='svg'
                            icon={faChevronRight}/>                               
                             Asistencia con</ol>
                        </ul>

                    </div>
                </div>  }
            </section>

            <section
            style={{ display: show4 ? 'flex' : 'none' }}
            >                
                

                <p>Para saber mas sobre como suscribirte a <span>Calim </span> y tener una reunion con uno de nuestros
                representantes contactanos.</p>               
{/* 
                <p>Si tu comercio todavía no tiene un <span>consultor asignado</span>, no dude en contactarse para dar de alta el <span>programa de representación</span> de la mano de una empresa con 5 años de experiencia en el rubro</p> */}

                <a 
                onClick={logEvent(analytics, 'Service Info | Calim')}
                href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + "&text=Hola, Me gustaría hacerles una consulta con respecto al servicio que brindan en colaboración con Calim."}
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
            className='sect-nav h1-calim'
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
            show4 === true ?
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
 
export default ServiceCalim;