import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estilofaq'
import { useState } from 'react';

const Faq1 = () => {

    const logowhatsapp = require('../../images/icons/whatsapp.png')

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    return (
        <>
        <ProductContainer>
            <p>
                <a 
               className="faq-anchor"
               href="/faq">
                FAQ 
                </a> / ¿Quiénes es Fatties?</p>

                <div className="product-types1 mt-3">
                    {/* <h2
                    className="subtitle-faq"
                    >
                        Somos una comercializadora ubicada en Haedo, zona oeste de Argentina, con una trayectoria de 5 años en el mercado. 
                        Actualmente, representamos a 3000 comercios activos y trabajamos con reconocidas marcas como Mercado Pago y Calim estudio contable digital.
                    </h2> */}
                    <br />

                    <div
                    style={{width: '100%',
                    display: "flex",
                    flexDirection: 'column',
                    gap: '20px'
                    }}
                    >
                        <div>
                            
                        <h1 onClick={() => setShow1(!show1)}>¿Quiénes somos?</h1>
                        {show1 &&
                        <div className="faq-hidden-text">
                        <p>Somos una comercializadora ubicada en Haedo, zona oeste de Argentina, con una trayectoria de 5 años en el mercado. Actualmente, representamos a 3000 comercios activos y trabajamos con reconocidas marcas como Mercado Pago y Calim estudio contable digital.
                        </p>                        
                        </div>
                        }
                        </div>

                        <div>
                            <h1 onClick={() => setShow2(!show2)}>¿Como nació nuestra empresa?</h1>
                            {   show2 &&
                        <div className="faq-hidden-text">
                            <p>Nuestra empresa nació con el propósito de ser el nexo entre comercios y soluciones financieras y contables, buscando siempre ofrecer los mejores servicios y herramientas.
                        </p>  
                            </div>
                            }
                        </div>
                        

                        <div>
                        <h1 onClick={() => setShow3(!show3)}>¿Por qué confiar en nosotros?</h1>
                        {
                            show3 &&
                            <div className="faq-hidden-text">
                            <p>Contamos con una experiencia en el rubro de 5 años, junto con nuestra extensa cartera de comercios activos y alianzas con marcas líderes, avala nuestro compromiso y seriedad en el mercado.
                                </p>
                            </div>
                        }
                        </div>           
                    </div>
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq1;
