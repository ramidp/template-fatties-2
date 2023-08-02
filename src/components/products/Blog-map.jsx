import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';
import blogs from '../../data/blogs.json'
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase/firebaseConfig';


const Blog = () => {

const CalimLogo = require('../../images/calim-logo.png')
    
    useEffect(() => {
        setFilteredData('')
    },[])

    const [filteredData, setFilteredData] = useState([])

    const handleChange = (e) => {
        const searchWord = e.target.value;
        const newFilter = blogs.filter((item => {
            return (
                item.title.toLowerCase().includes(searchWord.toLowerCase())
                )
        }));

        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }


    return (
        <ProductContainer>
        <span id="blog"></span>
            <h1 className="title">BLOG</h1>
            <div className='blog-text-bg'>
            <p className="blog-text">Novedades, guias y manuales.</p>
            </div>
            <div className="underline"></div>

            <div className="products">

                <div className='searcher'>
                        <div className="tag-searcher">
                            <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Buscador .." />
                        </div>
                        <div className="relative-pos">
                        {
                            filteredData.length > 0 ?
                            <div className="searched-data">
                            {
                                filteredData.slice(0, 10).sort((a, b) => b.id - a.id).map((item, index) => {
                                    return (
                                        <a href={'/blog/' + item.link} key={item.id}>{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                            :
                            <>
                            </>
                        }
                        </div>
                    </div>


                    <BlogContainer>
                        {
                            blogs.sort((a, b) => b.id - a.id).slice(0, 1).map((blog) => {
                                return (
                                    <div 
                                    key={blog.id}
                                    className="article-0">
                                            <div className="article-0-text">

                                                <div>
                                                    <h1>{blog.title}</h1>
                                                    <p>{blog.date}</p>
                                                </div>

                                                <div>
                                                    <a
                                                    onClick={() => logEvent(analytics, 'Blog | ' + `${blog.title}`)}
                                                    className="nav-btn"
                                                    href={'/blog/' + blog.link}>
                                                        Leer mas
                                                    </a>
                                                    <p
                                                    className="reading-time"
                                                    >
                                                    Menos de 3 minutos
                                                    <FontAwesomeIcon icon={faStopwatch}/>
                                                    </p>
                                                </div>

                                            </div>

                                            <div
                                            className='article-images'
                                            >
                                                <img 
                                                rel='preload'
                                                className="banner"
                                                src={require('../../images/Blog/' + `${blog.img}`)} alt="" />
                                                <img 
                                                rel='preload'
                                                className='icon-fixed'
                                                src={require('../../images/' + `${blog.icon}`)} alt="" />
                                            </div>

                                     </div>
                                    )
                            })
                        }

                        {
                            blogs.slice(1, blogs.length).map((blog) => {
                                return (
                                    <div 
                                    key={blog.id}
                                    className="article">
                                        <div
                                        className='article-images'
                                        >
                                            <img 
                                            rel='preload'
                                            className="banner"
                                            src={require('../../images/Blog/' + `${blog.img}`)} alt="" />
                                            <img 
                                            rel='preload'
                                            className='icon-fixed'
                                            src={require('../../images/' + `${blog.icon}`)} alt="" />
                                        </div>

                                            <h1>{blog.title}</h1>
                                            <p>{blog.date}</p>

                                        <div>
                                            <a
                                            onClick={() => logEvent(analytics, 'Blog | ' + `${blog.title}`)}
                                            className="nav-btn"
                                            href={'/blog/' + blog.link}>
                                                Leer mas
                                            </a>
                                            <p
                                            className="reading-time"
                                            >
                                            Menos de {blog.time} minutos
                                            <FontAwesomeIcon icon={faStopwatch}/>
                                            </p>
                                        </div>

                                     </div>
                                    )
                            })
                        }
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
    gap: 50px 20px;
    width: 100%;
    padding: 0 20px 0 30px;
    height: auto;

    @media (max-width: 1100px) {
        width: 100%;
        padding: 20px 10px 0 10px;
    }

    .article {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: calc(33.30% - 13.33px);
            min-height: 50vh;
            height: auto;
            transition: 0.2s linear;
            border-bottom: 1.5px solid white;
            
    
            @media (max-width: 1400px) {
                min-height: 60vh;
            }
            
            @media (max-width: 1100px) {
                width: 100%;
                min-height: auto;
                gap: 15px;
            }
    
            .nav-btn {
                font-size: 14px;
                text-decoration: none;
                color: white;
                cursor: pointer;
                width: fit-content;
                padding-bottom: 5px;

                @media (min-width: 2048px) {
                    font-size: 18px;
                }              


                &::after {
                    content: ' >>'
                }

                &:hover {
                    font-weight: bold;
                }
            }

            h1 {
                min-height: 8vh;
                width: 100%;
                padding: 10px 0;
                font-size: 26px;
                font-weight: 600;
                z-index: 2;
                text-align: left;
                color: white;

                @media (min-width: 2048px) {
                font-size: 30px;
                }

                @media (max-height: 720px) {
                min-height: 15vh;
                }

                @media (max-width: 1400px) {
                font-size: 24px;
                }

                @media (max-width: 1100px) {
                font-size: 22px;
                min-height: 5vh;
                }
              
            }

            p {     
                font-size: 14px;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;

                @media (min-width: 2048px) {
                    font-size: 20px;
                    }
                
                }
            .reading-time {
                font-size: 14px;
                color: #dddddd;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 10px;
                padding: 10px 0;
                margin: 0;

                @media (min-width: 2048px) {
                    font-size: 18px;
                }    

                svg {
                    font-size: 18px;
                    color: #dddddd;
                }

            }

            .article-images {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                background-color: white;

                .icon-fixed {
                    height: 4vh;
                    padding: 5px 0;
                    align-self: flex-end;
                    width: auto;
                    padding-right: 2vw;
                    object-fit: contain;
                    filter: contrast(150%);
                }

                .banner {
                    width: 100%;
                    height: calc(22vh - 4vh);
                    object-fit: cover;
                    object-position: 50% 20%;
    
                    @media (min-width: 2048px) {
                        height: 25vh;
                    }    
                }
            }


            .icon-div {
                height: 100px;
                width: 20.5%;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;

                @media (max-width: 1100px) {
                    width: 82%;
                }
                
                position: absolute;
                
                .icon-brand {
                    height: 50px;
                    width: 80px;
                    object-fit: scale-down;
                    padding: 5px;
                    margin-top: 10px; 
                    background-color: white;
                    border-radius: 15px;
                    
                    @media (max-width: 1100px) {
                        width: 60px;
                    }
                }
            }
        }

    .article-0 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 44vh;
            transition: 300ms ease all;
            
            @media (max-width: 1100px) {
                flex-direction: column-reverse;
                width: 100%;
                height: auto;
                gap: 15px;
            }
            
            .article-0-text {
                width: 35%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-bottom: 1.5px solid white;

                @media (max-width: 1100px) {
                    width: 100%;
                }


                p {
                    font-size: 14px;
                    color: white;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;

                    @media (min-width: 2048px) {
                    font-size: 18px;
                }    

                }

                .reading-time {
                    font-size: 14px;
                    color: #dddddd;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 0;
                    margin: 0;

                    @media (min-width: 2048px) {
                    font-size: 18px;
                    }    

                    svg {
                        font-size: 18px;
                        color: #dddddd;
                    }

                }

                .nav-btn {
                    text-decoration: none;
                    color: white;
                    cursor: pointer;
                    width: fit-content;
                    padding-bottom: 5px;
                    font-size: 14px;

                    @media (min-width: 2048px) {
                    font-size: 20px;
                    }


                @media (min-width: 2048px) {
                    font-size: 20px;
                    }

                @media (max-width: 1100px) {
                    padding-top: 15px;
                }

                &::after {
                    content: ' >>'
                }

                &:hover {
                    font-weight: bold;
                }
                }

                h1 {
                    width: 100%;
                    padding: 0;
                    font-size: 36px;
                    padding: 10px 0; 
                    
                    
                .article-images {
                    width: 100%;

                .icon-fixed {
                    background-color: #ffffff8b;
                    height: 5vh;
                    padding: 5px 0;
                    align-self: flex-end;
                    width: 100%;
                    object-fit: contain;
                    filter: brightness(0) invert(1) contrast(150%);
                }

                .banner {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    object-position: 50% 20%;
    
                    @media (min-width: 2048px) {
                        height: 250px;
                    }    
                }
            }
                    font-weight: 600;
                    z-index: 2;
                    text-align: left;
                    color: white;

                    @media (min-width: 2048px) {
                    font-size: 42px;
                    }
    
                    @media (max-width: 1400px) {
                    font-size: 30px;
                    }
                    
                    @media (max-width: 1100px) {
                    font-size: 22px;
                    }

                  
                }
            }

            .article-images {
                width: 65%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                background-color: white;

                @media (max-width: 1100px) {
                    width: 100%;
                }

                .icon-fixed {
                    height: 4vh;
                    padding: 5px 0;
                    width: auto;
                    padding-right: 2vw;
                    object-fit: contain;
                    filter: contrast(150%);
                }

                .banner {
                    width: 100%;
                    height: calc(100% - 4vh);
                    object-fit: cover;
                    object-position: 50% 20%;
    
                    @media (min-width: 2048px) {
                        height: calc(30vh - 4vh);
                    }    
                    @media (max-width: 1100px) {
                        height: calc(22vh - 4vh);
                    }    
                }
            }
        }
    
`
