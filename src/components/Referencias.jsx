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
      reference: '"Gran empresa y aliado con quien trabajar"',
      image: '',
      person: 'Ramiro De Palo',
      charge: 'CEO de Asta'
    },
    // {
    //   id: 2,
    //   reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
    //   image: '',
    //   person: 'Martin Navarro',
    //   charge: 'CEO de otro lugar'
    // },
    // {
    //   id: 3,
    //  reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
    //  image: '',
    //  person: 'Rodrigo De Paolo',
    //  charge: 'CEO de Asta'
    // },
    // {
    //   id: 4,
    //  reference: '"El ideal son 100 caracteres, acorde a las pruebas que fui viendo."',
    //  image: '',
    //  person: 'Paolo Rodriguez',
    //  charge: 'CEO de Asta'
    // },
  ]

  const [idReference, setIdReference] = useState(1)

  const handleIdReference = (index) => {
    setIdReference(referencesArray[index].id)
  }

    return ( 
      <>
      <Container>
          <div 
          id='referencias'
          className="references-box">
              <div className="bubble-wall"
                    >
              {referencesArray.filter(item => item.id === idReference).map((item, index) => {
                  return (
                    <div
                    className="reference-all"
                    id={item.id}
                    key={item.id}>
                        {/* {
                        item.id > 1 ?
                        <FontAwesomeIcon 
                        onClick={() => handleIdReference(item.id - 2)}
                        icon={faArrowLeft}/>
                        :
                        <span></span>
                      } */}

                        <div
                        className='reference'
                        >
                        <h1>{item.reference}</h1>
                        {/* <img src={logo2} alt="" /> */}
                        <h4>{item.person}</h4>
                          <h5>{item.charge}</h5>
                        </div>

                      {/* {
                        item.id < 4 ?
                        <FontAwesomeIcon 
                        onClick={() => handleIdReference(item.id)}
                        icon={faArrowRight}/>
                        :
                        <span></span>
                      } */}
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
    min-height: calc(60vh - 100px);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    user-select: none;
    background-color: white;
    background-image: url('https://i.ibb.co/rZVK4z2/Wall-bubbles.png');
    background-size: contain;
    background-repeat: repeat;
    padding: 50px 0;
    margin-bottom: 100px;

    #referencias {
            padding-top: 150px;
            margin-top: -150px;

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
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
        
        .bubble-wall {
          background-image: url('https://i.ibb.co/2K9jwdj/burbuja200px.png');
          background-size: 100% 100%;
          height: 450px;
          width: 650px;
          padding: 50px 0;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          animation-name: movimiento;
          animation-duration: 1.3s;
          animation-iteration-count: infinite;

          @media (max-width: 1400px) {
            height: 400px;
            width: 600px;
          }

          @media (max-width: 764px) {
            height: 300px;
            background-size: contain;
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
            width: 100%;
            display: flex;
            padding: 0;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 3%;

            @media (max-width: 764px) {
              width: 90%;
            }

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

              @media (max-width: 764px) {
                gap: 10px;
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

              @media (max-width: 1400px) {
                font-size: 20px;
              }
              @media (max-width: 1100px) {
                width: 70%;
                font-size: 20px;
              }
              @media (max-width: 764px) {
                width: 90%;
                font-size: 18px;
              }
              @media (max-width: 450px) {
                font-size: 16px;
              }
            }

            h4, h5 {
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              margin: 0;

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