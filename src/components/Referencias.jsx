import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Referencias = () => {
  const [hide, setHide] = useState(true)


  const logo = require('../images/Brands-Logos/el-calafate.jpg')
  const logo2 = require('../images/Brands-Logos/Cafe-Martinez.webp')
  const logo3 = require('../images/Brands-Logos/coquitos-online.png')
  const logo4 = require('../images/Brands-Logos/casper-pet.png')

  const referencesArray = [
    {
      id: 1,
      reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
      image: '',
      person: 'Pedro Gonzalez',
      charge: 'CEO de Algun lugar'
    },
    {
      id: 2,
      reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
      image: '',
      person: 'Martin Navarro',
      charge: 'CEO de otro lugar'
    },
    {
      id: 3,
     reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
     image: '',
     person: 'Ramiro De Pao',
     charge: 'CEO de Asta'
    },
  ]

  const [idReference, setIdReference] = useState(1)

  const handleIdReference = (index) => {
    setIdReference(referencesArray[index].id)
  }

    return ( 
      <>
      <Container>
      <span 
      id="referencias"></span>
          <div className="references-box">
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
                        item.id < 3 ?
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
    min-height: 50vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
    user-select: none;
    padding: 100px 0;
    background-color: white;
    background-image: url('https://i.ibb.co/rZVK4z2/Wall-bubbles.png');
    background-size: contain;
    background-repeat: no-repeat;

    span {
            padding-top: 100px;
            margin-top: -100px;

            @media (max-width: 764px) {
              padding-top: 0px;
              margin-top: 0px;
            }

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

      svg, span {
        cursor: pointer;
        width: 45px;
        font-size: 40px;
        color: white;

        &:hover {
          filter: contrast(10%);
        }

        @media (max-width: 764px) {
          font-size: 14px;
        }
      }



    .references-box {
      width: 90%;
      min-height: 50vh;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 0 100px;

      @media (max-width: 1400px) {
        padding: 0 20px;
          }

      @media (max-width: 1100px) {
        padding: 0 20px;
          }

          @media (max-width: 764px) {
            padding: 0 10px;
          }
          
        
        
        .bubble-wall {
          background-image: url('https://i.ibb.co/fvyKskv/orange-bubble.png');
          width: 50vw;
          height: 70vh;
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          animation-name: movimiento;
          animation-duration: 1.3s;
          animation-iteration-count: infinite;
            
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
            display: flex;
            padding:0 ;
            margin: 0;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            
            span {
              width: 45px;
            }
            .reference {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              width: 50%;
              height: auto;
              gap: 10px;
              border-top-left-radius: 50px;
              border-bottom-right-radius: 50px;
        
            img {
              height: 50px;
        
              @media (max-width: 764px) {
                height: 40px;
              }
            }
        
            h1 {
              text-align: center;
              width: 80%;
              font-size: 26px;
        
              @media (max-height: 720px) {
                font-size: 22px;
              }
              @media (max-width: 1100px) {
                width: 70%;
                font-size: 20px;
              }
              @media (max-width: 764px) {
                width: 90%;
                font-size: 18px;
              }
            }
            h4, h5 {
              text-align: center;
              font-size: 30px;
              font-weight: bold;

              @media (max-width: 1100px) {
                font-size: 20px;
              }
              @media (max-width: 764px) {
                font-size: 16px;
              }
        
            }
        }
      }
    }
  }

    
`