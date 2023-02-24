import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Faq2 = () => {

    const navegacion = useNavigate()


    return (
        <>
        <span id="blog1"></span>
        <ProductContainer>
            <div className="title-btn">
                <h1 className="mb-3" style={{fontSize: '50px'}}>FAQ</h1>
                <FontAwesomeIcon onClick={() => navegacion('/faq')} icon={faArrowLeft} />
            </div>
            <p>FAQ / Pagos</p>


                <div className="products">
                    <div className="product-types1 col-2">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}

                            <h1>Pagos</h1>
                                
                                {/* <h3>Tags:</h3>
                                <h3>
                                    </h3> */}

                        <p>Compras, pagos y suscripciones que realizaste.
                            <br />

                        </p>

                    </div>
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq2;
