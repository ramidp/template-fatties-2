import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import blogs from '../../data/blogs.json'
import React, {useState} from 'react'



const BlogArticleMap = () => {

    const navegacion = useNavigate()
    const location = useLocation()

    return (
        <>
        <span id="blog2"></span>
        {blogs.filter(blog => '/blog/' + blog.link === location.pathname).map((blog) => {
            return (
                <ProductContainer key={blog.id}>
                <div className="title-btn">
                <h1 className="title">Blog</h1>
                <FontAwesomeIcon onClick={() => navegacion('/blog')} icon={faArrowLeft} />
                </div>
            <p>(Aca puede ir la ruta o un subtitulo) Blog / {blog.title}</p>


                    <div className="product-types1 col-2">
                        <h1>{blog.title}</h1>
                        <div className="tags">
                            <h3><b>Tags:</b></h3>
                            <h3>{blog.tags.tag1}, {blog.tags.tag2}, {blog.tags.tag3}</h3>
                        </div>
                        <p>{blog.innerText }</p>
                </div>
                </ProductContainer>
            )
        })}
        
        </>
    );
}
 
export default BlogArticleMap;
