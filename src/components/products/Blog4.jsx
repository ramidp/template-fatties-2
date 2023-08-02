import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'

const Blog4 = () => {

    const banner = require('../../images/Blog/' + `${blogs[3].img}`)

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
                </a> / {blogs[3].title}</p>

                    <div className="product-types1">
                        <div className="col-12 col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            <strong>Vinculá tu lector Smart a tu QR impreso</strong>
                            </h1>

                            <h2>Llevá el control de tus cobros de QR desde tus lectores Point.</h2>
                        </div>

                            <div className="underline"></div>

                            
                            <h3><strong>Tags:</strong> QR, Lector, Point</h3>

                            <div className="blog-text">

                            <div className="wall-img">

                             <img                 
                             rel='preload'
                             src={banner} alt="" />

                            </div>

                            <div className="inner-text">
                                <p>
                                <strong>Los comercios que exhiben el QR en el sector de cobro venden 50% más que aquellos comercios que no lo hacen.</strong>  Conocé los beneficios de esta integración que agilizarán tu experiencia de cobro para vos y tus clientes.
                                </p>
                                <br/>
                                <h1>¿Cuáles son los beneficios de vincular tu lector Point con tu QR impreso? </h1>
                                <ul>
                                    <li><strong>Escribís el monto a cobrar:</strong> cuando tu cliente escanea el QR impreso ya le aparecerá el monto en su celular. </li>
                                    <li><strong>Podés imprimir el comprobante de pago: </strong>cuando tu cliente confirme el pago podés imprimir y entregar el comprobante de la operación.  </li>
                                    <li><strong>Ves todos tus cobros en un mismo lugar:</strong> podés ver todos los cobros que hayas realizado en tu lector Point. </li>
                                </ul>
                                
                                <h1>Cómo integrar el QR impreso al Point Smart según cada caso</h1>
                                <p>Si querés integrar el QR impreso a tu Point Smart, tenés que seguir estos pasos.</p>
                                <ol>
                                    <li>Apagá tu Point Smart mientras hacés la integración desde tu celular.</li>
                                    <li>Abrí la app de Mercado Pago e ingresá al <strong>Menú</strong>,  podés hacerlo desde tu computadora o desde tu celular. Si tenés Android, lo vas a encontrar en la parte superior. Si tenés iOS, lo vas a encontrar en la parte inferior. </li>
                                    <li>Accedé a la sección <strong>Tu Negocio</strong> y elegí <strong>Locales y Cajas.</strong></li>
                                    <li>Seleccioná el local asociado a tu Point Smart e ingresá a <strong>Lectores.</strong></li>
                                    <li>Elegí el lector Smart que querés integrar a tu QR impreso y seleccioná <strong>Cambiar la caja asociada</strong> al lector en el menú ubicado a la derecha.</li>
                                    <li>Seleccioná el local y la caja que correspondan a tu QR impreso.</li>
                                    <li>Encendé tu Point Smart y hacé el cobro de prueba.</li>
                                    <p>¡Listo! El QR y el Point están integrados y puedes imprimir un comprobante cada vez que cobres con tu QR impreso.</p>
                                </ol>
                                
                                <h1>¿Cómo hacer un cobro de prueba?</h1>
                                <p>Para confirmar que la vinculación fue exitosa, te recomendamos hacer un cobro de prueba, para esto vas necesitar contar con un celular distinto del de la cuenta. </p>
                                <ol>
                                    <li>Escaneá el QR impreso que vinculaste con un celular que no sea el de la cuenta. Si al escanear ya te aparece el monto que pusiste en el smart, tu QR está vinculado con el lector. Si en el caso contrario, te pide que ingreses el monto, es porque la vinculación no fue exitosa, en ese caso te recomendamos que vuelvas a empezar e intentes con otra caja.</li>
                                    <li>Ingresá el monto de la venta en el Point Smart y seleccioná la opción Código QR</li>
                                    <li>Cuando tu Point muestre el QR, pedile a tu cliente que escaneé el QR impreso que exhibís en tu local.</li>
                                    <li>Al escanear, tu cliente verá el monto en su celular y elegirá el medio de pago. Si no puede ver el monto, debes volver a realizar la vinculación entre tu Point Smart y el QR.</li>
                                    <li>Una vez que tu cliente confirme el pago, podrás imprimir y entregar el comprobante de compra desde tu Point y la transacción quedará en las actividades del lector.</li>
                                </ol>

                                <p><strong>Conocé más sobre las ventajas que el QR de Mercado Pago tiene para tu local</strong></p
                                >
                                <a 
                                target='_blank'
                                href="https://vendedores.mercadolibre.com.ar/nota/buenas-practicas-para-vender-con-codigo-qr-en-tu-local">Buenas prácticas para vender con código QR en tu local</a>


                            </div>
                        </div>

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog4;
