import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { useNavigate, useLocation } from 'react-router-dom';
import faq from '../../data/faq.json'


const FaqMap = () => {

    const navegacion = useNavigate()
    const location = useLocation()


    return (
        <>
        <span id="blog1"></span>
        {
            faq.filter(item => '/faq/' + item.link === location.pathname).map((faq, index) => {
                return (
                    <ProductContainer key={faq.id}>
                    <div className="title-btn">
                        <h1 className="mb-2 title">FAQ</h1>
                        <i className="fa fa-arrow-left" onClick={() => navegacion('/faq')}></i>
                    </div>
                    <p>FAQ / {faq.title}</p>
                            <div className="product-types1 col-2">
                                    <h1>{faq.title}</h1>
                                        
                                <p>{faq.innerText}
                                </p>
        
                        </div>
                </ProductContainer>
        
                )
            })
        }
        </>
    );
}
 
export default FaqMap;
