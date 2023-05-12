import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Error404 = () => {

  const navigate = useNavigate()

  const redirect = '>> Click aqui para redirigirse <<'

    return ( 
        <ContainerError404>
          <h1>Error 404</h1>
          <h3>La pagina que buscas no existe.
            <br />
            <p onClick={() => navigate(-1)}>
            {redirect}
            </p>

          </h3>
        </ContainerError404>
     );
}
 
export default Error404;

const ContainerError404 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    background-color: ${props => props.theme.secondary};
    margin-bottom: 50px;

    h1, h3 {
      color: white;
      text-align: center;
    }

      h3 > p {
        cursor: pointer;
        margin: 10px;
        font-size: 22px;
        text-decoration: none;
        color: white;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
  
`