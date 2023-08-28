import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'
import { useState } from 'react'
import info from '../../data/info.json'


const Blog7 = () => {

    const sortedArray = blogs.sort((a, b) => a.id - b.id)

    const banner = require('../../images/Blog/' + `${sortedArray[6].img}`)   
    
    const img1 = require('../../images/Blog/calim_3/img1.webp')
    const img2 = require('../../images/Blog/calim_3/img2.webp')

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

                                <a href={"https://api.whatsapp.com/send?phone=" + `${info.whatsapp}` + 
                                "&text=Hola, Me gustaría saber más sobre la Liquidación de haberes"}                                 
                                        target="_blank">
                                            Contacto
                                        <img height='30px' src={logowhatsapp} alt="" />
                                </a>

                    

                                <br />
                                <br />
                                <h1>Cómo liquidar haberes en Argentina</h1>
                                <p>La liquidación de haberes es un proceso que va más allá del cálculo del salario y la confección de los recibos de sueldo. Cada país posee leyes laborales distintas que implican derechos y obligaciones para las empresas y para los trabajadores. En Argentina, la Ley de Contratos de Trabajo Nº 20.744 regula las relaciones laborales del trabajo en relación de dependencia. 
                                <br />
                                Aquellos que deseen contratar trabajadores para su negocio están obligados, según ley, a registrarlos en AFIP al inicio de actividades, entregarles de forma mensual (o de acuerdo al contrato) el recibo de sueldo, presentar el Libro de sueldos digital en caso de haber sido notificados por AFIP y declarar de forma mensual las cargas sociales. Además, deberán estar al tanto de las novedades y aumentos sindicales en caso que el rubro así lo requiera. 
                                <br />
                                A continuación detallaremos cada uno de esto aspectos para la liquidación de haberes en Argentina:</p>
                                <br />

                                
                                <h4>1- Dar de alta a los empleados:</h4>
                                <p>Inscribir a los empleados en AFIP es el paso inicial y obligatorio al comenzar el vínculo laboral. Los mismos deberán ser registrados con fecha previa al día en el que comiencen a prestar servicios.

                                El trámite de alta se realiza a través de la opción “Simplificación Registral- Empleadores” de la web de AFIP. Se accede con el CUIT y Clave Fiscal del empleador.

                                Desde el ítem “Registrar nuevas altas”, se ingresarán los datos de los trabajadores y los detalles de la contratación:</p>

                                <ul>
                                    <li>CUIL del empleado</li>
                                    <li>Obra Social</li>
                                    <li>Sucursal donde se desempeñarán las tareas.</li>
                                    <li>Tipo de actividad</li>
                                    <li>Puesto</li>
                                    <li>Modalidad de contrato</li>
                                    <li>Remuneración acordada</li>
                                    <li>Fecha de inicio</li>
                                </ul>
                                <p>Una vez ingresados los datos, se podrá emitir la constancia denominada “Clave de Alta Temprana”.</p>
                                
                                <img className='short-img' src={img1} alt="" />
                                <br />
                                <br />
                             
                                <h4>2- Realizar la liquidación de sueldos y jornales</h4>
                                      <p>Llevar a cabo una correcta liquidación de haberes es esencial para poder abonar a los empleados la remuneración correspondiente, con los ítems y descuentos obligatorios. Estos datos se reflejarán en el recibo de sueldo que se entregará al trabajador cada mes. 
                                <br />
                                <strong>Al momento de hacer una liquidación de sueldos es esencial tener en cuenta dos aspectos:</strong></p>

                                <ol>
                                    <li>Contar con un sistema de liquidación de sueldos que facilite el ingreso y procesamiento de datos y novedades.</li>
                                    <li>Que la tarea sea realizada por un profesional que posea conocimientos específicos acerca de sueldos y jornales, y que sea capaz de mantenerse al tanto de las novedades específicas de cada convenio colectivo de trabajo. Recordemos que los convenios surgen a partir de acuerdos con los sindicatos, y regulan las condiciones laborales de determinado rubro (por ejemplo, las escalas salariales).</li>
                                    </ol>

                                    <p><strong>Los datos obligatorios a incluir en un recibo de sueldo son:</strong></p>

                                    <ul>
                                        <li>Datos personales del empleador (nombre, apellido, razón social, CUIT)</li>
                                        <li>Datos personales del empleado (nombre, apellido, CUIL, puesto, categoría)</li>
                                        <li>Sueldo bruto</li>
                                        <li>Descuentos básicos: aportes jubilatorios, obra social, y PAMI.</li>
                                        <li>Descuentos sindicales</li>
                                        <li>Plus por antigüedad</li>
                                        <li>Presentismo en caso de corresponder</li>
                                        <li>Sueldo neto</li>
                                    </ul>
                                    <p>Una vez finalizada la liquidación de sueldos, los recibos de haberes se deberán emitir por duplicado y el empleador tendrá que conservar la copia firmada por el trabajador.</p>
                                    <br />
                                    <h4>3- Realizar el Libro de Sueldos Digital en AFIP</h4>

                                    <p>Recientemente, AFIP anunció la implementación de una nueva herramienta web para empleadores. Se trata del Libro de sueldos digital, y están obligados a utilizarlo aquellos que hayan sido notificados a través del Domicilio Fiscal Electrónico.


                                    <strong>El Libro de sueldos digital unifica las obligaciones y tareas que deben cumplir los empleadores ante AFIP. Estas son: </strong>
                                    </p>
                                    <ul>
                                        <li>Realizar la liquidación de sueldos de sus empleados, con el correspondiente recibo.</li>
                                        <li>Armar libro de sueldos y jornales (exigido por la Ley de Contrato de Trabajo).</li>
                                        <li>Presentar a AFIP el Formulario 931 (cargas sociales) de forma mensual.</li>
                                    </ul>
                                  <p>                         
                                    
                                    La plataforma de Libro de sueldos toma la información de la liquidación de haberes junto con otros datos registrados en AFIP, y elabora automáticamente el libro de sueldos y una precarga del Formulario 931. El empleador podrá editarla antes de confirmar la presentación.
                                    <br />
                                    Es preciso saber que este Libro de sueldos digital no sustituye al exigido por la Ley de Contrato de Trabajo, ya que el mismo debe estar rubricado según cada provincia. Sirve, más bien, como una forma de integrar el control de datos por parte de AFIP.
                                    <br />
                                    A pesar de que el objetivo de esta herramienta es simplificar al contribuyente la carga de datos, lo cierto es que los encargados de realizar la liquidación de sueldos se han encontrado con <strong>inconvenientes al intentar configurar los parámetros iniciales</strong>. Esto implica un problema para los empleadores que ya se encuentran obligados a adoptar esta modalidad.</p>
                                    <br />

                                    <img className='short-img' src={img2} alt="" />
                                    <br />
                                    <br />

                                    <h4>4- Presentar el Formulario 931</h4>

                                    <p>El Formulario 931 es una declaración jurada exigida por AFIP a través de la cual las empresas informan las cargas sociales de sus trabajadores de forma mensual.
                                    <br />
                                     La presentación de este formulario es obligatoria para todos aquellos que tengan personal a su nombre. A través del F. 931 se informan:</p>

                                     <ul>
                                        <li>Cantidad de aportes por la totalidad de los empleados: son los descuentos que se realizan al trabajador (por ejemplo, jubilación).</li>
                                        <li>Cantidad de contribuciones por la totalidad de los empleados: son los cargos que abona el empleador por sus trabajadores (jubilación, asignaciones familiares, ART, etc.).</li>
                                     </ul>

                                     <p>El Formulario 931 se declara a través de la web de AFIP, mediante la herramienta “Declaración en Línea”. Es importante hacerlo antes de la fecha de vencimiento para que los trabajadores reciban sus aportes de manera correcta y el empleador evite multas por parte de AFIP.</p>

                                     <br />

                                     <h4>5- Emitir boletas sindicales</h4>

                                     <p>En caso de que la rama de actividad de la empresa se encuentre vinculada a un sindicato, el empleador deberá empadronar a sus trabajadores en el mismo. Los sindicatos regulan las condiciones laborales y los beneficios a los cuales accederán los empleados de ese rubro: escala salarial, aumentos, duración de la jornada laboral, días de vacaciones y licencias, etc.
                                    <br />
                                    El pago de contribuciones y aportes al sindicato por parte de la empresa y del trabajador  (estén o no afiliados) es obligatorio. Por tal motivo, el empleador tiene la necesidad de abonar de forma mensual la cuota sindical. Para ello, deberá emitir las boletas sindicales a través de la web de cada gremio, y abonarlas en tiempo y forma.</p>

                                </div>
                        </div>

                    </div>

                    {/* <Form/> */}

        </ProductContainer>
        </>
    );
}
 
export default Blog7;
