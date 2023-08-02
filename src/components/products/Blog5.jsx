import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'

const Blog5 = () => {

    const banner = require('../../images/Blog/' + `${blogs[4].img}`)
    const step1 = require('../../images/Blog/mp_2/image3.png')
    const step2 = require('../../images/Blog/mp_2/image2.png')
    const step3 = require('../../images/Blog/mp_2/image7.png')
    const letter = require('../../images/Blog/mp_2/image5.png')
    const screen = require('../../images/Blog/mp_2/image6.png')

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
                </a> / {blogs[4].title}</p>

                    <div className="product-types1">
                        <div className="col-12 col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            <strong>Colaboradores: </strong> Una herramienta para organizar a tu equipo de trabajo
                            </h1>

                        </div>

                            <div className="underline"></div>

                            
                            <h3><strong>Tags:</strong> Colaboradores, Trabajo en Equipo, MP</h3>

                            <div className="blog-text">

                            <div className="wall-img">

                             <img src={banner} alt="" />

                            </div>

                            <div className="inner-text">
                                <p>
                                Con la herramienta <strong>Colaboradores</strong> podés dar y gestionar el acceso de tus empleados a la cuenta de tu negocio en Mercado Pago y Mercado Libre, de manera eficiente y segura.
                                <br />
                                No necesitás compartir tus datos porque cada colaborador <strong>tiene su propia cuenta y contraseña para trabajar</strong> con los permisos que vos le des. Además, siempre podrás ver los movimientos de tus colaboradores en la sección <strong>Actividad de tu cuenta de Mercado Pago</strong>.
                                 </p>
                                 <br />
                                 <h1>Cómo invitar nuevos Colaboradores</h1>
                                <p>Para invitar a un colaborador a trabajar con vos, dirigite a <strong>Tu negocio {'>'} Colaboradores, 
                                <br />
                                y seguí estos simples pasos:</strong> 
                                </p>

                                    <p><img src={step1} alt="" />Invitá a un colaborador</p>
                                    <p><img src={step2} alt="" />Asígnale permisos para trabajar</p>
                                    <p><img src={step3} alt="" />Envíale la invitación</p>

                                <br />
                                <h2>1- Registro</h2>
                                <p><strong>Ingresá el e-mail de la persona que quieras invitar</strong>. Tené en cuenta que su e-mail no debe estar registrado en Mercado Pago o Mercado Libre, porque lo usará exclusivamente para tu negocio.</p>
                                <br />

                                <h2>2- Roles y permisos</h2>
                                <p><strong>Creá un rol con los permisos que le asignarás.</strong> Esto te ayudará a organizar a los colaboradores que realizan las mismas tareas. Por ejemplo: cajeros, contadores o vendedores.</p>
                                <br />

                                <h2>3- Invitación</h2>
                                <p>Enviá la invitación y ¡listo! Una vez que el colaborador la acepte, podrá ingresar a tu cuenta con su propio e-mail y contraseña.
                                    <br />
                                <strong>Tené en cuenta que podrás editar los roles y los permisos de tus colaboradores en todo momento.</strong>
                                </p>
                                <img src={letter} alt="" />
                                
                                <br />
                                <br />                                <h1>¿Qué hacer si tu colaborador no recibió la invitación?</h1>
                                <br />
                                <img 
                                style={{width: "80%"}}
                                src={screen} alt="" />
                                <p>Cuando tu colaborador ve una pantalla como esta, significa que no tiene los permisos necesarios para acceder a la sección. Si querés que acceda, tendrás que ir a Colaboradores y editar sus permisos.   
                                </p>

                                <h4> Distribuí las tareas de tu negocio de manera más eficiente y llegá todos los días un poco más lejos</h4>                               


                            </div>
                        </div>

                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog5;
