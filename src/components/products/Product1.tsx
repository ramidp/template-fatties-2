import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ProductContainer from './estiloproducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faRuler, faPencil, faEraser} from '@fortawesome/free-solid-svg-icons';


const Product1 = () => {
    
    return (
        <>
        <span id="product1"></span>
        <ProductContainer>
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12">
                        <div className="title">
                            <h1>Algunas cosas de la que estamos orgullosos</h1>
                        </div>
                        <div className="card-box">
                            <p>Somos representantes de Mercado Pago hace más de 4 años. 
                                <br />
                                Tenemos contactos directo y fluidos con el equipo, lo que nos hace crecer y alinear
                                <br />
                                 el trato con nuestros clientes para lograr la excelencia.</p>
                        </div>
                </div>
                <div className="products">
                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faAddressBook} />
                        <h1>Visitas Presenciales</h1>
                        <p>¿No sabes cómo funciona el servicio?
                            <br />
                            ¿Tenes alguna duda?
                            <br />
                            Un asesor puede visitar tu comercio sin costo alguno ni compromiso.</p>
                        <button className="btn">Solicitar Visita</button>

                    </div>
                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faEraser} />
                        <h1>Ejemplo 2</h1>
                        <p>Texto Ejemplo
                            <br />
                            Texto Ejemplo
                            <br />
                            Texto Ejemplo.</p>
                        <button className="btn">Boton Ejemplo</button>

                    </div>
                    <div className="product-types col-2">
                    <FontAwesomeIcon icon={faPencil} />
                        <h1>Ejemplo 2</h1>
                        <p>Texto Ejemplo
                            <br />
                            Texto Ejemplo
                            <br />
                            Texto Ejemplo.</p>
                        <button className="btn">Boton Ejemplo</button>

                    </div>
                    <div className="product-types col-2">
                        <FontAwesomeIcon icon={faRuler} />
                        <h1>Propuesta A Medida</h1>
                        <p>Dependiendo del tipo de comercio que tengas, ¡podemos amoldar propuestas!
                            <br />
                            Con la comisión más baja del mercado, y sin costos de alquiler ni mantenimiento.</p>
                        <button className="btn">Ver Propuesta</button>
                    </div>
                </div>
            </div>
         </div>
        </ProductContainer>
        </>
    );
}
 
export default Product1;
