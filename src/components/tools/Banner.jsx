import styled from "styled-components";
import info from '../../data/info.json'
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebaseConfig'
import {ReactComponent as WhatsAppLogo} from '../../images/icons/whatsapp.svg'


const Banner = () => {
    return ( 
        <BannerContainer>

                <div className="banner">
                        <div
                        className="part1"
                        >
                            <h1>Conseguí tu lector
                                <br />
                                con Fatties                  
                            </h1>
                            <a 
                                onClick={logEvent(analytics, 'Banner | WhatsApp')}
                                href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + "&text=Hola, los contacto para poder tranmitar mi lector Point"}
                                target='_blank'
                                >Contáctanos 
                            <WhatsAppLogo/>
                        </a>
                        </div>

                        <div
                        className="part2"
                        >
                            <img src="/bannerpoint.png" alt="" />

                        </div>

                        <div
                        className="part3"
                        >   
                        <p>Por qué conseguir tu Point?</p>
                        <ul>
                            <li>Varias Opciones de Pago</li>
                            <li>Fácil administración de dinero</li>
                            <li>La maquina es tuya</li>
                            <li>Mayor control financiero</li>
                        </ul>


                        </div>


              


                </div>

        </BannerContainer>
     );
}
 
export default Banner;

const BannerContainer = styled.div`

    width: 100%;
    height: 40vh;
    background-color: white;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1100px) {
        height: 50vh;
    }

    @media (max-width: 764px) {
        height: auto;
        padding: 5vh 0;
    } 

    .banner {
        width: 95%;
        height: 28vh;
        background: linear-gradient(45deg, #000066, #277ff3);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1100px) {
            height: 35vh;
            padding: 2vh 0;
        }

        @media (max-width: 764px) {
                flex-direction: column-reverse;
                height: 70vh;    
                padding: 2.5vh 0;            
            } 
       

        .part1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 33.33%;
            gap: 2.5vh 0;

            @media (max-width: 764px) {
                width: 100%;
                height: 50%;
            } 

            a {
            height: fit-content;
            text-decoration: none;
            color: white!important;
            padding: 10px 0;
            width: 50%;
            font-size: calc(14px + 0.1vw);
            text-align: center;
            font-weight: 700;
            transition: 300ms ease all;
            border-radius: 15px;
            background: linear-gradient(50deg,  #86b8f1 5%, #90c6f8 30%, #77ccff 90%);

            @media (max-width: 1100px) {
                width: 80%;
            }
            
            svg {
                fill: #1da34e;
                padding: 0 10px;
                height: 22px;
            }

            @media (max-width: 764px) {
                width: 70%;
                font-size: 18px;
                padding: 10px;
            }

            &:hover {
                filter: brightness(110%);
                transform: scale(1.03)
            }
        }

            p,h1,h2 {
                color: white;
                text-align: center;
            }
        }

        h1 {
            color: white;
            font-size: calc(18px + 0.25vw)
        }

        .part2 {
            width: fit-content;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 100%;
            }

            @media (max-width: 764px) {
                height: 50%;
                width: 100%;
            } 
        }

        .part3 {
            width: 33.33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: 764px) {
                display: none;
            }

            p, li {
                color: white;
                font-size: calc(14px + 0.1vw);
            }
            p {
                text-align: center;
                font-weight: bold;
                margin: 5px;
                font-size: calc(15px + 0.1vw);
            }
        }
    }
    

`