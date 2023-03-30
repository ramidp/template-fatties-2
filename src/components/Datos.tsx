import styled from "styled-components";
import React from 'react'


const Datos = () => {
    return ( 
        <DatosContainer>
            <p>+54 (011) 
                <br />
                11-5-263-8549</p>
        </DatosContainer>
     );
}
 
export default Datos;

const DatosContainer = styled.div`
        width: 15%;
        background-color: ${props => props.theme.secondary};
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 1100px) {
            display: none;
        }
        p {
            text-align: center;
            font-size: 15px;
            color: white;
            padding: 0;
            margin: 0;
        }

`