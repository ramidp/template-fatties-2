import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './styles/estilofaq'
import { useState } from 'react';

const Faq1 = () => {

    const logowhatsapp = require('../../images/icons/whatsapp.png')

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    return (
        <>
        <ProductContainer>
            <p>
                <a 
               className="faq-anchor"
               href="/faq">
                FAQ 
                </a> / ¿Qué es Fatties, como puedo comunicarme con uno de sus asesores?</p>

                <div className="product-types1 mt-3">
                    <h2
                    className="subtitle-faq"
                    >
                        Somos un equipo de especialistas en plataformas digitales, medios de pago, gestión/resolución de reclamos, análisis comercial y atención al cliente. 
                        <br />
                        Nuestro objetivo es acercar a los establecimientos y emprendedores las herramientas más innovadoras para llevar su negocio al siguiente nivel.
                    </h2>
                    <br />

                    <div
                    style={{width: '100%',
                    display: "flex",
                    flexDirection: 'column',
                    gap: '20px'
                    }}
                    >
                        <div>
                            
                        <h1 onClick={() => setShow1(!show1)}>¿Cuáles servicios y plataformas representa Fatties?</h1>
                        {show1 &&
                        <div className="faq-hidden-text">
                        <p>Actualmente contamos con 2 plataformas, las cuales promovemos y recomendamos a cada uno de los clientes de la consultora.
                        </p>
                            <ul>
                                <li><a href="https://www.mercadopago.com.ar/" target="_blank">Mercado Pago</a></li>
                                <li><a href="https://calim.com.ar/" target="_blank">Calim</a></li>
                            </ul>
                            <br />
                        </div>
                        }
                        </div>

                        <div>
                            <h1 onClick={() => setShow2(!show2)}>¿Cómo obtener un representante oficial de mercado pago?</h1>
                            {   show2 &&
                        <div className="faq-hidden-text">
                        <p>Para que Mercado Pago asigne tu comercio o emprendimiento al programa de Representantes Oficiales de Fatties, necesitamos que se contacten por nuestro canal de WhatsApp y validar la siguiente información:</p>
                                <ul>
                                    <li>Uso actual de la plataforma (Cobrar con una o más soluciones de pago: QR, Point, Link de Pago)</li>
                                    <li>Tener correctamente cargados tus datos fiscales dentro de la app.</li>
                                    <li>Cumplir con los TyC de Mercado pago para poder acceder al programa de representación oficial.</li>
                                    <li>Completar cada 4 meses la encuesta de evaluación puesta a disposición por Mercado Pago</li>
                                </ul>
                            <p><strong>Aquellos comercios que no cumplan con la resolución de la encuesta perderán el cupo dentro del programa. Dada la alta demanda de cupos para el programa de representación Fatties solo prestará el servicio a aquellos comercios que mantengan la encuesta de calidad resuelta.</strong></p>
                            <br />
                            </div>
                            }
                        </div>
                        

                        <div>
                        <h1 onClick={() => setShow3(!show3)}>¿Cómo completar la encuesta de calidad de Mercado Pago para mantener mi cupo dentro del programa de representantes?</h1>
                        {
                            show3 &&
                            <div className="faq-hidden-text">
                            <p>Podés comunicarte con nosotros y te pasamos el link de la encuesta, también les dejamos un QR el cual escaneando los redirige para que también puedan completarla.
                                Si tenés alguna duda, podés comunicarte por el canal de <a style={{color: 'rgb(23, 146, 68)', textUnderlineOffset: '3px'}} target="_blank" href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, qué tal? Me gustaría hacerles una consulta."> WhatsApp
                                <img style={{height: '20px'}} src={logowhatsapp} alt="" />
                                </a>
                                exclusivo.
                                </p>
                                <br/>
                            </div>
                        }
                        </div>
                        
                        <div>
                        <h1 onClick={() => setShow4(!show4)}>¿Qué servicio brinda Fatties como representante oficial de Mercado Pago?</h1>
                    { 
                    show4 &&
                    <div className="faq-hidden-text">
                    <p>Como representantes asignados de su comercio o emprendimiento contarán sin costo alguno con los siguientes beneficios:</p>
                            <ul>
                                <li>Canal de soporte exclusivo a cargo de Fatties por WhatsApp (lunes a viernes de 9 a 18 hs)</li>
                                <li>Entrega de material gráfico.</li>
                                <li>Reposición de rollos de papel para lectores point.</li>
                                <li>Recambio por garantía de sus lectores point con fallas.</li>
                                <li>Cobertura exclusiva ante desconocimientos de compra en QR/Point.</li>
                                <li>Los envíos de los materiales son sin cargo.</li>
                            </ul>
                            <br />
                    </div>
                        }
                        </div>

                        <div>

                        <h1 onClick={() => setShow5(!show5)}>Tengo un problema con mi cuenta de mercado pago, ¿Qué hago?</h1>
                        {
                        show5 &&
                        <div className="faq-hidden-text">
                            <p>Comunícate con nuestro centro de atención telefónica, envíanos un <a style={{color: 'rgb(23, 146, 68)', textUnderlineOffset: '3px'}}
                            target="_blank" href="https://api.whatsapp.com/send?phone=5491123956360&text=Hola, qué tal? Me gustaría hacerles una consulta.">
                            WhatsApp
                            <img style={{height: '20px'}} src={logowhatsapp} alt="" />
                        </a>
                            con tu consulta o reclamo así lo gestionamos ante la plataforma correspondiente.</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
        </ProductContainer>
        </>
    );
}
 
export default Faq1;
