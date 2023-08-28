import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estiloblog-item'
import blogs from '../../data/blogs.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'


const Blog6
 = () => {

    const sortedArray = blogs.sort((a, b) => a.id - b.id)

    const banner = require('../../images/Blog/' + `${sortedArray[5].img}`)   
    
    const img1 = require('../../images/Blog/mp_4/img1.png')
    const img2 = require('../../images/Blog/mp_4/img2.png')

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
                </a> / {sortedArray[5].title}</p>

                    <div className="product-types1">
                        <div className="col-12 col-12 d-flex flex-column gap-4">
                            <h1
                            className="blog-title">
                            <strong>Servicios Lector</strong> de tarjetas Point Smart
                            </h1>

                        </div>

                            <div className="underline"></div>

                            
                            <h3><strong>Tags:</strong> Smart Point, Servicios, Aumentar Ventas</h3>

                            <div className="blog-text">

                            <div className="wall-img">

                             <img src={banner} alt="" />

                            </div>

                            <div className="inner-text">

                                <h2>DESDE TU POINT SMART OFRECÉ A TUS CLIENTES PAGAR SERVICIOS Y CUENTAS, RECARGAR MOVISTAR, TUENTI Y DIRECTV.</h2>     
                                <br/>  

                                <h4>Tu Point Smart evoluciona con vos para ayudarte a aumentar tus ventas.</h4>  
                                <br />   
                                <h4>¿Qué servicios podes ofrecer a tus clientes?</h4>    

                                <ul>
                                    <li><strong>Cuentas y servicios:</strong> En tu comercio podés ofrecer a tus clientes pagar sus facturas de más de 4.500 empresas, como agua, luz y gas entre otras.</li>

                                    <li><strong>Recargas prepagas: </strong>en tu comercio podés ofrecer a tus clientes hacer recargas prepagas de Movistar, Tuenti y DirecTV.</li>
                                </ul>   
                                <br />

                                <h2>¿CÓMO FUNCIONA?</h2>
                                             <h5><strong>Para ofrecer este nuevo servicio, es necesario que tengas saldo en tu cuenta de Mercado Pago.</strong> Tu cliente te paga en efectivo el monto del servicio o recarga prepaga, vos hacés el pago desde tu Point Smart y te debitamos el monto del saldo en tu cuenta de Mercado Pago.</h5>
                                <br />
                                <h2>Beneficios de ofrecer más servicios a tus clientes</h2>

                                <ul 
                                style={{listStyle: 'none'}}>
                                    <li><FontAwesomeIcon className='svg' icon={faCircleCheck}/> Las recargas y pagos de servicios son grandes aliados para atraer clientes a tu negocio y aumentar tus ventas.</li>
                                    <li><FontAwesomeIcon className='svg' icon={faCircleCheck}/> Accedé al efectivo del dinero que tenés en tu cuenta de manera fácil y rápida, <strong>¡ya no hace falta hacer extracciones!</strong></li>
                                    <li><FontAwesomeIcon className='svg' icon={faCircleCheck}/> <strong>Podés pagar cuentas y servicios y recargar todas la líneas que quieras,</strong> no hay un límite.</li>
                                    <li><FontAwesomeIcon className='svg' icon={faCircleCheck}/> Ofrecé pago de servicios y recargas desde tu Smart sin tener que comprar  aldo, podés pagarlas con el dinero en cuenta de tus ventas.</li>
                                </ul>

                                <img 
                                style={{height: '30vh'}}
                                className='short-img'src={img1} alt="" />
                                <br />
                                <br />

                                <h2>CÓMO OFRECERLE A TUS CLIENTES PAGAR SERVICIOS Y CUENTAS, REALIZAR RECARGAS DE CELULAR O DIRECTV.</h2>
                                <br />
                                <h4>¡Es muy sencillo! Seguí los siguientes pasos:</h4>

                                <ol>
                                    <li><strong>Apretá el botón de </strong><span>OPCIONES</span> de abajo a la derecha de tu Point Smart.</li>
                                    <li><strong>En la sección de </strong><span>SERVICIOS</span> vas a poder visualizar todos los servicios que podés ofrecer a tus clientes.</li>
                                </ol>
                                <br />

                                <img 
                                style={{cursor: 'pointer'}}
                                onClick={fullScreenImg}
                                className={fullScreen ? 'short-img full-screen' : 'short-img'} 
                                src={img2} alt="" />


                            </div>
                        </div>

                    </div>

                    {/* <Form/> */}

        </ProductContainer>
        </>
    );
}
 
export default Blog6
;
