import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estilofaq'
import { useState } from 'react';


const Faq2 = () => {

    const logowhatsapp = require('../../images/icons/whatsapp.png')

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    return (
        <>
        <ProductContainer>
            <h1 className="title">FAQ</h1>
            <p>
                <a href="/faq">
                FAQ 
                </a> / Titulo del FAQ sobre Calim</p>

                <div className="product-types1 mt-3">

                    <h2
                    style={{color: 'gray',
                    textAlign: 'left',
                    fontSize: '22px',
                    width: '100%',
                     }}
                    >
                        Texto Introductorio al Servicio con Calim y todas las dudas al respecto
                    </h2>
                    <br />

                    <h1 onClick={() => setShow2(!show2)}>Pregunta 1</h1>
                    {show2 &&
                    <>
                    <p>
                        Texto de Pregunta 1
                    </p>
                    <br />
                    </>
                    }
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq2;
