import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog'
import blogs from '../../data/blogs.json'

const Blog3 = () => {

    const banner = require('../../images/Blog/' + `${blogs[2].img}`)

    return (
        <>
        <ProductContainer>
                <h1 className="title">Blog</h1>
                <p>
                <a
                href="/blog"
                class="anchor-blog">
                Blog
                </a> / {blogs[2].title}</p>

                    <div className="product-types1">
                        <div className="col-12">
                            <h1
                            className="blog-title">
                            Transformación digital: para la mitad de los comercios, los consumidores gastan más cuando pagan con código QR o con tarjetas
                            </h1>
                            <img src={banner} alt="" />
                        </div>
                            
                            <h3><strong>Tags:</strong> Tag1, Tag2, Tag3</h3>

                            <p>
                            <strong>
                            Para los comercios PyME, la digitalización resulta una herramienta innovadora para aprovechar oportunidades en el actual contexto económico con alta inflación. En el mes de la vuelta a clases, los comercios del rubro con cobros digitales mostraron crecimiento en la facturación (+33,5%, en pesos constantes) y en el número de operaciones (+54,7%, en pesos constantes) respecto a 2022.
                            </strong>
                            </p>
                            <br />
                            <p>
                            <strong>Buenos Aires, 11 de abril de 2022.-</strong> La mitad de los comercios Pyme declara haber realizado esfuerzos de transformación digital en los últimos 6 meses y que los consumidores gastan más cuando pagan con código QR o tarjetas. En este contexto, adoptar nuevas soluciones de cobro encabeza la lista de iniciativas de transformación con el principal objetivo de aumentar sus ventas.
                            <br/>
                            <br/>
                            Los datos se desprenden de la primera entrega del informe de negocios digitalizados “Perspectiva de Comercio PyME” de Mercado Pago, un reporte mensual elaborado junto con la consultora Invecq, que refleja la evolución de la digitalización, a través de una encuesta realizada a más de 1.400 comercios PyME que operan con las herramientas de la plataforma.  
                            <br/>
                            <br/>
                            “Vendedores y compradores se adaptan cada vez más rápido a la transformación digital, con soluciones que ofrecen más opciones al cliente y, de ese modo, impulsan más ventas. En ese sentido, el informe Perspectiva de Comercio PyME nos permitirá tener un seguimiento mensual de la experiencia de los comercios que operan con soluciones de cobro digitales, en todos los rincones del país”, <strong>dijo Agustín Viola, Director de PyMEs de Mercado Pago.</strong>
                            <br/>
                            <br/>
                            El informe incluye además un análisis de los datos en el marco de la coyuntura económica del país. "En este difícil contexto macroeconómico, la digitalización de los comercios PyME resulta una herramienta de innovación útil como protección y aprovechamiento de oportunidades. Dado que la tasa actual de inflación implica grandes desafíos, este fenómeno posibilita un mayor set de opciones para resguardar a los establecimientos de la  desvalorización de sus flujos operativos”, precisó <strong>Santiago Bulat, Director de Invecq.</strong>

                            </p>

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog3;
