import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faMoneyBill, faTag, faHandshake, faLock, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// Lo que se puede hacer es que estos puntos te manden a los links de MP Ayuda
// Podemos crearlos de 0, pero bueno, habria que ver bien el texto. (Creo que es lo mejor para que todo se quede DENTRO de la pagina)

const Faq = () => {

    const navegacion = useNavigate()


    return (
        <Container>
        <span id="faq"></span>
            <h1 className="faq-title">FAQ</h1>
            <h1>¿Con que podemos ayudarte?</h1>

            {/* <div className="tag-searcher col-12 mb-3">
                <label htmlFor="">Buscador</label>
                <input type="text" />
            </div> */}


        <div className="card-box">
            <div onClick={() => {navegacion('/cuenta_mercado_pago')}} className="card">
            <FontAwesomeIcon icon={faWallet} />
                <div>
                    <h3>Cuenta Mercado Pago</h3>
                    <p>Ingresos, transferencias, extracciones, inversiones y tarjetas</p>
                </div>
            </div>

            <div onClick={() => {navegacion('/pagos')}} className="card">
            <FontAwesomeIcon icon={faMoneyBill} />
                <div>
                    <h3>Pagos</h3>
                    <p>Compras, pagos y suscripciones que realizaste</p>
                </div>
            </div>

            <div onClick={() => {navegacion('/faq3')}} className="card">
            <FontAwesomeIcon icon={faTag} />
                <div>
                    <h3>Ventas</h3>
                    <p>Tus cobros, tasas y herramientas para vender con QR, Point, link de pago, etc</p>
                </div>
            </div>

            <div onClick={() => {navegacion('/faq1')}} className="card">
            <FontAwesomeIcon icon={faHandshake} />
                <div>
                    <h3>Créditos</h3>
                    <p>Cómo solicitar, usar y pagar cuotas de Mercado Crédito</p>
                </div>
            </div>

            <div onClick={() => {navegacion('/faq1')}} className="card">
            <FontAwesomeIcon icon={faLock} />
                <div>
                    <h3>Seguridad</h3>
                    <p>Robo o pérdida de dispositivo y robo de cuentas</p>
                </div>
            </div>

            <div onClick={() => {navegacion('/faq1')}} className="card">
            <FontAwesomeIcon icon={faAddressBook} />
                <div>
                    <h3>Otros productos</h3>
                    <p>Seguros, garantias extendidas y Mercado Puntos</p>
                </div>
            </div>
        </div>
        </Container>
    );
}
 
export default Faq;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    background-color: #f5f5f5;

    h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .faq-title {
        width: 70vw;
        text-align: left;
        color: darkgray;
        font-size: 50px;
        margin-bottom: 16px;
    }
    
.card-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 20px;
    text-decoration: none;
    width: 100%;

        .card {
            padding: 15px 30px;
            gap: 40px;
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0px 0px 40px -20px rgba(0,0,0,0.44);
            color: black;

            @media (max-width: 991px) {
            width: 80%;
        }

            
    
                &:hover {
                cursor: pointer;
                border-left: 5px solid ${props => props.theme.primary};
                border-right: 5px solid ${props => props.theme.primary};
                filter: contrast(90%);
            }
    
            h3 {
                font-size: 16px;
            }
            p {
                font-size: 14px;
                font-weight: 300;
            }
            svg {
                width: 30px;
                font-size: 18px;
                color: ${props => props.theme.secondary};
            }
        }
    }
    
`