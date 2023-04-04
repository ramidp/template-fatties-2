import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'

const Blog2 = () => {

    const banner = require('../../images/Blog/calim_1/calculadora.webp')

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
                </a> / Saldo a favor ingresos brutos</p>

                    <div className="product-types1">
                        <div className="col-12">
                            <h1
                            className="blog-title">
                            Por qué se genera saldo a favor 
                            <br />
                            de Ingresos Brutos</h1>
                            <img src={banner} alt="" />
                        </div>
                            
                            <h3><strong>Tags:</strong> Saldo a Favor, Ingresos Brutos, Fisco</h3>

                        <p>
                        Cuando hablamos de saldo a favor de un impuesto, nos referimos a un excedente de dinero que el fisco, como por ejemplo AFIP o ARBA, posee de un contribuyente. En la actualidad encontramos que, por aplicación de los diversos regímenes de recaudación, es frecuente el cúmulo de saldos a favor en Ingresos Brutos.
                        </p>
                        <p>Algunas razones por las que podés generar saldo a favor:</p>
                        
                        <ul>
                            <li>Te realizaron retenciones en acreditaciones bancarias sobre ingresos que no están gravados, es decir, sobre importes que no están alcanzados por el impuesto.</li>
                            <li>Realizaste un pago doble o erróneo de algún período.</li>
                            <li>Se aplicó de manera incorrecta el Convenio Multilateral. Recordemos que este régimen impositivo de Ingresos Brutos alcanza a aquellas personas que realizan operaciones comerciales en distintas provincias. Las múltiples retenciones de las diferentes jurisdicciones dan lugar a errores o imprecisiones que, muchas veces, generan saldo a favor.</li>
                        </ul>

                        <h1>¿Se puede pedir la devolución del saldo a favor de Ingresos Brutos?</h1>
                        <p><strong>Sí, en todas las provincias y CABA se puede tramitar la devolución del saldo a favor</strong>. Si bien cada jurisdicción se rige por sus normas locales, específicamente por sus códigos fiscales o tributarios, coinciden en la posibilidad de solicitar el recupero de los saldos a través de un procedimiento administrativo. También puede optarse por otras variantes que establecen los organismos de recaudación locales.</p>
                        <p><strong>Además de la solicitud de devolución, las provincias suelen ofrecer las siguientes opciones:</strong></p>
                        <ul>
                            <li>La reducción de la alícuota de Ingresos Brutos para que se consuma el saldo generado.</li>
                            <li>La emisión de un certificado de exclusión.</li>
                            <li>La compensación con otros impuestos locales e inclusive, en ciertos casos, como en Córdoba, la posibilidad de transferir el saldo a un tercero.
                            </li>
                        </ul>
                        <p>Es importante tener presente que el saldo a favor es dinero del contribuyente y, por lo tanto, podrá disponer del mismo para cancelar deudas con el fisco, consumirlo, o bien podrá serle devuelto. Para ello, deberá presentar el correspondiente reclamo administrativo ante ARBA, AGIP o la dirección de rentas en las que haya acumulado el saldo.</p>
                        <h1>Cuándo conviene iniciar el reclamo por saldo a favor</h1>
                        <p>Tal como mencionamos, para que puedas obtener la devolución del saldo a favor deberás hacer un <strong>reclamo administrativo ante el fisco local</strong>, cumpliendo con los requisitos formales del mismo y acompañando pruebas que constaten la existencia del saldo.
                        A partir del momento en el que inicies el reclamo, comenzarán a regir los intereses y se interrumpirá el plazo de prescripción. Por eso, es <strong>importante no demorarse para solicitar la devolución</strong> del saldo, ya que en la medida en que no se efectúe, no correrán los intereses y la deuda a tu favor podrá prescribir.
                        </p>
                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog2;
