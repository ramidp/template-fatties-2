import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { useNavigate, useLocation } from 'react-router-dom';
import faq from '../../data/faq.json'
import React from 'react'



const FaqMap = () => {

    const location = useLocation()

    return (
        <>
        {
            faq.filter(item => '/faq/' + item.link === location.pathname).map((faq, index) => {
                return (
                <ProductContainer key={faq.id}>
                    <h1 className="title">FAQ</h1>
                    <p><a href="/faq">FAQ </a> / {faq.title}</p>
                    
                    
                    <div className="faq-box">
                        <h1>{faq.title}</h1>
                        <p>{faq.answerTitle}</p>
                        <br />
                        <h1>{faq.texts.question1}</h1>
                        <p>{faq.texts.answer1}</p>
                        <br />
                        <h1>{faq.texts.question2}</h1>
                        <p>{faq.texts.answer2}</p>
                        <br />
                        
                    </div>
                </ProductContainer>
        
                )
            })
        }
        </>
    );
}
 
export default FaqMap;
