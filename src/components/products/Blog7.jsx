import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'
import { useState } from 'react'
import info from '../../data/info.json'


const Blog7 = () => {

    const sortedArray = blogs.sort((a, b) => a.id - b.id)

    const banner = require('../../images/Blog/' + `${sortedArray[6].img}`)   
    

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
                </a> / {sortedArray[6].title}</p>

                    <div className="product-types1">
                        <div className="col-12 col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            <strong>Liquidación de sueldo en Argentina: </strong> los cinco aspectos claves
                            </h1>

                        </div>

                            <div className="underline"></div>

                            
                            <h3><strong>Tags:</strong> Liquidación sueldos, Haberes, Calim</h3>

                            <div className="blog-text">

                            <div className="wall-img">

                             <img src={banner} alt="" />

                            </div>

                            <div className="inner-text">

                                <h3>Liquidación de haberes en Argentina: qué es, cómo se hace y qué tener en cuenta para realizar el proceso de forma correcta y, a la vez, simple.</h3>     
                                <br/>  

                                <h1>Qué significa liquidación de haberes</h1>
                                <br />
                                <p><strong>La liquidación de sueldos o haberes es el cálculo</strong> que realiza una empresa o empleador para determinar la remuneración que tiene que recibir un empleado. En líneas generales, la misma se realiza de manera mensual, aunque también puede efectuarse quincenal o semanalmente.
                                <br />Para llevar a cabo la liquidación de haberes en Argentina, se debe considerar el salario básico del trabajador, las cargas sociales correspondientes y otros aspectos fijos o particulares del período que se está liquidando: conceptos no remunerativos, antigüedad, vacaciones, feriados, presentismo, descuentos sindicales, entre otras cosas.</p>
                                <br />
                                <h4>¿Necesitás ayuda para liquidar tus sueldos? Te asesoramos:</h4>

                                <a 
                                href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + 
                                "&text=Hola, Me gustaría saber más sobre la Liquidación de haberes"}                                 
                                        target="_blank">
                                            Contacto
                                        <img height='30px' src={logowhatsapp} alt="" />
                                </a>
                                <br />
                                <br />

                                <p><strong>Gestión de Salarios en Argentina:</strong> Aspectos fundamentales a considerar
                                    <br />
                                Definiendo la gestión de salarios Cuando hablamos de gestión de retribuciones o salarios, nos referimos a la tarea que una organización o jefe lleva a cabo para calcular la cantidad que corresponde abonar a un colaborador. Usualmente, esta acción es de carácter mensual, pero también puede ser quincenal o incluso semanal.
                                Para gestionar adecuadamente los salarios en Argentina, es primordial tener en cuenta el ingreso base del colaborador, las obligaciones sociales vinculadas y otras variables propias del periodo que se está gestionando, tales como bonos no salariales, tiempo de servicio, días festivos, bonificaciones por puntualidad y asistencia, retenciones sindicales y demás.
                                </p>

                                <br />


                                <p><strong>Pilares en la gestión de salarios en Argentina </strong></p>

                                    <ul>
                                        <li><strong>Inscripción de trabajadores:</strong> Antes de que un empleado inicie sus labores, es imperativo registrarlos en AFIP. Dicha inscripción se concreta a través del portal de AFIP, en la sección "Simplificación Registral- Empleadores", ingresando con el CUIT y Clave Fiscal del empleador.</li>

                                        <li><strong>Proceso y entrega de retribuciones:</strong> Para que la gestión salarial sea eficaz, es necesario contar con una plataforma de gestión salarial ágil y que esta tarea sea supervisada por un experto actualizado en el área. Una vez finalizado el proceso, los recibos de salarios deben ser emitidos en dos copias, conservando el ejemplar que el trabajador firma. </li>

                                        <li><strong>Manejo del Libro Digital:</strong> de Salarios en AFIP AFIP ha incorporado una herramienta en línea para facilitar la consolidación de tareas de los empleadores. No obstante, es vital comprender que esta herramienta no excluye el requerimiento del libro físico.</li>

                                        <li><strong>Presentación del Formulario 931:</strong> Es un documento clave que las entidades deben suministrar mensualmente a AFIP, detallando las responsabilidades sociales vinculadas a sus empleados.</li>

                                        <li><strong>Emisión de comprobantes sindicales:</strong> Si la actividad de la entidad está asociada a un sindicato, es imperativo registrarse y realizar las contribuciones correspondientes, facilitando los comprobantes adecuados del respectivo sindicato.</li>
                                    </ul>
                                          
                                    <p>Brindamos una solución integral en la gestión salarial, ayudando a empresas y profesionales del área. Nuestro enfoque combina diversas soluciones, desde el proceso de retribución hasta la atención contable continua.
                                    <br />
                                    <strong>Conclusión:</strong> La gestión correcta de retribuciones en Argentina es esencial. Ya sea que sigas los pasos adecuados o cuentes con profesionales especializados, asegúrate de estar en regla y de brindar lo justo a los colaboradores.
                                    </p>

                                    <p><strong>Nuestro plan incluye: </strong></p>

                                        <ul>
                                            <li>Generación y presentación del Libro de sueldos digital (con configuración inicial de parámetros).</li>
                                            <li>Presentación del Formulario 931. </li>
                                            <li>Actualización de escalas salariales según convenio. </li>
                                            <li>Altas y bajas de empleados.</li>
                                            <li>Emisión de boletas sindicales.</li>
                                            <li>Liquidación de salario por despido.</li>
                                            <li>Liquidación final por renuncia.</li>
                                            <li>Entrega de recibos de sueldo a través de la app.</li>
                                            <li>Soporte Contable permanente vía WhatsApp. </li>
                                            <li>Videollamada inicial con uno de nuestros contadores para especificar detalles y aclarar dudas. </li>
                                            
                                        </ul>
                                        <br />

                                        <h1>¡Liquidamos los sueldos de tus empleados!</h1>

                                            
                                        <a 
                                        className='whatsapp'
                                        href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + 
                                        "&text=Hola, Me gustaría saber más sobre la Liquidación de haberes"}                                 
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
 
export default Blog7;
