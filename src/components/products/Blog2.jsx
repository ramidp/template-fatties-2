import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Blog2 = () => {

    const navegacion = useNavigate()

    return (
        <>
        <span id="blog1"></span>
        <ProductContainer>
            <div className="title-btn">
                <h1 className="mb-3" style={{fontSize: '50px'}}>Blog</h1>
                <FontAwesomeIcon onClick={() => navegacion(`/blog`)} icon={faArrowLeft} />
            </div>
            <p>Blog / Inflación 100% anual</p>

                    <div className="product-types1 col-2">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}

                            <h1>Inflación 100% anual</h1>
                                
                                <h3>Tags:</h3>
                                <h3>
                                    Inflación, Ejemplo#2</h3>

                        <p>Testeando un 2do Articulo de Blog. Nos vamos a la D
                            <br />

                        </p>

                </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog2;
