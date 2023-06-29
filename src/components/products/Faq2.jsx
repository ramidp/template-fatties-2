import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estilofaq'
import { useState } from 'react';

const Faq2 = () => {

    const logowhatsapp = require('../../images/icons/whatsapp.png')

    const [show1, setShow1] = useState(false)

    return (
        <>
        <ProductContainer>
            <p>
                <a 
               className="faq-anchor"
               href="/faq">
                FAQ 
                </a> / Info FAQ sobre Calim</p>

                <div className="product-types1 mt-3">
                    <h2
                    className="subtitle-faq"
                    >
                        Texto sobre toda la información que se necesita para las preguntas frecuentes con el servicio Mercado Pago
                    </h2>
                    <br />

                    <div
                    style={{width: '100%',
                    gap: '20px'
                    }}
                    >
                        <div>
                        <h1 onClick={() => setShow1(!show1)}>¿Cómo empezar a gestionar mi contabilidad por Mercado Pago?</h1>
                        {show1 &&
                        <>
                        <p>
                            Podés enviarnos un WhatsApp a la siguiente línea de WhatsApp para que uno de nuestros asesores especializados en Mercado Pago se contacten con uds.
                            Contáctanos al 
                            <a style={{color: 'rgb(23, 146, 68)'}} target="_blank" href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, qué tal? Me gustaría hacerles una consulta."> WhatsApp
                            <img style={{height: '20px'}} src={logowhatsapp} alt="" />
                            </a>
                        </p>
                            <br />
                        </>
                        }
                        </div>
                    </div>
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq2;
