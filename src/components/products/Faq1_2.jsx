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
                </a> / Sobre Seguridad y Transparencia</p>

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
                            
                        <h1 onClick={() => setShow1(!show1)}>¿Cómo garantizan la seguridad de mis transacciones?</h1>
                        {show1 &&
                        <div className="faq-hidden-text">
                        <p>Ofrecemos una propuesta integral. No solo facilitamos soluciones financieras, sino que también brindamos servicios contables de la mano de Calim, y opciones en áreas de seguridad y salud. Estamos comprometidos con satisfacer las diversas necesidades de negocios, comercios y empresas. Si te interesa nos podés contactar a través de nuestra página web o a nuestro numero de contacto.
                        </p>                        
                        </div>
                        }
                        </div>

                        <div>
                            <h1 onClick={() => setShow2(!show2)}>¿Tienen algún sistema de soporte para dudas o problemas?</h1>
                            {   show2 &&
                        <div className="faq-hidden-text">
                            <p>Sí, contamos con un equipo de soporte dedicado para resolver todas tus dudas o consultas. Puedes contactarnos a través de nuestra página web o al número de contacto proporcionado.
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
