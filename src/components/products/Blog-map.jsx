import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import blogs from '../../data/blogs.json'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";



const BlogIndividual = ({blog}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
        <div 
        className="article">
            <h1>{blog.title}</h1>
            <p>{blog.outterText}</p>
            <h2 style={{color: 'red'}} onClick={() => setShow(true)}>Leer más</h2>
        </div>
      <Modal 
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}>
            
        <Modal.Header>
          <Modal.Title>
            <div className="title">
                <h1
                style={{fontSize: '28px'
            }}>
                <b>
                {blog.title}
                </b>
                </h1>
                <button onClick={() => setShow(false)}>X</button>
            </div>
            <p>Blog / {blog.link}</p>
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p
            style={{color: 'black'}}
            >
            {blog.innerText}
            </p>
            </Modal.Body>
        <Modal.Footer>
            <p>Tags:</p>
                <p className="tags">
                {blog.tags.tag1}
                </p>
                <p className="tags">
                {blog.tags.tag2}
                </p>
                <p className="tags">
                {blog.tags.tag3}
                </p>

        </Modal.Footer>
      </Modal>
        </>
    )

}


const Blog = () => {

    const navegacion = useNavigate()

    const animation = 'zoom-in'

    useEffect (() => {
        Aos.init({
            duration: 1500,
            once: true,
        });
    },[])


    return (
        <>
        <span id="blog"></span>
        <ProductContainer>
            <h1 className="title">Blog</h1>
            <p className="mb-4 blog-text">Todas las novedades, guias y manuales que sean de utilidad serán vistas aqui.</p>

                <div className="products">
                    {blogs.map((blog, index) => {
                        return (
                        <div
                        data-aos={animation}
                        key={index} onClick={() => navegacion ("/blog/" + `${blog.link}`)} 
                        className="product-types"
                        >
                        <FontAwesomeIcon icon={faAddressBook} />
                            <h1>{blog.title}</h1>
                            <p>{blog.outterText}</p>
                        </div>
                        )
                    })}
                    <BlogContainer>
                        <h1 className="pt-4">Modales</h1>
                        <div className="modal-box">
                        {
                            blogs.map((blog) => {
                                return (
                                    <BlogIndividual 
                                    key={blog.id} 
                                    blog={blog}
                                    />
                                )
                            })
                        }
                        </div>
                    </BlogContainer>

                    
                    
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog

const BlogContainer = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    .modal-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        padding: 20px;
        flex-wrap: wrap;
        gap: 10px;

        @media (max-width: 1100px) {
            flex-direction: column;
        }

        .article {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px;
            min-width: 15vw;
            max-width: 30vw;
            height: 15vh;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
    
            @media (max-width: 1100px) {
                width: 100%;
            }
    
            &:hover {
                background-color: ${props => props.theme.secondaryOpact};
            }
            
            p {
                width: 50%;
                text-align: center;
                margin: 0;
                font-size: 14px;
            }
    
            h1 {
                width: auto;
                padding: 0!important;
                font-size: 16px!important;
                padding-bottom: 10px;
                font-weight: bold;
            }
            h2 {
                font-size: 14px!important;
                margin: 0;
                width: fit-content;
                cursor: pointer;
                &:hover {
                    color: ${props => props.theme.secondary};
                }
            }
        }
    }

   
    
`
