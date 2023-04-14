import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog'
import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import blogs from '../../data/blogs.json'



const Blog = () => {

    const [filteredData, setFilteredData] = useState(blogs)

    const handleChange = (e) => {
        const searchWord = e.target.value;
        const newFilter = blogs.filter((item => {
            return (
                item.title.toLowerCase().includes(searchWord.toLowerCase())
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

                    <BlogContainer>
                        {
                            blogs.map((blog) => {
                                return (
                                    <div 
                                    key={blog.id}
                                    className="article">
                                            <img src={require('../../images/Blog/' + `${blog.img}`)} alt="" />
                                            <h1>{blog.title}</h1>
                                            <p>{blog.subtitle}</p>
                                            <h2 onClick={() => navegacion('/blog/' +`${blog.link}`)}>Leer más</h2>
                                     </div>
                                    )
                            })
                        }
                    </BlogContainer>
                    <div className='searcher'>
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
                                    <p onClick={() => navegacion(`${item.link}`)} key={item.id}>{item.title}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
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
    padding: 0 20px 0 30px;
    height: auto;

    @media (max-width: 1100px) {
        width: 100%;
        padding: 20px 10px 0 10px;
    }

    .article {
            display: flex;
            flex-direction: column;
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
            gap: 10px;
    
            @media (max-width: 1100px) {
                width: 100%;
                min-height: auto;
            }
            
            &:hover {
                transform: scale(1.03);
            }
            
            p {
                width: 100%;
                text-align: left;
                margin: 0;
                font-size: 14px;
                z-index: 2;
            }
    
            h1 {
                min-height: 10vh;
                width: 100%;
                padding: 0;
                font-size: 18px;
                padding-bottom: 10px;
                font-weight: bold;
                z-index: 2;
                text-align: left;

                @media (max-height: 720px) {
                min-height: 15vh;
                }
              
            }
            h2 {
                font-size: 14px!important;
                margin: 0;
                width: fit-content;
                cursor: pointer;
                z-index: 2;
                color: ${props => props.theme.secondary};
                &:hover {
                    filter: contrast(50%);
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
