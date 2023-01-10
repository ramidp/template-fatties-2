import styled from "styled-components";
import React from 'react'


const Promociones = () => {

    const photo1 = require('../images/ema1.png')
    const photo2 = require('../images/lucho1.png')
    const photo3 = require('../images/nico1.png')
    const photo4 = require('../images/ger1.png')


    return ( 
        <>
         <span id="promociones"></span>        
            <Container >
                <div className="us">
                    <div className="cards-box row">
                        <div className="cards col-2 p-0">
                            <img src={photo1} alt="" />
                            <h3>Emmanuel Tresguerra</h3>
                            <p>Redes Sociales</p>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo2} alt="" />
                            <h3>Luciano De Palo</h3>
                            <p>Redes Sociales</p>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo3} alt="" />
                            <h3>Nicolas Stiehr</h3>
                            <p>Redes Sociales</p>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo4} alt="" />
                            <h3>German Castro</h3>
                            <p>Redes Sociales</p>
                        </div>
                    </div>
                    <div className="text-us col-6">
                        <h1>Nuestro Equipo</h1>
                        <p>A través de Fatties, nos encargamos de promover servicios financieros, destinados al crecimiento y desarrollo de las PyMEs. Acompañamos al negocio en todas las etapas del proceso, desde la necesidad de desarrollar nuevas herramientas, hasta el alta y presentación de los documentos necesarios. Contamos con un amplio departamento de BackOffice que instruye y guía a los interesados con la documentación respaldatoria y el posterior análisis de la misma, para luego ser procesada por las entidades financieras.</p>
                    </div>
                </div>
            </Container>
        </>
     );
}
 
export default Promociones;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;

    .us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text-us {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
            h1 {
                color: ${props => props.theme.fontFour};
            }
            p {
                font-size: 20px;
                color: ${props => props.theme.fontTert};
            }
        }
    }


    .cards-box {
        padding-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        
        .cards {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
           
        @media (max-width: 991px) {
            width: 80vh;
        }
        @media (max-width: 760px) {
            width: 60vh;
        }
        @media (max-width: 550px) {
            width: 40vh;
        }
            h3 {
                font-size: 1.5em;
                color: ${props => props.theme.fontFour};
            }

            img {
                height: 40%;
                border-radius: 100%;
                border: 3px solid ${props => props.theme.primary};
                box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            }
        }
    }

`