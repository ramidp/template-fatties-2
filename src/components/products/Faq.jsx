import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import faq from '../../data/faq.json'
import React, {useState} from 'react'

// Lo que se puede hacer es que estos puntos te manden a los links de MP Ayuda
// Podemos crearlos de 0, pero bueno, habria que ver bien el texto. (Creo que es lo mejor para que todo se quede DENTRO de la pagina)

const Faq = () => {


    const [filteredData, setFilteredData] = useState(faq)
    
    const handleChange = (e) => {
        const searchWord = e.target.value;
        const newFilter = faq.filter((item => {
            return (
                item.title.toLowerCase().includes(searchWord.toLowerCase())
                )
        }));
            setFilteredData(newFilter)
    }

    return (
        <>
        <span id="faq"></span>
        <Container>
            <h1 className="faq-title">FAQ</h1>

            <div className="faq-text-bg">
                <h1>¿Con que podemos ayudarte?</h1>
            </div>

            <div className="underline"></div>

            <div className="tag-searcher">
                <input
                type="text"
                onChange={handleChange}
                placeholder="Buscar por Titulos" />
            </div>


        <div className="card-box">
            {
            filteredData.sort((a, b) => a.icon.localeCompare(b.icon)).map((faq, index) => {
                return (

                    <a key={faq.id} className="card" href={'/faq/' + faq.link}>

                    <img src={require('../../images/' + `${faq.icon}`)} alt="" />
                        <div>
                            <h3>
                                <b>{faq.title} </b>
                                 </h3>
                            <p
                            style={{margin: '0'}}
                            >{faq.answerTitle}</p>
                        </div>
                    </a>
                    )
                })
            }
        </div>
        </Container>
        </>
    );
}
 
export default Faq;

const Container = styled.div`
    min-height: 100vh;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image:url('https://i.ibb.co/0rBMC8T/FONDO-LINEAS.png'),
    linear-gradient(20deg, orange 10% ,${props => props.theme.secondary} 60%);
    background-size: cover;
    margin-bottom: 50px;
    padding: 100px 0 50px 0;

    .tag-searcher {
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        margin: 0 10px 30px 10px;


        input {
                background: white;
                color: ${props => props.theme.secondary};
                border: none;
                height: 40px;
                width: 100%;
                padding-left: 10px;
                border-top-left-radius: 8px;
                border-bottom-right-radius: 8px;
                
                &:focus {
                    border: none;
                    outline: none;
                    background: #f1f1f1;
                }
                &::placeholder {
                    color: ${props => props.theme.secondary};
                }
        }

        .searched-data {
            width: 100%;
            min-height: 20%;
            height: auto;
            position: fixed;
            top: 20%;
            border: 1px solid black;
            background-color: white;
            z-index: 10;
            display: flex;
            padding: 10px;

            @media (max-width: 1100px) {
                top: 24%;
            }
            p {
                font-size: 16px;
            }
        }
    }

    .faq-text-bg {

        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5vh;


        h1 {
            margin: 0;
            font-size: 72px;
            background: -webkit-linear-gradient(20deg, orange 10% ,${props => props.theme.secondary} 60%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 30px;
            width: 100%;
            text-align: center;
            padding: 5px 10px;
            font-weight: 200;
    
            @media (max-width: 1100px) {
                font-size: 26px;
                }
    
            @media (max-width: 764px) {
                    font-size: 20px;
                    }
        }

    }

    .underline {
            margin: 30px 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(40deg,  rgba(255, 138, 43, 0.068) 10%, #ffa60097 30% , #ffffff 80%);
        }


    .faq-title {
        font-size: 60px;
        text-align: center;
        width: 100%;
        color: white;
        font-weight: 900;
        margin-bottom: 20px;


            @media (max-width: 1100px) {
                    font-size: 50px;
                    }

            @media (max-width: 764px) {
                    font-size: 40px;
                    }
    }
    
.card-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 20px;
    text-decoration: none;
    width: 90%;

        .card {
            text-decoration: none;
            border-radius: 0px;
            padding: 15px 30px;
            min-height: 12vh;
            height: auto;
            gap: 30px;
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: white;
            box-shadow: 0px 0px 10px 5px rgba(68, 68, 68, 0.44);
            color: black;
            border-radius: 10px;
            transition: 800ms ease all;

            @media (max-width: 1100px) {
            width: 100%;
            min-height: 10vh;
            }

            @media (max-width: 764px) {
            flex-direction: column;
            gap: 5px;
            align-items: center;
            padding: 5px 15px;
            
                }
    
                &:hover {
                cursor: pointer;
                transform: scale(1.05);
                filter: contrast(90%);
            }
    
            h3 {
                font-size: 16px;
                @media (max-width: 1400px) {
                    font-size: 14px;
                }

                @media (max-width: 1100px) {
                    text-align: center;
                }
                
            }
            p {
                font-size: 14px;
                font-weight: 400;
                @media (max-width: 1400px) {
                    font-size: 12px;
                }

                @media (max-width: 1100px) {
                    display: none;
                }
            }
            i {
                width: 30px;
                font-size: 22px;
                color: ${props => props.theme.secondary};
            }
            img {
                width: 50px;
                height: 50px;
                object-fit: scale-down;
            }
        }
    }
    
`