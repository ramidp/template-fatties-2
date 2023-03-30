import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import blogs from '../../data/blogs.json'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const BlogIndividual = ({blog}) => {

    const [show, setShow] = useState(false);
    
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
            <br />
            {blog.innerText2}
            </p>
            <a href={blog.faq}>Preguntas Frecuentes</a>
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

    const servicesArray = [
        {
            'id' : 1,
            'name' : 'Mercado Pago',
            'logo' : 'mplogo.png',
            'object' : '50% 10%'

        },
        {
            'id' : 2,
            'name' : 'Calim',
            'logo' : 'calim-logo.png',
            'object' : '50% 30%'

        },
        {
            'id' : 3,
            'name' : 'Fatties',
            'logo' : 'logo-fatties.png',
            'object' : '50% 40%'
        }
    ]


const Blog = () => {


    return (
        <ProductContainer>
        <span id="blog"></span>
            <h1 className="title">Blog</h1>
            <p className="mb-4 blog-text">Todas las novedades, guias y manuales que sean de utilidad serán vistas aqui.</p>
                <div className="products">
                    <BlogContainer>

                    {servicesArray.map((item) => {
                        return (
                            <div 
                            className="blog-brand"
                            key={item.id}>
                                <img 
                                style={{objectPosition: `${item.object}`,
                            }}
                                src={require('../../images/' + `${item.logo}`)} alt="" />
                                 {
                                blogs.filter(blog => item.name == blog.for).map((blog) => {
                                    return (
                                        <BlogIndividual 
                                        key={blog.id} 
                                        blog={blog}
                                        />
                                    )
                                })
                            }
                            </div>
                        )
                    })}
                    </BlogContainer>
                </div>
        </ProductContainer>
    );
}
 
export default Blog

const BlogContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .blog-brand {
        width: 30vw;
        padding: 10px;
    }

    img {
        box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
        border-radius: 15px;
        width: 25vw;
        height: 80px;
        object-fit: cover;
        filter: opacity(50%);
        margin: 20px 0;
    }

        .article {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px;
            min-width: 15vw;
            min-height: 15vh;
            height: auto;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
            transition: 0.2s linear;
    
            @media (max-width: 1100px) {
                width: 100%;
            }
    
            &:hover {
                transform: scale(1.03);
            }
            
            p {
                width: 90%;
                text-align: center;
                margin: 0;
                font-size: 14px;
            }
    
            h1 {
                width: 90%;
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
    
`
