import styled from "styled-components";
import React from 'react'


const Datos = () => {
    return ( 
        <DatosContainer>
            <p>(011) 4654-7119</p>
        </DatosContainer>
     );
}
 
export default Datos;

const DatosContainer = styled.div`
        width: 100%;
        background-color: ${props => props.theme.primary};
        display: flex;
        justify-content: center;
        @media (max-width: 991px) {
            justify-content: center;
            padding-right: 0;
        }
        p {
            font-size: 15px;
            color: ${props => props.theme.fontPrim};
            padding: 15px 10px;
            margin: 0;
        }

`