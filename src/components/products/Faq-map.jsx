import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { useNavigate, useLocation } from 'react-router-dom';
import faq from '../../data/faq.json'


const FaqMap = () => {

    const navegacion = useNavigate()
    const location = useLocation()


    return (
        <>
        {
            faq.filter(item => '/faq/' + item.link === location.pathname).map((faq, index) => {
                return (
                <ProductContainer key={faq.id}>
                    <h1 className="title">FAQ</h1>
                    <p>
                        <span onClick={() => navegacion('/faq')}>FAQ </span> / {faq.title}</p>
                    <h1
                    style={{margin: '0', padding: '20px 0px'}}
                    >{faq.title}</h1>
                            <div className="product-types1 col-2">
                                    <p>{faq.texts.text1}</p>
                                    <p>{faq.texts.text2}</p>
                                    <p>{faq.texts.text3}</p>
                                    <p>{faq.texts.text4}</p>
                                    <p>{faq.texts.text5}</p>
                                    <p>{faq.texts.text6}</p>
                                    <p>{faq.texts.text7}</p>
                                    <p>{faq.texts.text8}</p>
                        </div>
                </ProductContainer>
        
                )
            })
        }
        </>
    );
}
 
export default FaqMap;
