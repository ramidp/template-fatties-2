import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Referencias = () => {

  const [hide, setHide] = useState(true)
  const [hide1, setHide1] = useState(true)
  const [hide2, setHide2] = useState(true)

  const logo = require('../images/Brands-Logos/el-calafate.jpg')
  const logo2 = require('../images/Brands-Logos/Cafe-Martinez.webp')
  const logo3 = require('../images/Brands-Logos/coquitos-online.png')
  const logo4 = require('../images/Brands-Logos/casper-pet.png')

    return ( 
      <>
      <Container>
      <span id="referencias"></span>
          <div className="references-box">

              {hide ?
              <>
                <FontAwesomeIcon 
                style={{color: 'transparent',
                cursor: 'default'
              }}
                icon={faArrowLeft}/>

              <div>
              <h1>"Trabajar con Fatties me facilito muchas cosas para mi negocio. Cuentan con un servicio especializado y personalizado que nos brinda lo que necesitamos en el momento justo. Lo recomiendo completamente."</h1>
              <img src={logo2} alt="" />
              <h4>Pedro Pablo</h4>
                <h5>CEO de Algun Lugar</h5>
              </div>
                <FontAwesomeIcon onClick={() => {setHide(false)}} icon={faArrowRight}/>
              </>
              :
              <>
                { hide1 ?
                  <>
                  <FontAwesomeIcon onClick={() => setHide(true)} icon={faArrowLeft}/>
                  <div>
                    <h1>"Excelente trabajo, comunicación y atención, tanto telefónica, como personal. Siempre están ahí"</h1>
                    <img src={logo} alt="" />
                    <h4>Martin Martinez</h4>
                    <h5>Gerente regional de Algun lugar</h5>
                  </div>
                  <FontAwesomeIcon onClick={() => {setHide1(false)}} icon={faArrowRight}/>
                  </>
                  :
                    <>
                    {hide2 ?
                            <>
                              <FontAwesomeIcon onClick={() => setHide1(true)} icon={faArrowLeft}/>
                              <div>
                                <h1>"Excelentes compañeros de trabajo, se nota que saben lo que hacen"</h1>
                                <img src={logo3} alt="" />
                                <h4>Pedro Pablo</h4>
                                <h5>CEO/Gerente de Algun Lugar</h5>
                              </div>  
                              <FontAwesomeIcon onClick={() => {setHide2(false)}} icon={faArrowRight}/>
                              </>
                      :
                              <>
                               <FontAwesomeIcon onClick={() => setHide2(true)} icon={faArrowLeft}/>
                               <div>
                                <h1>"No podría estar más conforme con el trabajo que realizan. Los servicios son precisos, claros y eficientes"</h1>
                                <img src={logo4} alt="" />
                                <h4>Pedro Pablo</h4>
                                <h5>CEO/Gerente de Algun Lugar</h5>
                              </div>  
                              <FontAwesomeIcon 
                              style={{color: 'transparent',
                              cursor: 'default'
                              }}
                              icon={faArrowRight}/>
                              </>
                    }
                    </>
                  }
                  </>
              }
          </div>

          <div className="title">
            <h1><strong>Construyendo con los Mejores</strong></h1>
          </div>
        </Container>
      </>
     );
}
 
export default Referencias;

const Container = styled.div`
    width: 100%;
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.theme.secondary};
    background: #d8d8d8e8;
    user-select: none;

    span {
            padding-top: 13vh;
            margin-top: -13vh;
        }

    
    .title {
      h1 {
        margin: 0;
        color: ${props => props.theme.secondary};
      }
    }

      svg, span {
        cursor: pointer;
        font-size: 30px;

        &:hover {
          filter: contrast(10%);
        }
      }


    .references-box {
      width: 70%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      @media (max-width: 1100px) {
            width: 80%;
          }
          @media (max-width: 764px) {
            width: 95%;
          }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          gap: 10px;
          background: #ffffffbe;
          border-top-left-radius: 50px;
          border-bottom-right-radius: 50px;
          padding: 20px;
          animation-name: movimiento;
          animation-duration: 1.3s;
          animation-iteration-count: infinite;
          
          @keyframes movimiento {
              8.33% {transform: translate(0px, 1px);}
              16.66% {transform: translate(0px, 2px);}
              25% {transform: translate(0px, 3px);}
              32.32% {transform: translate(0px, 4px);}
              41.65% {transform: translate(0px, 5px);}
              50% {transform: translate(0x, 6px);}
              58.31% {transform: translate(0px, 5px);}
              66.64% {transform: translate(0px, 4px);}
              74.97% {transform: translate(0px, 3px);}
              83.3% {transform: translate(0px, 2px);}
              91.63% {transform: translate(0px, 1px);}
              100% {transform: translate(0px, 0px);}
        }

        img {
          height: 50px;
        }

        h1 {
          text-align: center;
          width: 70%;
          font-size: 32px;

          @media (max-height: 720px) {
            font-size: 26px;
          }

          @media (max-width: 1100px) {
            font-size: 24px;
          }
          @media (max-width: 764px) {
            font-size: 18px;
          }
        }
        h4, h5 {
          @media (max-width: 1100px) {
            font-size: 20px;
          }
          @media (max-width: 764px) {
            font-size: 16px;
          }

        }
    }
  }

    
`