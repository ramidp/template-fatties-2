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
                <div className="wallpaper"></div>
                    <div className="text-us">

                        <div className="title-underline">
                            <h1>NOSOTROS</h1>
                            <div className="underline"></div>
                        </div>


                        <p>A través de <strong>Fatties</strong>, nos encargamos de promover servicios financieros, destinados al <strong>crecimiento y desarrollo</strong> de las PyMEs.
                            Acompañamos al negocio en todas las etapas del proceso, desde la necesidad de desarrollar nuevas herramientas, hasta el alta y presentación de los documentos necesarios.
                            <br />
                            <br />
                            Contamos con un amplio departamento de BackOffice que <strong>instruye y guía</strong> a los interesados con la documentación respaldatoria y el posterior análisis de la misma, para luego ser procesada por las entidades financieras.</p>



                    </div>

                    <div className="title-underline">
                            <h1
                            style={{padding: "0 10px"}}
                            >NUESTRO EQUIPO</h1>
                            <div className="underline"></div>
                        </div>

                        <div className="underline"></div>

                    <div className="cards-box">



                        <div className="cards">
                            <img src={unknown} alt="" />
                            <h3>Emmanuel
                                <br />
                                Tresguerras</h3>
                                <p>Responsable 
                                    <br />
                                    de
                                     Ventas </p>
                                <a href="https://www.linkedin.com/in/jesus-emmanuel-tresguerras-47b756103/" target="_blank">
                                    <LinkedInLogo />
                                </a>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <h3>Luciano
                                <br />
                                De Palo</h3>
                                <p>Responsable 
                                    <br />
                                    de
                                     Ventas </p>

                            <a href="https://www.linkedin.com/in/luciano-de-palo-836415194/" target="_blank">
                                <LinkedInLogo />
                            </a>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <h3>Nicolas
                                <br />
                                Stiehr</h3>
                                <p>Responsable 
                                    <br />
                                    de
                                     Ventas </p>

                            <a href="">
                                <LinkedInLogo />
                            </a>
                        </div>
                        <div className="cards">
                            <img src={unknown} alt="" />
                            <h3>German
                                <br />
                                Castro</h3>
                                <p>Responsable 
                                    <br />
                                    de
                                     Ventas </p>

                            <a href="https://www.linkedin.com/in/nicolas-ivan-stiehr-086aa0225/" target="_blank">
                                <LinkedInLogo />
                            </a>
                        </div>
                    </div>
            </Container>
        </>
    );
}

export default Nosotros;

const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    flex-direction: column;
    background-image: url('https://i.ibb.co/0rBMC8T/FONDO-LINEAS.png'), 
    linear-gradient(245deg, ${props => props.theme.tertiary} 10% ,${props => props.theme.secondary} 60%);
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-bottom: 50px;

    .title-underline {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 6.6vh;

            @media (max-width: 1100px) {
            gap: 6.7vh;
            }

        .underline {
            margin: 30px 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(245deg,  rgba(255, 138, 43, 0.068) 10%, ${props => props.theme.tertiary}  30% , #ffffff 80%);
        }


        h1 {
            font-size: 60px;
            font-weight: 900;
            color: white;
            padding-bottom: 5px;
            margin: 0;
            text-align: center;

            @media (max-width: 1100px) {
                font-size: 50px;
            }

            @media (max-width: 764px) {
                font-size: 40px;
            }

        }

    }
    
    .text-us {
            width: 100%;
            min-height: 100vh;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            z-index: 2;

            @media (max-width: 1400px) {
                    padding-bottom: 50px;
                }



            p {
                width: 55%;
                padding: 50px 20px;
                text-align: center;
                line-height: 30px;
                align-self: flex-start;
                margin: 20px 100px;
                font-size: 20px;
                color: black;
                background-color: #ffffffca;
                
                @media (max-width: 1500px) {
                    width: 70%;
                }

                @media (max-width: 1400px) {
                    font-size: 18px;
                    width: 80%;
                }

                @media (max-width: 1100px) {
                    align-self: center;
                    font-size: 14px;
                    width: 70%;
                }

                @media (max-width: 764px) {
                    font-size: 14px;
                    width: 90%;
                    align-self: center;
                    padding: 20px 40px;
                    line-height: 24px;
                }
            }
        }


    .cards-box {
        width: 100%;
        min-height: 40vh;
        height: auto;
        display: grid;
        grid-template-columns: repeat(4, 24%);
        justify-items: center;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 20px 0;
        gap: 10px;
            
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(2, 50%);
            
            }

        @media (max-width: 764px) {
            padding-top: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px 10px;
            }

        
        .cards {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            height: auto;
            padding: 50px 10px;
            border: 2px solid white;
            border-radius: 10px;

            @media (max-width: 1100px) {
                flex-direction: column;
                justify-content: center;
                }

            @media (max-width: 764px) {
                flex-direction: row;
                }

            @media (max-width: 400px) {
                width: 95%;
                }

            p {
                margin: 0;
                font-size: 16px;
                color: white;
                text-align: center;
                width: 70%;

                @media (max-width: 1400px) {
                font-size: 14px;
                }

                @media (max-width: 1100px) {
                font-size: 12px;
                }

            }
            h3 {
                width: 70%;
                font-weight: bold;
                font-size: 1.5em;
                color: white;
                text-align: center;
                margin: 0;
                font-size: 26px;

                @media (max-width: 1400px) {
                font-size: 20px;
                }

                @media (max-width: 1100px) {
                    font-size: 1em;
                }


            }

            a { 
                width: fit-content;
                svg {
                    height: 50px;
                    fill: white;

                    @media (max-width: 1100px) {
                        height: 40px;
                    }

                    &:hover {
                        filter: contrast(70%)
                    }
                }
            }

            img {
                height: 100px;
                filter: invert(100%);

                @media (max-width: 1400px) {
                    height: 80px;
                }
                @media (max-width: 1100px) {
                    height: 70px;
                }
                @media (max-width: 764px) {
                    height: 60px;
                }


                
            }
        }
    }

`