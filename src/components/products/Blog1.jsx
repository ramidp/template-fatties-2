import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'
import Form from '../tools/Form'

const Blog1 = () => {

    const sortedArray = blogs.sort((a, b) => a.id - b.id)

    const banner = require('../../images/Blog/' + `${sortedArray[0].img}`)

    return (
        <>
        <ProductContainer>
                <p
                className='anchor-link'
                > <a href="/blog"className="anchor-blog">Blog </a> / {sortedArray[0].title}</p>

                    <div className="product-types1 col-2">
                        <div className="col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            Configurar cuotas <strong>sin interés </strong>
                            con un <strong>monto mínimo</strong></h1>
                        </div>

                        <div className="underline"></div>
                            
                        <h3><strong>Tags:</strong> Cuotas Sin interés, Monto Mínimo, Fisco</h3>

                        <div className="blog-text">

                            <div className="wall-img">
                                <img 
                                rel='preload'
                                src={banner} alt="" />
                            </div>

                            <div className='inner-text'>
                                <h1>¿Qué beneficio da esta nueva herramienta?</h1>

                                    <p>
                                    Al poder elegir el monto mínimo a partir del cual se ofrecen cuotas sin interés, el comercio se asegura de que está absorbiendo el costo de financiamiento en ventas de montos relevantes y que no lo ofrece cuando la venta es de un monto chico.
                                    <br />
                                    <strong>Importante:</strong> En caso de que el comercio quiera seguir ofreciendo cuotas sin interés sin importar el monto mínimo, puede dejar en cada cuota el espacio en blanco “Sin monto mínimo” y la experiencia de venta será igual a la que viene teniendo hasta ahora, tanto el comercio como el cliente.
                                    </p>

                                    <h1>¿Cómo se configura esta nueva herramienta? </h1>

                                    <ul>
                                        <li><strong>Ir a la sección Costos:</strong> En la parte superior de la sección de costos, se muestran las configuraciones sobre cuotas que tienen los comercios.</li>
                                        <li><strong>Ir a cuotas sin interés:</strong> Hay que ingresar en la primera sección dentro de costos se llama “Vendé en cuotas sin interés”</li>
                                        <li><strong> Configurar el monto mínimo a partir del cual se ofrece cada cuota:</strong> La sección de cuotas sin interés se divide en 3:</li>
                                            <ol>
                                                <li><strong>Encendido y apagado de cuotas sin interés:</strong> El comercio puede elegir si ofrece o no cuotas sin interés para sus clientes</li>
                                                <li><strong> Cuotas que ofrece:</strong> El cliente elige hasta cuantas cuotas sin interés ofrece a sus clientes.</li>
                                                <li><strong>Monto mínimo:</strong>Ahora el comercio podrá elegir para cada cuota, a partir de qué monto ofrece cuotas sin interés.</li>
                                            </ol>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    {/* <Form/> */}

        </ProductContainer>
        </>
    );
}
 
export default Blog1;
