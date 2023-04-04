import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'


// Aca van los logos de las marcas que trabajan, completarlo cuando tenga algunos logos, mi idea es poner un 3 x 3 de logos con sus anchors (links)
// Y con un interval de un tiempo suficiente para clickear y ver todos, o después podemos ver la transicion bien, por ahora es una beta.
// Tal vez con 2 Partes sea suficiente.

const Referencias = () => {
  

    return ( 
      <Container>
          <span id="referencias"></span>
          <div className="title">
            <h1>Referencias</h1>
          </div>
          <div className="">
            <h1>Imagenes </h1>
          </div>
          <div className="carousel-box">
              <h1>Carousel con Flechas</h1>
          </div>
        </Container>
     );
}
 
export default Referencias;

const Container = styled.div`
    width: 100%;
    height: 93vh;    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    gap: 30px;

    @media (max-width: 1100px) {
      min-height: 63vh;
      height: auto;
    }
    @media (max-height: 720px) {
      padding-top: 20px;
    }

    

    .another-section {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background-color: ${props => props.theme.secondary}; */
      z-index: 1;

        h3 {
        margin: 0;
        width: 100%;
        font-size: 26px;
        text-align: center;
        padding: 0 100px ;
        color: ${props => props.theme.secondary};

        @media (max-width: 1475px) {
            padding: 10px;
          }

        @media (max-width: 1100px) {
            padding: 0;
            font-size: 24px;
          }

          @media (max-width: 764px) {
            padding: 0;
            font-size: 18px;
            }
      }
    }
    
`