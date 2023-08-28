import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Referencias = () => {

  const referencesArray = [
    {
      id: 1,
      reference: '"Siempre nos ayudan, colaboran y responden a tiempo. Hacen su trabajo y eso esta bueno!"',
      image: '',
      person: 'Tamara Trento',
      charge: 'Comerciante'
    },
    {
      id: 2,
      reference: '"Pudimos finalmente solucionar el tema de los colaboradores en MercadoPago (Agregar alias o cbu). Gracias su ayuda!"',
      image: '',
      person: 'Emanuel S.',
      charge: 'Importador en Bs As'
    },
    {
      id: 3,
     reference: '"Se nota su conocimiento y experiencia. Pudieron ayudar en la optimización de cobranza a nuestros clientes"',
     image: '',
     person: 'Bernardo Agustin',
     charge: 'Dueño de Supermercados'
    },
    {
      id: 4,
     reference: '"Fueron un pilar en la digitalización de mi tienda, y el soporte que dan es de primera."',
     image: '',
     person: 'Rosa Valdez',
     charge: 'Dueña de Rosa Moda'
    },
    {
      id: 5,
     reference: '"Nos sumamos a Mercado Pago e fácil y rápido gracias a la ayuda de la agencia. encuentran la vuelta para adaptarse a lo que necesitamos"',
     image: '',
     person: 'Martín Gonzalez',
     charge: 'Fundador de ArteDeco'
    },
  ]

  const [idReference, setIdReference] = useState(1)

  const handleIdReference = (index) => {
    setIdReference(referencesArray[index].id)
  }

    return ( 
      <>
    
      <Container>
          <div           
          className="references-box">
              <div className="bubble-wall"
                    >
              {referencesArray.filter(item => item.id === idReference).map((item, index) => {
                  return (
                    <div
                    className="reference-all"
                    id={item.id}
                    key={item.id}>
                        {
                        item.id > 1 ?
                        <FontAwesomeIcon 
                        onClick={() => handleIdReference(item.id - 2)}
                        icon={faArrowLeft}/>
                        :
                        <span></span>
                      }

                        <div
                        className='reference'
                        >
                        <h1>{item.reference}</h1>
                        {/* <img src={logo2} alt="" /> */}
                        <h4>{item.person}</h4>
                          <h5>{item.charge}</h5>
                        </div>

                      {
                        item.id < referencesArray.length ?
                        <FontAwesomeIcon 
                        onClick={() => handleIdReference(item.id)}
                        icon={faArrowRight}/>
                        :
                        <span></span>
                      }
                    </div>
                  )})}
              </div>
          </div>

        </Container>
      </>
     );
}
 
export default Referencias;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    user-select: none;
    background-image: url('iconitos.png');
    background-size: contain;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    padding: 50px 0;
    margin-bottom: 50px;

    @media (max-width: 1100px) {
        min-height: auto;
        background-size: cover;
      }

      @media (max-width: 764px) {
        height: 70vh;
      }
    
    .title {
      h1 {
        text-align: center;
        margin: 0;
        color: white;
        font-size: 36px;

        @media (max-width: 1100px) {
          font-size: 30px;
        }
        @media (max-width: 764px) {
          font-size: 20px;
        }
      }
    }

      span {
        cursor: default;
        width: 45px;
      }

      svg {
        width: 45px;
        font-size: 22px;
        color: white;
        
        &:hover {
          cursor: pointer;
          filter: contrast(10%);
        }

        @media (max-width: 1400px) {
          font-size: 22px;
        }
        @media (max-width: 764px) {
          font-size: 14px;
        }
      }



    .references-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  
        
        .bubble-wall {
          background-image: url('./images/burbuja200px.png');
          background-size: contain;
          width: 70%;
          height: 70%;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          animation-name: movimiento;
          animation-duration: 1.3s;
          animation-iteration-count: infinite;   
          animation-timing-function: linear;


          @media (max-width: 1400px) {
            height: 90%;
          }

          @media (max-width: 1100px) {
            width: 70%;
            height: 100%;
          }

          @media (max-width: 764px) {
            width: 100%;
            height: 100%;
          }
            
            @keyframes movimiento {
                0% {transform: translate(0px, 0px);}
                16.66% {transform: translate(0px, 2px);}
                25% {transform: translate(0px, 3px);}
                32.32% {transform: translate(0px, 4px);}
                41.65% {transform: translate(0px, 5px);}
                50% {transform: translate(0px, 6px);}
                58.31% {transform: translate(0px, 5px);}
                66.64% {transform: translate(0px, 4px);}
                74.97% {transform: translate(0px, 3px);}
                83.3% {transform: translate(0px, 2px);}
                91.63% {transform: translate(0px, 1px);}
                100% {transform: translate(0px, 0px);}
          }

          
          .reference-all {
            width: calc(90%);
            height: 100%;
            left: 3%;
            display: flex;
            padding: 0;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;

            span {
              width: 45px;
            }

            .reference {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              width: 50%;
              height: 100%;
              gap: 20px;

              @media (max-width: 1100px) {
                gap: 10px;
                width: 60%;
              }
                     
            img {
              height: 50px;
        
              @media (max-width: 764px) {
                height: 40px;
              }
            }
        
            h1 {
              text-align: center;
              width: 90%;
              font-size: 22px;
              margin: 0;
             

              @media (min-width: 2048px) {
                font-size: 30px;
              }
              @media (max-width: 1400px) {
                font-size: 20px;
              }
              @media (max-width: 1100px) {
                width: 80%;
                font-size: 18px;
              }
              @media (max-width: 764px) {
                width: 90%;
                font-size: 16px;
              }
              @media (max-width: 450px) {
                font-size: 14px;
              }
            }

            h4, h5 {
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              margin: 0;

              @media (min-width: 2048px) {
                font-size: 32px;
              }

              @media (max-width: 1400px) {
                font-size: 22px;
              }
              @media (max-width: 1100px) {
                font-size: 20px;
              }
              @media (max-width: 764px) {
                font-size: 16px;
               }
              @media (max-width: 450px) {
                font-size: 14px;
              }
        
            }
        }
      }
    }
  }

    
`