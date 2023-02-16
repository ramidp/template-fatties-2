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
        <span id="getintouch"></span>
            <FooterContainer>
                    <div className="social-media justify-content-center col-12 d-flex flex-row">  
                        <a href="https://www.facebook.com/mp.vendedores/" target="_blank" ><FacebookLogo/> </a>
                        <a href="https://www.instagram.com/fatties.ac" target="_blank"><InstagramLogo/> </a>
                    </div>
                    <div className="contenedor col-12 m-0">
                        <div className="row m-0">
                            {/* <div className="p-3 hide card col-3 m-0">
                                <h1>Unite al Staff</h1>
                                <p>Texto para unirte al laburo bla bla bla</p>
                                <p>info@tuvieja.com</p>
                                <a href="">E-mail</a>
                                <p>Escribinos para sentirte parte de esta basura</p>
                            </div>
                            <div className="p-3 hide card col-3 m-0">
                                <h1>Card 2</h1>
                                <p>Texto para otra funcion o idea</p>
                                <p>Aguante tu emprendimiento</p>
                                <a href="">Datos mas</a>
                                <p>Escribinos para sentirte parte de esta basura</p>

                            </div> */}
                            <div className="p-0 card card-input col-12 m-0">
                                <h1>Cualquier duda nos puedes contactar vía redes sociales, formulario o Whatsapp</h1>
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
                        </div>
                    </div>
                    <div className="second-part">
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
                        <div className="copyright">
                        <FontAwesomeIcon icon={faRegistered} />
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
                            Somos una empresa de servicios y consultoria y su información es totalmente confidencial. 
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
    height: 100vh;
    background: white;

    .hide{ 
        @media (max-width: 991px) {
            display: none!important;
        }
    } 

    .contenedor {
        height: 45%;


        .row {
            width: 100%;
        }
    
        .card {
            gap: 20px;
            width: 100%;
            border-radius: 0%;
            border: none;        
            text-align: center;
            background: inherit;
            color: ${props => props.theme.fontPrim};
       
            a {
                text-decoration: none;
                color: blue;
            }
            h1 {
                display: inline;
                margin: 0;
                font-size: 22px;
            }
        }
        .card-input {
            justify-content: flex-start;
    
        @media (max-width: 991px) {
            width: 100%!important;
        }
        
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
            form {
                margin: 10px auto;
                height: 100%;
                width: 80%;
                padding: 10px 0;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center ;

                .textmsg {
                    height: 70px;
                    &::placeholder {
                        display: flex;
                        
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
            width: 40px;
            height: 40px;
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
        background-color: gray;
        height: 25%;
        display: grid;
        grid-template-columns: repeat(4 , 25%);
        justify-items: center; // En GRID se usa justify-items, no content.
        align-items: center;

        .copyright {
                background-color: ${props => props.theme.primary}
            }
        
        svg {
            height: 40px;
        }

        div {
            gap: 20px;
            color: white;
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            justify-content: flex-start;
            align-items: center;
            background-color: #686767;
            width: 100%;
            height: 100%;
            border: 1px solid white;
            &:hover {
                filter: contrast(80%);
            }
            
            p {
                width: 80%;
                text-align: center;
            }
        }
    }
    .third-part {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
        background-color: gray;
        p {
            text-align: center;
            color: white;
        }
    }

`