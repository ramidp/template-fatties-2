import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Blog2 = () => {

    const navegacion = useNavigate()


    return (
        <>
        <span id="blog2"></span>
        <ProductContainer>
            <div className="title-btn">
                <h1 className="title">Blog</h1>
                <FontAwesomeIcon onClick={() => navegacion('/blog')} icon={faArrowLeft} />
            </div>
            <p>Blog / inflacion_100</p>


                    <div className="product-types1 col-2">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}

                            <h1>Inflacion al 100%</h1>
                                
                                <h3>Tags:</h3>
                                <h3>
                                    Servicio, Personalización, Post-venta</h3>

                        <p>
                        Texto Ejemplo. No tengo idea que escrbir, pero tengo que mandarle por lo menos 20 palabras o más
                        </p>

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog2;
