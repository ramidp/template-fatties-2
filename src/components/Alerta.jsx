import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
// Agregamos keyframes para darle la animacion a la alerta.

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 5%;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
 
        background: ${props => props.theme.secondary};
        color: #fff;
        padding: 0.5rem 1.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        text-align: center;
    }
`;

const Alerta = ({tipo, mensaje, estadoAlerta, cambiarEstadoAlerta}) => {

    React.useEffect(() => {
        let tiempo;

        if (estadoAlerta === true){
            tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false)
            }, 3000);
        }

        return(() => { clearTimeout(tiempo)}); // Limpiamos el timeOut

    }, [estadoAlerta, cambiarEstadoAlerta]); // Se ejecuta cuando estadoAlerta cambia

    return ( 
        <>
        {estadoAlerta && 
        <ContenedorAlerta 
            tipo={tipo}>
            <p>{mensaje}</p>
        </ContenedorAlerta>
        }
        </>

     );
}
 

export default Alerta