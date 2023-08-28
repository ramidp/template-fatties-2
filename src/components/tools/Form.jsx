import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import Alerta from '../tools/Alerta'
import info from '../../data/info.json'
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebaseConfig'
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'


const Formulario = () => {

    const logowhatsapp = require('../../images/icons/whatsapp.png')

    // Expresiones Regulares para el Formulario

    const numberExpr = /^[0-9\s+-]+$/
    const emailExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameExpr = /^[a-zA-ZÀ-ÿ-']+( [a-zA-ZÀ-ÿ-']+)*$/;


    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [mensaje, setMensaje] = useState('')


    const [completeName, setCompleteName] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [email, setEmail] = useState('')
    const [msjWhats, setMsjWhats] = useState('')    

    let timeHour = new Date().getHours()

    let [timeValue, setTimeValue] = useState('')

    useEffect(() => {
        if (timeHour > 13 && timeHour < 19)  {
            setTimeValue('Buenas tardes') 
        } else if (timeHour >= 6 && timeHour <= 13) {
            setTimeValue('Buenos días') 
        } else {
            setTimeValue('Buenas noches') 
        }
    },[timeHour])


    const handleSubmit = (e) => {

        e.preventDefault()

        if (completeName !== '' && whatsapp !== '' && whatsapp !== null && email !== '') {
            if (numberExpr.test(whatsapp) && nameExpr.test(completeName) && emailExpr.test(email)) {
                console.log('Enviado');                
                setCompleteName('')           
                setWhatsapp('')          
                setEmail('')
                setMensaje('Envíado con éxito')
                cambiarEstadoAlerta(true)
                setMsjWhats('Me gustaría que me contacten %0A Mi nombre es' + '*' + completeName + '*' + '%0A' +'Teléfono:' + '*' + whatsapp + '*' + '%0A' + 'Email:' + '*' + email + '*')
            }
            
            else {
                cambiarEstadoAlerta(true)
                setMensaje('Favor de completar con el formato correcto')
            }
            
        } else {
            setCompleteName('')           
            setWhatsapp('')          
            setEmail('') 
            cambiarEstadoAlerta(true)         
            setMensaje('Favor de completar todos los campos')
        }        

    }


    return (  

        <FormularioContainer>

            <Alerta
            mensaje={mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
            />

            <h1>También podes acercarte a nosotros vía formulario, 
                <br />
                y te contactaremos a la brevedad</h1>

            <form 
            onSubmit={handleSubmit}            
            action="">

                <div className='form-item'>


                    <label htmlFor="name">Nombre y Apellido</label>
                    <input               
                    id='name'  
                    onChange={(e) => setCompleteName(e.target.value)}
                    value={completeName} type="text" />

                </div>

                <div className='form-item'>
                   
                    <label htmlFor="whatsapp">Número Whatsapp</label>
                    <input           
                    id='whatsapp'          
                    onChange={(e) => setWhatsapp(e.target.value)}
                    value={whatsapp} type="text" />
                </div>

                <div className='form-item'>
                   
                    <label htmlFor="email">Email</label>
                    <input  
                    id='email'                  
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} type="email" />
                </div>

                    <button
                    onClick={() => {
                                                
                            logEvent(analytics, 'Form | Contact')
                    }}
                    >
                        Enviar
                    </button>
          

            </form>

                <a 
                onClick={logEvent(analytics, 'Form | WhatsApp')}
                href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + "&text=Hola, me gustaría saber más sobre Fatties y sus servicios."}
                target='_blank'
                >Contáctanos 
                <WhatsAppLogo/>
                </a>

        </FormularioContainer>
        
    );
}
 
export default Formulario;

const FormularioContainer = styled.div`
    min-height: 70vh;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 10vh 0;
    gap: 7.5vh 0;
    
    h1 {
        margin: 0;
        font-size: calc(16px + 0.5vw);
        text-align: center;
        font-weight: bolder;
        color:  ${prop => prop.theme.secondary};
    }

    a {
            text-decoration: none;
            color: white!important;
            background: #1da34e;
            padding: 10px 0;
            width: 50%;
            font-size: 18px;
            text-align: center;
            font-weight: 700;
            transition: 300ms ease all;
            border-radius: 15px;

            svg {
                padding: 0 10px;
                height: 22px;
                fill: white;
            }

            @media (max-width: 764px) {
                width: 70%;
                font-size: 18px;
                padding: 10px;
            }

            &:hover {
                filter: brightness(110%);
                transform: scale(1.03)
            }
        }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px 0;
        width: 60%;



        @media (max-width: 764px) {
            width: 80%;
        }

        .form-item {
            width: 100%;

            label {
                color:  ${prop => prop.theme.secondary};
                font-weight: bold;
            }

            input {               
                width: 100%;
            }
        }

            button {
                background-color: ${prop => prop.theme.secondary};
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40%;
                padding: 5px 0;
                color: white;
                text-decoration: none;
                gap: 0 10px;
                font-weight: bold;
                border: 2px solid white;
                transition: 300ms ease all;
                margin-top: 20px;

                @media (max-width: 764px) {
                    width: 60%;
                }

              &:hover {
                filter: brightness(110%);
                transform: scale(1.03)
            }

                img {
                    width: 30px;
                    filter: brightness(0) invert(1)
                }
            }
        }
    

`
