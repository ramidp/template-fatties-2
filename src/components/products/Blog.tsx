import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Blog2 from './Blog2';


const Blog = () => {

    const navegacion = useNavigate()
    
    return (
        <>
        <span id="blog"></span>
        <ProductContainer>
            <h1 className="mb-2 title">Blog</h1>
            <p className="mb-4 blog-text">Todas las novedades, guias y manuales que sean de utilidad serán vistas aqui.</p>

                <div className="products">

                    <div onClick={() => {navegacion('/servicio_personalizado')}} className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Servicio Personalizado</h1>
                        <p>¿No sabes cómo funciona el servicio?
                            <br />
                            ¿Tenes alguna duda?
                            <br />
                            Un asesor puede visitar tu comercio sin costo alguno ni compromiso.</p>

                    </div>

                    <div style={{background: 'lightBlue'}} className="product-types col-2">
                        <Blog2/>
                    </div>

                    <div style={{background: 'lightGreen'}} className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <div style={{width: '100%'}}>
                            <h1>Blog 3 Titulo</h1>
                                <p>Texto Ejemplo.
                                    <br />
                                    Texto Ejemplo.
                                   </p>

                        </div>

                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 4 Titulo</h1>
                        <p>Dependiendo del tipo de comercio que tengas, ¡podemos amoldar propuestas!
                            <br />
                            Con la comisión más baja del mercado, y sin costos de alquiler ni mantenimiento.</p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 5 Titulo</h1>
                        <p>Dependiendo del tipo de comercio que tengas, ¡podemos amoldar propuestas!
                            <br />
                            Con la comisión más baja del mercado, y sin costos de alquiler ni mantenimiento.</p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 6 Titulo</h1>
                        <p>Texto Ejemplo.</p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 7 Titulo</h1>
                        <p>Texto Ejemplo.</p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 8 Titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <br/>
                            Doloribus quo excepturi ipsa fugiat consequatur exercitationem 
                           </p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 9 Titulo</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta?.</p>
                    </div>

                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Blog 10 Titulo</h1>
                        <p>Lorem, ipsum dolor sit amet.
                            <br />
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog;
