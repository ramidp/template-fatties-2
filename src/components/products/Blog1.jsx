import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog'
import blogs from '../../data/blogs.json'


const Blog1 = () => {

    const banner = require('../../images/Blog/' + `${blogs[0].img}`)

    return (
        <>
        <ProductContainer>
                <h1 className="title">Blog</h1>
            <p>
                <a
                href="/blog"
                style={{color: 'red',
                cursor: 'pointer',
                textDecoration: 'none'}}>
                Blog 
                </a> / {blogs[0].title}</p>

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

                    <ul>
                        <li><strong>Ir a la sección Costos:</strong>En la parte superior de la sección de costos, se muestran las configuraciones sobre cuotas que tienen los comercios.</li>
                        <li><strong>Ir a cuotas sin interés:</strong> Hay que ingresar en la primera sección dentro de costos se llama “Vendé en cuotas sin interés”</li>
                        <li><strong> Configurar el monto mínimo a partir del cual se ofrece cada cuota:</strong> La sección de cuotas sin interés se divide en 3:</li>
                            <ul>
                                <ol><strong>Encendido y apagado de cuotas sin interés:</strong> el comercio puede elegir si ofrece o no cuotas sin interés para sus clientes</ol>
                                <ol><strong> Cuotas que ofrece:</strong> el cliente elige hasta cuantas cuotas sin interés ofrece a sus clientes.</ol>
                                <ol><strong>Monto mínimo:</strong>Ahora el comercio podrá elegir para cada cuota, a partir de qué monto ofrece cuotas sin interés.</ol>
                            </ul>
                    </ul>
                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog1;
