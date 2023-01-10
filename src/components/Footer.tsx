import styled from "styled-components";
import React, { useState } from 'react'
import SignModal from "./ModalAlert";


const Footer = () => {

    const facebookLogo = require('../images/icons/facebook.svg')
    const instagramLogo = require('../images/icons/instagram.svg')
    const twitterLogo = require('../images/icons/twitter.svg')

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)


    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && email !== "" && telephone !== "" && message !== "") {

            console.log('Aca va donde lo manda (Si es una base hay que configurarlo ACA!!')
            setShowAlert(false)
            alert('Se mando el Form / Agregarle vinculo de base o lo que sea')
            
        } else {
            setShowAlert(true)
        }
        setName('')
        setEmail('')
        setTelephone('')
        setMessage('')
        setTimeout(setShowAlert,3000)
    }

    return ( 
        <>
        <span id="contacto"></span>
        <span id="getintouch"></span>
            <FooterContainer>
                    <div className="social-media justify-content-center col-12 d-flex flex-row p-0 m-0">  
                        <a href="https://www.facebook.com/ikkenaisushi" target="_blank" ><img src={facebookLogo} alt="" /> </a>
                        <a href="https://www.instagram.com/ikkenai_sushi" target="_blank"><img src={instagramLogo} alt="" /> </a>
                        {/* <a href=""><img src={twitterLogo} alt="" />  </a>                     */}
                    </div>
                    <div className="contenedor col-12 m-0">
                        <div className="row m-0">
                            <div className="p-3 hide card col-3 m-0">
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

                            </div>
                            <div className="p-0 card card-input col-6 m-0">
                                <h1>Get in touch</h1>
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

                                    <input 
                                    className="inputmsg"  
                                    type="text" 
                                    name="mensaje" 
                                    placeholder="Escribir mensaje"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />

                                    
                                    <button type="submit">Enviar</button>

                                    {showAlert ?
                                    <div className="alert">Debes completar todos los campos para enviar el formulario</div>
                                    :
                                    <></>
                                    }

                                </form> 
                            </div>
                        </div>
                    </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.primary};
    padding: 200px 0;

    .hide{ 
        @media (max-width: 991px) {
            display: none!important;
        }
    } 

    .row {
        width: 100%;
    }

    .card {
        gap: 20px;
        border-radius: 0%;
        border: none;        
        text-align: center;
        height: 50vh;
        background: inherit;
        color: ${props => props.theme.fontPrim};
   
        a {
            text-decoration: none;
            color: blue;
        }
        h1 {
            display: inline;
            margin: 0;
            font-size: 30px;
        }
    }
    .card-input {
        justify-content: flex-start;

    @media (max-width: 991px) {
        width: 100%!important;
    }
    
        input {
            width: 70%;
            padding: 10px 0;
            padding-left: 10px;
            margin: 15px 0;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            z-index: 20;
            
            button {
                margin-top: 15px;
                width: 20%;
                background-color: ${props => props.theme.tertiary};
                border: 1px solid ${props => props.theme.primary};
                color: ${props => props.theme.fontSecond};
                &:hover {
                    background-color: ${props => props.theme.fontTert};
                    color: ${props => props.theme.fontSecond};
                }
            }
        }
    }
    .social-media {
        height: 5vh;
        gap: 15px;
        a {
        img {
            height: 30px;
            filter: invert(100%);
            &:hover {
                filter: invert(0%);
            }
            }
        }    
    }

    .alert {
        margin-top: 10px;
        color: ${props => props.theme.fontPrim};
    }

`