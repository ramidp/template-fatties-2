import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faKey, faGears } from '@fortawesome/free-solid-svg-icons';


const BrandMain = () => {

    const logo = require('../images/logo-fatties.png')
    const logoMp = require('../images/mplogo.png')
    const logoCalim = require('../images/calim-logo.png')

    return (
        <BrandMainContainer className="p-0">
            <div className="absolute">
                <div className="brand-logo">
                    <div className="d-flex flex-column justify-content-center">
                        <h1>Soluciones Digitales</h1>
                        <p className="m-0">"Cumplimos las exigencias en seguridad, claridad y confianza en la gestión de cuentas.
                            Somos Consultores Certificados por Mercado Pago.
                            Contribuimos en garantizar un servicio de postventa completo."
                        </p>
                    </div>
                    {/* <img className="logo" src={logo} alt="" /> */}
                </div>
                <div className="m-4" style={{height: 'auto'}}>
                    <a className="more" href="#contacto">Saber Más...</a>
                </div>
                <div className="features-box row">
                    <div className="features">
                        <div className="logos-div">
                            <img className="mp" src={logoMp} alt="" />
                        </div>
                        <h1>Representante Oficial</h1>
                        <p>Contamos con una cartera de +4000 comercios activos, que reciben mensualmente actualizaciones, soporte en vivo, visita presencial e información de nuestros servicio</p>
                    </div>
                    <div className="features">
                        <div className="logos-div">
                            <img className="calim" src={logoCalim} alt="" />
                        </div>
                        <h1>Puesta a Punto</h1>
                        <p>Solución de tus impuestos de forma fácil y práctica. Contando con Atención impositiva al instante. Todo esto y más que podrás hacerlo desde nuestra app </p>
                    </div>
                    <div className="features">
                        <div className="logos-div">
                            <FontAwesomeIcon icon={faGears} />
                        </div>
                        <h1>Servicio Extra Fatties #1</h1>
                        <p>Servicio Nuevo? Que se puede agregar aca? Hace faltan más servicios? (Se podria agregar un 4to tmb)</p>
                    </div>
                    <div className="features">
                        <div className="logos-div">
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                        <h1>Servicio Extra Fatties #2</h1>
                        <p>4to Servicio?</p>
                    </div>
                    <div className="features">
                        <div className="logos-div">
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                        <h1>Servicio Extra Fatties #3</h1>
                        <p>5to Servicio?</p>
                    </div>
                </div>
            </div>
        </BrandMainContainer>
    );
}

export default BrandMain;


const BrandMainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
        
    .absolute {
        /* background: linear-gradient(343deg, rgba(255,255,255,1) 50%, ${props => props.theme.secondary} 80%);         */
        background-color: ${props => props.theme.gray}; // Color solido y simple, fondo o gradiente?
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        gap: 20px;
            p {
                font-size: 1.5em;
                
            }

        @media (max-width: 991px) {
            font-size: 1.5em;
        }
        .brand-logo {
            padding: 0 150px;
            display: flex;
            height: auto;

            h1 {
                font-size: 30px;
            }
            p {
                font-size: 20px;
            }

            h1, p {
                color: white;
                text-shadow: black 1px 1px 3px;          
             }
        }
        .more {
            color: white;
            border-radius: 10px ;
            text-decoration: none;
            background-color: ${props => props.theme.secondary};
            padding: 10px 20px;
            display: flex;
            &:hover {
                filter: contrast(70%)
            }
        }

    }
    
    .features-box {
        width: 100%;
        height: auto;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;
        
        .features {
            height: 100px;
            width: 80%;
            padding: 10px;
            background-color: white;
            border: 1px solid rgb(209, 209, 209);
            border-radius: 20px;
            gap: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: black;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,1);

            &:hover {
                cursor: pointer;
                border: 1px solid transparent;
                background-color: ${props => props.theme.secondaryOpact};
            }
            
            .logos-div {
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                filter: opacity(70%);

                .mp {
                    height: 70px;
                }
                .calim {
                    height: 40px;
                }
            }

            svg {
                font-size: 50px;
                color: ${props => props.theme.secondary};
            }
            p {
                width: 60%;
                text-align: left;
                font-size: 14px;
                margin: 0;
            }
            h1 {
                width: 15%;
                text-align: left;
                font-size: 20px;
                font-weight: bold;
                margin: 0;
            }
        }
    }

`