import styled from "styled-components";
import React, { useState, useEffect } from 'react'
import blogs from '../data/blogs.json'
import { useLocation } from 'react-router-dom';

const NewsAlert = () => {

const [display, setDisplay] = useState('flex')

const location = useLocation().pathname;
    

useEffect(() => {
    if (location == '/' || location == '/nosotros') {
        setDisplay('flex')
    } else {
        setDisplay('none')
    }

}, [])

    return ( 


        <Container
        style={{display: display}}
        >

           <h2
           className='news-closer'
            onClick={() => setDisplay('none')}
            >X</h2>
            <h2>Noticias</h2>

            {blogs.slice(0,3).map((blog) =>{
                return (
                    <div
                    key={blog.id}
                    className='new-div'
                    >
                        <a href={'/blog/' + blog.link}>
                            <h1>{blog.title}</h1>               
                        </a>
                    </div>
                )
            } )}
           
           </Container>
     );
}
 
export default NewsAlert;

const Container = styled.div`
    
    width: 100%;
    height: 2.5vh;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0vh;
    box-shadow: 0px 0px 10px 5px rgba(100, 100, 100, 0.219);

    @media (max-width: 1100px) {
        visibility: hidden;
    }

    .news-closer {
        width: 5vw;
        font-weight: 700;
        &:hover {
            cursor: pointer;
            filter: contrast(40%)        
        }

    }

    h2 {
        font-size: 14px;
        color: white;
        width: 12vw;
        background-color: ${prop => prop.theme.secondary};
        height: 100%;
        margin: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 764px) {
            width: 20vw;
        }
       
    }

    .new-div:nth-child(4) { animation-delay: 9s}
    .new-div:nth-child(5) { animation-delay: 18s}

    .new-div {
        width: 100vw;
        position: absolute;
        animation: slide-item 27s infinite;
        left: 100%;           


        @keyframes slide-item {
        0% { left: 100%; }
        100% { left: -100%; }
        }

        a { 
            width: 100%;
            text-decoration: none;
            h1 {
                margin: 0;
                padding: 0;
                text-align: center;
                color: black;
                font-weight: bold;
                font-size: 16px;
                cursor: pointer;              
               

                &:hover {
                    color: #e6e6e6;
                }
            }
        }
    }


`