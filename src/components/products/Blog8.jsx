import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'
import { useState } from 'react'
import info from '../../data/info.json'


const Blog8 = () => {

    const sortedArray = blogs.sort((a, b) => a.id - b.id)

    const banner = require('../../images/Blog/' + `${sortedArray[7].img}`)   
    
    const logowhatsapp = require('../../images/icons/whatsapp.png')

    const [fullScreen, setFullScreen] = useState(false)

    const fullScreenImg = () => {
        setFullScreen(!fullScreen)
    }

    return (
        <>
        <ProductContainer>
                <p
                 className='anchor-link'
                >
                <a
                href="/blog"
                className="anchor-blog">
                Blog
                </a> / {sortedArray[7].title}</p>

                    <div className="product-types1">
                        <div className="col-12 col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            <strong>Certificación de Ingresos</strong>
                            </h1>

                        </div>

                            <div className="underline"></div>

                            
                            <h3><strong>Tags:</strong> Certificación, Ingresos, Calim</h3>

                            <div className="blog-text">

                            <div className="wall-img">

                             <img src={banner} alt="" />

                            </div>

                            <div className="inner-text">                                

                            <p><strong>¿Qué es la certificación de ingresos hecha por un contador público?</strong>
                            <br/>
                             Si te han solicitado una certificación de ingresos por parte de un contador y no sabes de qué se trata, aquí te lo explicamos. Es un procedimiento comúnmente requerido para varias transacciones y que demanda papeleo específico. A continuación, te lo detallamos.</p>

                             <p><strong>¿En qué consiste la certificación de ingresos por un contador público? </strong>
                             <br />
                             Cuando alguien tiene una cantidad inusual de dinero en su cuenta bancaria o billetera digital, que no concuerda con lo que regularmente declara como ingreso, necesita una certificación de ingresos realizada por un contador. Actualmente, todo dinero guardado electrónicamente o en bancos está supervisado por el Banco Central de la República Argentina y por entidades reguladoras como la AFIP o la UIF. Por lo tanto, es fundamental tener un respaldo que certifique la legalidad y procedencia de estos montos.</p>

                             <p><strong>Generalmente, entidades financieras o billeteras digitales solicitan estas certificaciones a los usuarios.</strong> Por ejemplo, recientemente, la UIF ha solicitado a Mercado Pago que los usuarios presenten pruebas del dinero que tienen en sus cuentas.</p>

                            <p><strong>Existen múltiples maneras de justificar el origen de los fondos:</strong> 
                            <br />
                            A veces, las declaraciones de IVA, Ganancias o Bienes Personales son suficientes. Un comprobante de salario o constancias de pago del Monotributo también sirven. Pero en situaciones particulares, como una adquisición importante, es necesaria la certificación de ingresos, la cual debe ser otorgada y validada por un contador público.</p>

                            <p><strong>¿Requieres una certificación de ingresos? Proporciona tu información y te asesoramos:</strong> 
                            <br />
                            <ol>
                                <li>Nombre y Apellido</li>
                                <li>Número de celular</li>
                                <li>Correo electrónico</li>
                            </ol>
                            ¿Qué documentos son necesarios para la certificación? El profesional contable evaluará tu caso específico y te guiará sobre la documentación que debes reunir para el proceso. Esto puede variar según el tipo de certificación y a dónde se presente. Para verificar el origen de tus fondos mediante la certificación, el contador podría pedir: </p>

                            <ul>
                                <li>Declaraciones oficiales de AFIP. (IVA, Ganancias)</li>
                                <li>Si no las posees, posiblemente debas mostrar tus facturas registradas en AFIP (descargables online).</li>
                                <li>Comprobantes de salario.</li>
                                <li>Comprobantes de rentas obtenidas.</li>
                                <li>Documentación bancaria de intereses por inversiones Con base en la información proporcionada, el contador elaborará la certificación de ingresos que evidenciará la legitimidad de tus fondos. Posteriormente, será esencial validarla en el Consejo Profesional de Ciencias Económicas.</li>
                            </ul>
                            <br />

                            <h2><strong>Certificación para Mercado Pago</strong></h2>
                            <p>
    
                             Como se mencionó anteriormente, la UIF está requiriendo a Mercado Pago y otros monederos electrónicos que los clientes justifiquen los saldos en sus cuentas.</p>

                             <p><strong>El objetivo principal de la UIF</strong> es prevenir el lavado de dinero y otros delitos financieros. Tiene autoridad para solicitar datos a diversos organismos y empresas, incluido Mercado Pago.
                             <br />
                             Los usuarios de Mercado Pago que han sido notificados por la UIF deben presentar los documentos requeridos para seguir usando la plataforma.
                             <br />
                             Existen varias alternativas para justificar los fondos en Mercado Pago: puedes presentar tus comprobantes de sueldo, declaraciones de IVA o Ingresos Brutos, o comprobantes de jubilación. Pero si no dispones de esta documentación, es imprescindible obtener la certificación de un contador público. Al enviarla a Mercado Pago, asegurarás la legitimidad de tus fondos y prevendrás problemas futuros.
                             </p>
                            
                            <br />
                            <h1>Contactános para cualquier información adicional o dudas:</h1>

                            <a 
                            className='whatsapp'
                            href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + 
                            "&text=Hola, Me gustaría saber más sobre la Certificación de Ingresos"}                                 
                                    target="_blank">
                                        Escribinos por 
                                    <img height='30px' src={logowhatsapp} alt="" />
                            </a>
                            </div>
                        </div>

                    </div>

                    {/* <Form/> */}

        </ProductContainer>
        </>
    );
}
 
export default Blog8;
