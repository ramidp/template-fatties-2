import styled from "styled-components";
import React, { useState } from 'react'
import {ReactComponent as FacebookLogo} from '../images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg'
import {ReactComponent as LinkedInLogo} from '../images/icons/linkedin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone,faRegistered} from '@fortawesome/free-solid-svg-icons';
import Alerta from '../components/Alerta'



const Footer = () => {

    const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState<boolean>(false);
    const [alerta, cambiarAlerta] = useState<any>({})



    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && telephone !== "" && message !== "") {

            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "exito",
             mensaje: "Su mensaje ha sido enviado"});
    
        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "exito",
             mensaje: "Favor de completar todos los campos"});

        }
        setName('')
        // setEmail('')
        setTelephone('')
        setMessage('')
    }

    return ( 
        <>
        <span id="contacto"></span>
            <FooterContainer>
                    <div className="contenedor col-12 m-0">
                                {/* <h1>Contactanos por este formulario o vía WhatsApp</h1>
                                <form onSubmit={handleSubmit}>
                                    <input 
                                    className="inputname" 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>  

                                    <input 
                                    className="inputcorreo" 
                                    type="text" 
                                    name="correo"   
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>  

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

                                </form>  */}
                    </div>
                        <div className="third-part">
                            <p>Atención comercial: Lunes a viernes de 9 a 18.
                                <br />
                                Somos una empresa de servicios y consultoria, su información es totalmente confidencial. 
                                <br />
                                To0dos los derechos reservados. El uso del sitio web fatties.com.ar está sujeto a los Términos de uso de Fatties y la Política de privacidad.</p>
                        </div>
                    <div>
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
                                <div>
                                    <a href="https://www.facebook.com/mp.vendedores/" target="_blank" ><FacebookLogo/> </a>
                                    <a href="https://www.instagram.com/fatties.ac" target="_blank"><InstagramLogo/> </a>
                                    <a href="https://www.linkedin.com/company/fatties/" target="_blank"><LinkedInLogo/> </a>
                                </div>
                                <p>©  2023 Fatties Mercado Pago.</p> 
                            </div>
                        </div>
                        {/* <div className="signature">
                            <p>
                                    Creado por ramidp@gmail.com (Template Retail)
                                </p>
                                <a href="https://linktr.ee/ramidp" target="_blank">Proyectos&Contacto</a>

                        </div> */}
                    </div>
                    <Alerta
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje}
                    estadoAlerta={estadoAlerta}
                    cambiarEstadoAlerta={cambiarEstadoAlerta}/>

            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 43vh;
    background: ${props => props.theme.gray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 30;

    .contenedor {
        z-index: 2;
        gap: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

            @media (max-width: 1100px) {
                background: ${props => props.theme.gray};
                padding-top: 0px;
            }

            form {
                height: auto;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                padding: 30px 0;
                width: 70%;
                background-color: white;
                box-shadow: 0px 0px 30px -15px rgba(0,0,0,1);
                z-index: 2;
                
                    input, textarea {
                        font-size: 15px;
                        width: 80%;
                        padding: 5px 0;
                        padding-left: 10px;
                        margin: 10px 0;
                        resize: none;
                        border: 1px solid darkgray;
                        &::placeholder {
                            color: ${props => props.theme.secondary}
                        }

                        @media (max-width: 1100px) {
                            width: 80%;
                }
                    }

                    textarea {
                    height: 80px;
                    &::placeholder {
                        display: flex;
                        
                    }
                }


                    button {
                    margin-top: 15px;
                    width: 20%;
                    padding: 10px;
                    background-color: ${props => props.theme.secondary};
                    border: none;
                    color: white;
                    &:hover {
                        filter: contrast(70%)
                    }
                        @media (max-width: 1100px) {
                        width: 50%;
                        }
                }
                @media (max-width: 1100px) {
                     display: none;
            }
        }

            }

            a {
                text-decoration: none;
            }
            h1 {
                display: inline;
                color: white;
                font-size: 28px;
                text-align: center;

                @media (max-width: 1100px) {
                    display: none;
                }
    
        @media (max-width: 1100px) {
            width: 100%!important;
            display: none;
            }
        }

    .alert {
        margin-top: 10px;
        color: ${props => props.theme.fontPrim};
    }

    .second-part {
        z-index: 10;
        background-color: ${props => props.theme.gray};
        height: 20vh;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        justify-items: center; // En GRID se usa justify-items, no content.
        align-items: center;

        @media (max-width: 1100px) {
                height: auto;
                display: flex;
                flex-direction: column;
                }


        .copyright {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex-direction: column;
                div {
                    height: auto;
                    background-color: inherit;
                }
                p {
                    width: 100%;
                    padding: 10px;
                }
                a {
                svg {
                    height: 30px;
                    fill: white; // Color de las redes, buscamos sus colores o usamos un color para todas?
                    &:hover {
                        filter: invert(50%);
                        }
                        @media (max-width: 1100px) {
                        width: 25px;   
                        }
                    }
                }    

            }

        svg {
            font-size: 18px;
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
                font-size: 14px;
                @media (max-width: 1100px) {
                 font-size: 12px;   
                }
            }
        }
    }
    .third-part {
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 20px 0;

        p {
            margin: 0;
            text-align: center;
            color: black;
            width: 70%;
            @media (max-width: 1100px) {
                font-size: 12px;
                width: 90%;
            }
        }
    }
    .signature {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: ${props => props.theme.secondary};
        text-align: center;
        gap: 30px;
        a, p {
            margin: 0;
            color: white;
            text-decoration: none;
        }
        a {
            &:hover {
            filter: contrast(70%);
            }
        }
    }

`