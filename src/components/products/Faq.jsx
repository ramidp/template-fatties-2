import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import faq from '../../data/faq.json'
import {useState} from 'react'

// Lo que se puede hacer es que estos puntos te manden a los links de MP Ayuda
// Podemos crearlos de 0, pero bueno, habria que ver bien el texto. (Creo que es lo mejor para que todo se quede DENTRO de la pagina)

const Faq = () => {

    const navegacion = useNavigate()

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
            <p 
            style={{width: "50%"}}
            >FAQ / </p>
            <h1>¿Con que podemos ayudarte?</h1>

            <div className="tag-searcher col-12 mb-3">
                <input
                type="text"
                onChange={handleChange}
                placeholder="Buscador por Titulo? Por texto interno? .." />
            </div>


        <div className="card-box">
            {
            filteredData.slice(0, 10).map((faq, index) => {
                return (
                    <div key={faq.id} onClick={() => {navegacion('/faq/' + `${faq.link}`)}} className="card">
                    <img src={require('../../images/' + `${faq.icon}`)} alt="" />
                        <div>
                            <h3>
                                <b>{faq.title} </b>
                                 </h3>
                            <p
                            style={{margin: '0'}}
                            >{faq.outterText}</p>
                        </div>
            </div>
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
    min-height: 70vh;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
    padding-top: 20px; 
    padding: 20px 50px; 


    .tag-searcher {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;

        input {
            width: 60%;
            height: 40px;
            padding-left: 10px;
            @media (max-width: 1100px) {
                width: 80%;
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

    h1 {
        font-size: 24px;
        margin-bottom: 8px;
        text-align: center;
        @media (max-width: 1100px) {
            font-size: 24px;
            margin-bottom: 10px;
            
        }
    }

    .faq-title {
        width: 50%;
        text-align: left;
        color: darkgray;
        font-size: 30px;
        margin-bottom: 8px;

    }
    
.card-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 20px;
    text-decoration: none;
    width: 100%;

        .card {
            border-radius: 0px;
            padding: 15px 30px;
            gap: 40px;
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: white;
            box-shadow: 0px 0px 40px -20px rgba(0,0,0,0.44);
            color: black;

            @media (max-width: 1100px) {
            width: 80%;
        }
    
                &:hover {
                cursor: pointer;
                border-left: 5px solid ${props => props.theme.primary};
                border-right: 5px solid ${props => props.theme.primary};
                filter: contrast(90%);
            }
    
            h3 {
                font-size: 16px;
            }
            p {
                font-size: 14px;
                font-weight: 300;
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
                width: 40px;
                height: 40px;
            }
        }
    }
    
`