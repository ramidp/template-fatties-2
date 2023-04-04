import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { useNavigate } from 'react-router-dom';

const Blog1 = () => {

    const navegacion = useNavigate()

    const banner = require('../../images/Blog/mp_1/mp1.jpg')

    return (
        <>
        <span id="blog1"></span>
        <ProductContainer>
                <h1 className="title">Blog</h1>
            <p><span
                style={{color: 'red',
                cursor: 'pointer',    
            }}
            onClick={() => navegacion('/blog')}
            >Blog</span> / Configuración Cuotas Sin Interés</p>

                    <div className="product-types1 col-2">
                        <div className="col-12">
                            <h1
                            className="blog-title">
                            Ahora puedes configurar tus cuotas 
                            <br />
                            sin interés con un monto mínimo</h1>
                            <img src={banner} alt="" />
                        </div>
                            
                        <h3><strong>Tags:</strong> Cuotas Sin interés, Monto Mínimo, Fisco</h3>

                        <h1>¿Qué beneficio da esta nueva herramienta?</h1>

                    <p>
                    Al poder elegir el monto mínimo a partir del cual se ofrecen cuotas sin interés, el comercio se asegura de que está absorbiendo el costo de financiamiento en ventas de montos relevantes y que no lo ofrece cuando la venta es de un monto chico.

                    <strong>Importante:</strong> En caso de que el comercio quiera seguir ofreciendo cuotas sin interés sin importar el monto mínimo, puede dejar en cada cuota el espacio en blanco “Sin monto mínimo” y la experiencia de venta será igual a la que viene teniendo hasta ahora, tanto el comercio como el cliente.
                    </p>

                    <h1>¿Cómo se configura esta nueva herramienta? </h1>

                    <p><strong>Ir a la sección Costos:</strong>
                        En la parte superior de la sección de costos, se muestran las configuraciones sobre cuotas que tienen los comercios.
                        <br />
                        Ir a cuotas sin interés: Hay que ingresar en la primera sección dentro de costos se llama “Vendé en cuotas sin interés”
                        <br />
                        Configurar el monto mínimo a partir del cual se ofrece cada cuota: La sección de cuotas sin interés se divide en 3:
                        <br />
                        Encendido y apagado de cuotas sin interés: el comercio puede elegir si ofrece o no cuotas sin interés para sus clientes
                        <br />
                        Cuotas que ofrece: el cliente elige hasta cuantas cuotas sin interés ofrece a sus clientes.
                        <br />
                        <strong>Monto mínimo:</strong>Ahora el comercio podrá elegir para cada cuota, a partir de qué monto ofrece cuotas sin interés.
                        </p>

                        

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog1;
