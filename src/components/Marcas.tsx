import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Aca van los logos de las marcas que trabajan, completarlo cuando tenga algunos logos, mi idea es poner un 3 x 3 de logos con sus anchors (links)
// Y con un interval de un tiempo suficiente para clickear y ver todos, o después podemos ver la transicion bien, por ahora es una beta.
// Tal vez con 2 Partes sea suficiente.

const Marcas = () => {

  const coPainLogo = require('../images/Brands-Logos/copainlogo.png')

    return ( 
        <Container>
          <div className="main">
            <div className="another-section">
              <h3>
                Estás son algunas de las marcas con las cuales trabajamos actualmente.
                <br />
                Contamos con un gran portfolio de reconocidas firmas.
                <br />
                Nos especializamos en brindar un servicio profesional 
                <br />
                y dedicado con seguimiento día a día.
                </h3>
            </div>
            <div className="carousel-section">
            <Carousel fade>
              <Carousel.Item interval={1000000000}>
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
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="marcas-div m-0">
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <a className="logo-a" target="_blank" href="https://www.instagram.com/copain_boulangerie">
                      <img src={coPainLogo} alt="" />
                     </a>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                  </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="marcas-div m-0 ">
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <a className="logo-a" target="_blank" href="https://www.instagram.com/copain_boulangerie">
                      <img src={coPainLogo} alt="" />
                     </a>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </Container>
     );
}
 
export default Marcas;

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    .main {
        background: white;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    h3 {
      font-size: 22px;
      text-align: center;
      color: black;
    }

    .carousel-item {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .carousel-section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button, span, a {
        display: none;
      }
  
      .marcas-div {
        width: 40%;
        margin: 10px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;

          .logo-a, img {
            display: block;
            height: 80px;
            border-radius: 15px;
            filter: opacity(70%);
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
              border-radius: 15px;
              margin: 0;
              cursor: pointer;
              &:hover {
                filter: contrast(70%)
              }
          }
    }
    .another-section {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    
`