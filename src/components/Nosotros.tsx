import styled from "styled-components";
import {ReactComponent as LinkedInLogo} from '../images/icons/linkedin.svg'


const Promociones = () => {

    const photo1 = require('../images/ema1.png')
    const photo2 = require('../images/lucho1.png')
    const photo3 = require('../images/nico1.png')
    const photo4 = require('../images/ger1.png')


    return ( 
        <>
         <span id="nosotros"></span>        
            <Container >
                <div className="us">
                    <div className="text-us col-6">
                        <h1>Nuestro Equipo</h1>
                        <p>A través de Fatties, nos encargamos de promover servicios financieros, destinados al crecimiento y desarrollo de las PyMEs. 
                            <br />
                            Acompañamos al negocio en todas las etapas del proceso, desde la necesidad de desarrollar nuevas herramientas, hasta el alta y presentación de los documentos necesarios. 
                            <br />
                            Contamos con un amplio departamento de BackOffice que instruye y guía a los interesados con la documentación respaldatoria y el posterior análisis de la misma, para luego ser procesada por las entidades financieras.</p>
                    </div>
                    <div className="cards-box row">
                        <div className="cards col-2 p-0">
                            <img src={photo1} alt="" />
                            <h3>Emmanuel 
                                <br />
                                Tresguerra</h3>
                            <a href="https://www.linkedin.com/in/jesus-emmanuel-tresguerras-47b756103/" target="_blank">
                                <LinkedInLogo/>
                            </a>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo2} alt="" />
                            <h3>Luciano 
                                <br />
                                De Palo</h3>
                            <a href="https://www.linkedin.com/in/luciano-de-palo-836415194/" target="_blank">
                                <LinkedInLogo/>
                            </a>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo3} alt="" />
                            <h3>Nicolas
                                <br />
                                 Stiehr</h3>
                            <a href="">
                                <LinkedInLogo/>
                            </a>
                        </div>
                        <div className="cards col-2 p-0">
                            <img src={photo4} alt="" />
                            <h3>German
                                <br />
                                 Castro</h3>
                            <a href="https://www.linkedin.com/in/nicolas-ivan-stiehr-086aa0225/" target="_blank">
                                <LinkedInLogo/>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
     );
}
 
export default Promociones;

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.secondary};

    .us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text-us {
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
            h1 {
                font-size: 28px;
                color: white;
            }
            p {
                width: 80%;
                font-size: 15px;
                color: white;
            }
        }
    }


    .cards-box {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        
        .cards {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            p {
                color: white;
            }
           
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
                color: white;
                text-align: center;
            }

            svg {
                height: 30px;
                fill: white;
                &:hover {
                    filter: contrast(70%)
                }
            }

            img {
                width: 50%;
                border-radius: 100%;
                border: 3px solid white;
                box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            }
        }
    }

`