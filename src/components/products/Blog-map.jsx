import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';



const Blog = () => {

    const banner = require('../../images/Blog/mp_1/mp1.jpg')
    const banner2 = require('../../images/Blog/calim_1/calculadora.webp')
    const banner3 = require('../../images/Blog/fatties_1/gente-trabajando-2.jpg')

    const blogTitles = [
        {   
            id: 1,
            name: 'Ahora podes configurar tus cuotas sín interés con un monto mínimo',
            link: '/blog/mp_1',
        },
        {   
            id: 2,
            name: 'Por qué se genera saldo a favor de Ingresos Brutos',
            link: '/blog/calim_1'
        },
        {   
            id: 3,
            name: 'Tercer Ejemplo Fatties',
            link: '/blog/fatties_1'
        },
    ]

    const [filteredData, setFilteredData] = useState(blogTitles)

    const handleChange = (e) => {
        const searchWord = e.target.value;
        const newFilter = blogTitles.filter((item => {
            return (
                item.name.toLowerCase().includes(searchWord.toLowerCase())
                )
        }));
            setFilteredData(newFilter)
    }

    const navegacion = useNavigate()

    return (
        <ProductContainer>
        <span id="blog"></span>
            <h1 className="title">Blog</h1>
            <p className="mb-4 blog-text">Todas las novedades, guias y manuales que sean de utilidad serán vistas aqui.</p>
                <div className="products">
                    <div 
                    className='searcher'
                    >
                        <div className="tag-searcher">
                            <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Buscador .." />
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </div>
                        <div className="searched-data">
                        {
                            filteredData.slice(0, 10).sort((a, b) => b.id - a.id).map((item, index) => {
                                return (
                                    <p onClick={() => navegacion(`${item.link}`)} key={item.id}>{item.name}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <BlogContainer>
                        <div className="article">
                                <div className="article_text">
                                    <img src={banner} alt="" />
                                    <h1>Ahora podes configurar tus cuotas sín interés con un monto mínimo</h1>
                                    <p>Toda la información sobre como configurar tus cuotas sin interés</p>
                                    <h2 style={{color: 'red'}} onClick={() => navegacion('/blog/mp_1')}>Leer más</h2>
                                </div>
                        </div>

                        <div className="article">
                                <div className="article_text">
                                    <img src={banner2} alt="" />
                                    <h1>Por qué se genera saldo a favor de Ingresos Brutos</h1>
                                    <p>Todo lo que necesitas saber sobre saldo a Favor de Ingresos Brutos</p>
                                    <h2 style={{color: 'red'}} onClick={() => navegacion('/blog/calim_1')}>Leer más</h2>
                                </div>
                        </div>

                        <div className="article">
                                <div className="article_text">
                                    <img src={banner3} alt="" />
                                    <h1>Tercer Ejemplo Fatties</h1>
                                    <p>Articulo relacionado a Fatties</p>
                                    <h2 style={{color: 'red'}} onClick={() => navegacion('/blog/fatties_1')}>Leer más</h2>
                                </div>
                        </div>
                    </BlogContainer>
                </div>
        </ProductContainer>
    );
}
 
export default Blog

const BlogContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    width: 80%;
    padding: 0 40px;
    height: auto;

    .article {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 20px;
            width: 32%;
            min-height: 40vh;
            height: auto;
            box-shadow: 0px 0px 80px -30px rgba(0,0,0,0.44);
            transition: 0.2s linear;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
    
            @media (max-width: 1100px) {
                width: 100%;
            }
            
            &:hover {
                transform: scale(1.03);
            }

            .article_text {
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 10px;
                width: 100%;

            }
            
            p {
                width: 100%;
                text-align: left;
                margin: 0;
                font-size: 14px;
                z-index: 2;
            }
    
            h1 {
                width: 100%;
                padding: 0!important;
                font-size: 18px!important;
                padding-bottom: 10px;
                font-weight: bold;
                z-index: 2;
                text-align: left;
            }
            h2 {
                font-size: 14px!important;
                margin: 0;
                width: fit-content;
                cursor: pointer;
                z-index: 2;
                &:hover {
                    color: ${props => props.theme.secondary};
                }
            }
            img {
                width: 100%;
                height: 150px;
                object-fit: cover;
                object-position: 50% 20%;
                filter: opacity(70%);
            }
        }
    
`
