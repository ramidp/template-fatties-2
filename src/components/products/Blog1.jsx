import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Blog1 = () => {

    const navegacion = useNavigate()


    return (
        <>
        <span id="blog1"></span>
        <ProductContainer>
            <div className="title-btn">
                <h1 className="title">Blog</h1>
                <FontAwesomeIcon onClick={() => navegacion('/blog')} icon={faArrowLeft} />
            </div>
            <p>Blog / Servicio_personalizado</p>


                    <div className="product-types1 col-2">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}

                            <h1>Servicio Personalizado</h1>
                                
                                <h3>Tags:</h3>
                                <h3>
                                    Servicio, Personalización, Post-venta</h3>

                        <p>En Fatties tenemos un servicio completamente personaliza. No solo la venta, sino que también el post-venta, teniendo un número exlusivo de WhatsApp con atención inmediata y por nuestro personal.
                            <br />

                        </p>

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog1;
