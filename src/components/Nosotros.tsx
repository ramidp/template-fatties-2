import styled from "styled-components";
import { ReactComponent as LinkedInLogo } from '../images/icons/linkedin.svg'
import { ReactComponent as FacebookLogo } from '../images/icons/facebook.svg'


const Nosotros = () => {

    const photo1 = require('../images/ema1.png')
    const photo2 = require('../images/lucho1.png')
    const photo3 = require('../images/nico1.png')
    const photo4 = require('../images/ger1.png')
    const unknown = require('../images/profile-anom.png')

    return (

        <>
        <span id="nosotros"></span>
            <Container>
                    <div className="text-us">
                        <h1>Nuestro Equipo</h1>
                        <p>A través de Fatties, nos encargamos de promover servicios financieros, destinados al crecimiento y desarrollo de las PyMEs.
                            <br />
                            Acompañamos al negocio en todas las etapas del proceso, desde la necesidad de desarrollar nuevas herramientas, hasta el alta y presentación de los documentos necesarios.
                            <br />
                            Contamos con un amplio departamento de BackOffice que instruye y guía a los interesados con la documentación respaldatoria y el posterior análisis de la misma, para luego ser procesada por las entidades financieras.</p>
                    </div>
                    <div className="cards-box row">
                        <div className="cards">
                            <img src={unknown} alt="" />
                                <div className="d-flex flex-column justifiy-content-left align-items-left">
                            <h3>Emmanuel
                                <br />
                                Tresguerra</h3>
                                <p>Responsable de Ventas </p>
                                    <div>
                                        <a href="https://www.linkedin.com/in/jesus-emmanuel-tresguerras-47b756103/" target="_blank">
                                            <LinkedInLogo />
                                        </a>
                                        <a href='goFacebook' target="_blank">
                                            <FacebookLogo />
                                        </a>
                                    </div>
                                </div>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <div className="d-flex flex-column justifiy-content-left align-items-left">
                            <h3>Luciano
                                <br />
                                De Palo</h3>
                                <p>Responsable de Ventas </p>

                            <a href="https://www.linkedin.com/in/luciano-de-palo-836415194/" target="_blank">
                                <LinkedInLogo />
                            </a>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <div className="d-flex flex-column justifiy-content-left align-items-left">
                            <h3>Nicolas
                                <br />
                                Stiehr</h3>
                                <p>Responsable de Ventas </p>

                            <a href="">
                                <LinkedInLogo />
                            </a>
                            </div>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <div className="d-flex flex-column justifiy-content-left align-items-left">
                            <h3>German
                                <br />
                                Castro</h3>
                                <p>Responsable de Ventas </p>

                            <a href="https://www.linkedin.com/in/nicolas-ivan-stiehr-086aa0225/" target="_blank">
                                <LinkedInLogo />
                            </a>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
}

export default Nosotros;

const Container = styled.div`
    width: 100%;
    height: 93vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    flex-direction: column;
    background-color: white;
    gap: 20px;

    @media (max-width: 1100px) {
            height: auto;
        }

        .text-us {
            width: 100%;
            height: 40vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 2;
            padding: 0 280px;
            background-color: ${props => props.theme.secondary};


            @media (max-width: 1100px) {
                height: 15vh;
                }

            h1 {
                font-size: 40px;
                color: white;
                padding-bottom: 16px;
                margin: 0;

                @media (max-width: 1100px) {
                    font-size: 30px;
                }

                @media (max-width: 764px) {
                    font-size: 22px;
                }

            }
            p {
                text-align: center;
                margin: 0;
                font-size: 18px;
                color: white;

                @media (max-width: 1100px) {
                    font-size: 14px;
                    display: none;
                }
            }
        }
    
    .cards-box {
        width: 70%;
        height: 50vh;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 50%);
        background-color: white;
            
        @media (max-width: 764px) {
            width: 100%;
            }

        
        .cards {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 20px;

            @media (max-width: 1100px) {
                flex-direction: row;
                justify-content: center;
                }

            p {
                font-size: 18px;
                color: ${props => props.theme.secondary};

                @media (max-width: 1100px) {
                font-size: 14px;
                }

            }
            h3 {
                font-weight: bold;
                font-size: 1.5em;
                color: ${props => props.theme.secondary};
                text-align: left;
                margin: 0;

                @media (max-width: 1100px) {
                    font-size: 1em;
                    text-align: left;
                    
                }


            }

            a { 
                padding-right: 10px;
                width: fit-content;
                svg {
                    height: 30px;
                    fill: ${props => props.theme.secondary};
                    &:hover {
                        filter: contrast(70%)
                    }
                }
            }

            img {
                height: 100px;
                filter: contrast(70%);

                @media (max-width: 1100px) {
                    height: 80px;
                }
                @media (max-width: 764px) {
                    height: 60px;
                }


                
            }
        }
    }

`