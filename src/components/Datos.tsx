import styled from "styled-components";
import React from 'react'


const Datos = () => {
    return ( 
        <DatosContainer>
            <p>+54 (011) 5-263-8549</p>
        </DatosContainer>
     );
}
 
export default Datos;

const DatosContainer = styled.div`
        width: 100%;
        background-color: ${props => props.theme.secondary};
        display: flex;
        justify-content: center;

        @media (max-width: 991px) {
            justify-content: center;
            width: 10%;
        }
        p {
            text-align: center;
            font-size: 15px;
            color: white;
            padding: 15px 10px;
            margin: 0;
        }

`