import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Aca van los logos de las marcas que trabajan, completarlo cuando tenga algunos logos, mi idea es poner un 3 x 3 de logos con sus anchors (links)
// Y con un interval de un tiempo suficiente para clickear y ver todos, o después podemos ver la transicion bien, por ahora es una beta.
// Tal vez con 2 Partes sea suficiente.

const Marcas = () => {

  const coPainLogo = require('../images/Brands-Logos/copainlogo.png')

    return ( 
      <>
          <span id="marcas"></span>
      <Container>
            <div className="another-section">
              <h3>
                Ellos confian en nosotros, nosotros confiamos en ellos. 
                <br />
                Más de 30 empresas trabajando con nosotros.
                </h3>
            </div>
            <div className="carousel-section">
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <div className="marcas-div m-0">
                  <a className="logo-a" target="_blank" href="https://www.instagram.com/copain_boulangerie">
                    <img src={coPainLogo} alt="" />
                  </a>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="marcas-div m-0 ">
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                  <p>23</p>
                  <p>24</p>
                  <p>25</p>
                  <p>26</p>
                  <p>27</p>
                  <a className="logo-a" target="_blank" href="https://www.instagram.com/copain_boulangerie">
                    <img src={coPainLogo} alt="" />
                    </a>
                  <p>29</p>
                  <p>30</p>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
            <div className="wallpaper">
            </div>
        </Container>
      </>
     );
}
 
export default Marcas;

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    background-color: ${props => props.theme.gray};

    @media (max-width: 1100px) {
      min-height: 40vh;
      height: auto;
    }
    @media (max-height: 720px) {
      padding-top: 20px;
    }

    .carousel-item {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .carousel-section {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      button, span, a {
        display: none;
      }
  
      .marcas-div {
        width: 70%;
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;

        @media (max-width: 1100px) {
          width: 90%;
        }
 
          .logo-a, img {
            display: block;
            height: 80px;
            filter: opacity(85%);

            @media (max-width: 1100px) {
              height: 70px;
            }

            @media (max-width: 764px) {
              height: 40px;
            }

            &:hover {
                  cursor: pointer;
                  filter: contrast(70%)
                }
              }
        }
          p {
              margin: 0;
              filter: opacity(70%);
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 30px;
              width: 80px;
              height: 80px;
              text-align: center;
              background-color: white;
              color: ${ props => props.theme.secondary};
              margin: 0;

              @media (max-width: 1100px) {
              width: 70px;
              height: 70px;
              font-size: 20px;
            }
              @media (max-width: 764px) {
              width: 40px;
              height: 40px;
              font-size: 16px;
            }
            
              cursor: pointer;
              &:hover {
                filter: contrast(70%)
              }
          }
    }

    .another-section {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background-color: ${props => props.theme.secondary}; */
      z-index: 1;

        h3 {
        margin: 0;
        width: 90%;
        font-size: 30px;
        text-align: center;
        padding: 0 100px ;
        color: ${props => props.theme.secondary};

        @media (max-width: 1475px) {
            padding: 10px;
          }

        @media (max-width: 1100px) {
            padding: 0;
            font-size: 24px;
          }

          @media (max-width: 764px) {
            padding: 0;
            font-size: 18px;
            }
      }
    }


    
`