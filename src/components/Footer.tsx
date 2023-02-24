import styled from "styled-components";
import React, { useState } from 'react'
import {ReactComponent as FacebookLogo} from '../images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone,faRegistered} from '@fortawesome/free-solid-svg-icons';




const Footer = () => {

    const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)


    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && telephone !== "" && message !== "") {

            console.log('Aca va donde lo manda (Si es una base hay que configurarlo ACA!!')
            setShowAlert(false)
            alert('Su mensaje ha sido enviado satisfactoriamente. De todas formas le recomendamos comunicarse al WhatsApp para mayor inmediatez')
            
        } else {
            setShowAlert(true)
        }
        setName('')
        // setEmail('')
        setTelephone('')
        setMessage('')
        setTimeout(setShowAlert,3000)
    }

    return ( 
        <>
        <span id="contacto"></span>
            <FooterContainer>
                    <div className="social-media justify-content-center col-12 d-flex flex-row">  
                        <a href="https://www.facebook.com/mp.vendedores/" target="_blank" ><FacebookLogo/> </a>
                        <a href="https://www.instagram.com/fatties.ac" target="_blank"><InstagramLogo/> </a>
                    </div>
                    <div className="contenedor col-12 m-0">
                                <h1>Ante cualquier consulta o duda contáctanos</h1>
                                <form onSubmit={handleSubmit}>
                                    <input 
                                    className="inputname" 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>  

                                    {/* <input 
                                    className="inputcorreo" 
                                    type="text" 
                                    name="correo"   
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>   */}

                                    <input 
                                    className="inputtel" 
                                    type="number" 
                                    name="telefono" 
                                    placeholder="Telefono"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}/>

                                    <textarea
                                    className="textmsg"  
                                    name="mensaje" 
                                    placeholder="Escribir mensaje"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />

                                    
                                    <button type="submit">Enviar</button>

                                    {showAlert ?
                                    <div style={{color: 'red'}}className="alert"><b>Debes completar todos los campos para enviar el formulario correctamente</b></div>
                                    :
                                    <></>
                                    }

                                </form> 
                    </div>
                    <div className="second-part">
                        <div className="tel-email-location d-flex flex-column">
                            <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Igualdad 1449, 3° A, Haedo, Buenos Aires</p>
                            </div>
                            <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                                <p>mercadopago@fatties.com.ar</p>
                            </div>
                            <div>
                            <FontAwesomeIcon icon={faPhone} />
                                <p>	Oficinas: +54 (011) 5-263-8549 </p>
                                <p>	Celular: +54 (011) 2395-6360 </p>
                            </div>
                        </div>
                        <div className="copyright">
                            {/* <FontAwesomeIcon icon={faRegistered} /> */}
                            <p>©  2023 Fatties Mercado Pago.</p> 

                            <p>
                            Creado por ramidp@gmail.com 
                            <br />
                            (Template Retail)
                            </p>
                        </div>
                    </div>
                    <div className="third-part">
                        <p>Atención comercial: Lunes a viernes de 9 a 18.
                            <br />
                            Somos una empresa de servicios y consultoria, su información es totalmente confidencial. 
                            <br />
                            Todos los derechos reservados. El uso del sitio web fatties.com.ar está sujeto a los Términos de uso de Fatties y la Política de privacidad.</p>
                    </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    background: ${props => props.theme.gray};
    padding-top: 20px;

    .hide{ 
        @media (max-width: 991px) {
            display: none!important;
        }
    } 

    .contenedor {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

            form {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                padding:  0 0 30px 0;
                
                    input, textarea {
                        font-size: 15px;
                        width: 50%;
                        padding: 5px 0;
                        padding-left: 10px;
                        margin: 10px 0;
                        resize: none;
                        &::placeholder {
                            color: ${props => props.theme.secondary}
                        }
                    }

                    button {
                    margin-top: 15px;
                    border-radius: 10px;
                    width: 20%;
                    padding: 10px;
                    background-color: ${props => props.theme.secondary};
                    border: 1px solid white;
                    color: white;
                    &:hover {
                        filter: contrast(70%)
                    }
            }

            }

            a {
                text-decoration: none;
            }
            h1 {
                display: inline;
                color: black;
                font-size: 22px;
    
        @media (max-width: 991px) {
            width: 100%!important;
        }
                .textmsg {
                    height: 70px;
                    &::placeholder {
                        display: flex;
                        
                    }
                }
                
        }
    }
    .social-media {
        height: 10%;
        gap: 15px;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
        svg {
            width: 30px;
            fill: black; // Color de las redes, buscamos sus colores o usamos un color para todas?
            &:hover {
                filter: invert(50%);
                }
            }
        }    
    }

    .alert {
        margin-top: 10px;
        color: ${props => props.theme.fontPrim};
    }

    .second-part {
        background-color: ${props => props.theme.gray};
        height: 20vh;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        justify-items: center; // En GRID se usa justify-items, no content.
        align-items: center;

        .copyright {
                background-color: ${props => props.theme.primary};
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                
                &:hover {
                    filter: brightness(110%);
                }
                div {
                    height: auto;
                    background-color: inherit;
                }
                p {
                    padding: 10px;
                }
            }
        
        .tel-email-location {
            &:hover {
                filter: brightness(110%);
            }
        } 

        svg {
            height: 20px;
        }

        div {
            gap: 0 20px;
            padding: 10px;
            color: white;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: #686767;
            width: 100%;
            height: 100%;
            
            p {
                margin: 0;
                width: 80%;
                text-align: left;
            }
        }
    }
    .third-part {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        height: auto;
        background-color: ${props => props.theme.gray};
        p {
            margin: 0;
            text-align: center;
            color: black;
            width: 70%;
            @media (max-width: 1100px) {
                font-size: 12px;
            }
        }
    }

`