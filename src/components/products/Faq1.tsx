import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Faq1 = () => {

    const navegacion = useNavigate()


    return (
        <>
        <span id="blog1"></span>
        <ProductContainer>
            <div className="title-btn">
                <h1 className="mb-2 title">FAQ</h1>
                <FontAwesomeIcon onClick={() => navegacion('/faq')} icon={faArrowLeft} />
            </div>
            <p>FAQ / Cuenta Mercado Pago</p>


                    <div className="product-types1 col-2">
                    {/* <FontAwesomeIcon icon={faAddressBook} /> */}

                            <h1>Cuentas Mercado Pago</h1>
                                
                                {/* <h3>Tags:</h3>
                                <h3>
                                    </h3> */}

                        <p>Ingresos, transferencias, extracciones, inversiones y tarjetas
                            <br />

                        </p>

                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq1;
