import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import Alerta from '../components/Alerta'



const Footer = () => {

    const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState<boolean>(false);
    const [alerta, cambiarAlerta] = useState<any>({})

    const [display, setDisplay] = useState(false)


    // This is a way to make a useEffect with a if to show things if innerWidth is XXX or YYY . In this case, if innerWidth is more than 764 display is true so you can show some message, in case width is LESS than 764.
    // It shows a different H1 .. (To see the JSX conditional in the return part)
    // The same thing we can do to set a different font-size or whatever we want in the useState to use it as a class in className
    // useEffect(() => {
    //     if (window.innerWidth >= 764) {
    //         setDisplay(true)
    //     } else {
    //         setDisplay(false)
    //     }
    // },[display])




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
                            <h1>Contactanos a través de este formulario o vía WhatsApp</h1>
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

                                </form> 
                    </div>
                    <div>
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
    height: 50vh;
    background: ${props => props.theme.gray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 30;

    .contenedor {
        z-index: 2;
        height: auto;
        padding-top: 5vh;
        gap: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(360deg, ${props => props.theme.gray}  50%, ${props => props.theme.secondary} 50%);

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
                margin-top: 40px;

                @media (max-width: 1100px) {
                    width: 90%;
                    margin-top: 10px;
                }
                
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
            padding-top: 30px;
            margin: 0;
            color: ${props => props.theme.secondary };
            }

        @media (max-width: 764px) {
            width: 80%;
            font-size: 22px;
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