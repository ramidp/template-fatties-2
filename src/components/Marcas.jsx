import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import 'aos/dist/aos.css'


// Aca van los logos de las marcas que trabajan, completarlo cuando tenga algunos logos, mi idea es poner un 3 x 3 de logos con sus anchors (links)
// Y con un interval de un tiempo suficiente para clickear y ver todos, o después podemos ver la transicion bien, por ahora es una beta.
// Tal vez con 2 Partes sea suficiente.

const Marcas = () => {
  
  const [logos, setLogos] = useState([])
  
  // useEffect(() => {
  //   setLogos(
  //       [
  //         {brand : 
  //           {
  //             id: 1,
  //             name: 'Co Pain',
  //             img: require('../images/Brands-Logos/co-pain.webp'),
  //             link: 'https://www.instagram.com/copain_boulangerie'
  //         }},
  //         {brand : 
  //           {
  //             id: 2,
  //             name: 'Cafe Martinez',
  //             img: require('../images/Brands-Logos/Cafe-Martinez.webp'),
  //             link: 'http://www.cafemartinez.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 3,
  //             name: 'Dietetica Tommy',
  //             img: require('../images/Brands-Logos/tommy.png'),
  //             link: 'https://www.dieteticastomy.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 4,
  //             name: 'Freddo',
  //             img: require('../images/Brands-Logos/Freddo-logo.png'),
  //             link: 'https://ar.freddo.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 5,
  //             name: 'Deniro',
  //             img: require('../images/Brands-Logos/deniro.png'),
  //             link: 'https://www.denirohamburgueseria.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 6,
  //             name: 'Den Helder',
  //             img: require('../images/Brands-Logos/den-helder.png'),
  //             link: 'https://denhelder.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 7,
  //             name: 'Panaderia El Calafate',
  //             img: require('../images/Brands-Logos/el-calafate.jpg'),
  //             link: 'https://www.instagram.com/elcalafatepanificacion/?hl=en'
  //         }},
  //         {brand : 
  //           {
  //             id: 8,
  //             name: 'La Ferneteria',
  //             img: require('../images/Brands-Logos/ferneteria.png'),
  //             link: 'https://www.laferneteria.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 9,
  //             name: 'La Farola',
  //             img: require('../images/Brands-Logos/la-farola.png'),
  //             link: 'https://www.instagram.com/lafarolaoriginal_'
  //         }},
  //         {brand : 
  //           {
  //             id: 10,
  //             name: 'Basta de Lobby',
  //             img: require('../images/Brands-Logos/basta-de-lobby.png'),
  //             link: 'https://bastadelobby.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 11,
  //             name: 'Casper Pet Store',
  //             img: require('../images/Brands-Logos/casper-pet.png'),
  //             link: 'https://casperpetstore.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 12,
  //             name: 'Coquitos Online',
  //             img: require('../images/Brands-Logos/coquitos-online.png'),
  //             link: ''
  //         }},
  //         {brand : 
  //           {
  //             id: 13,
  //             name: 'Don Blanco',
  //             img: require('../images/Brands-Logos/don-blanco1.jpg'),
  //             link: 'https://www.instagram.com/pasteleriadonblanco'
  //         }},
  //         {brand : 
  //           {
  //             id: 14,
  //             name: 'El Desembarco',
  //             img: require('../images/Brands-Logos/el-desembarco.png'),
  //             link: 'https://www.instagram.com/eldesembarcook'
  //         }},
  //         {brand : 
  //           {
  //             id: 15,
  //             name: 'Il Vero Pippo',
  //             img: require('../images/Brands-Logos/il-vero-pippo.png'),
  //             link: 'https://pippo.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 16,
  //             name: 'La Choripaneria',
  //             img: require('../images/Brands-Logos/la-choripaneria.jpg'),
  //             link: 'https://www.instagram.com/choripaneriaalpaso'
  //         }},
  //         {brand : 
  //           {
  //             id: 17,
  //             name: 'La Continental',
  //             img: require('../images/Brands-Logos/la-continental.jpg'),
  //             link: 'https://www.lacontinental.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 18,
  //             name: 'Tropea',
  //             img: require('../images/Brands-Logos/latino-sandwich.png'),
  //             link: 'https://www.latinosandwich.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 19,
  //             name: 'Las Cuartetas',
  //             img: require('../images/Brands-Logos/las-cuartetas.jpg'),
  //             link: 'http://www.lascuartetas.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 20,
  //             name: 'Perlutti',
  //             img: require('../images/Brands-Logos/perlutti.png'),
  //             link: 'https://www.pertutti.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 21,
  //             name: 'Pompeya',
  //             img: require('../images/Brands-Logos/pompeya.jpg'),
  //             link: 'https://www.instagram.com/pompeyapubsocial_'
  //         }},
  //         {brand : 
  //           {
  //             id: 22,
  //             name: 'Sei Tu',
  //             img: require('../images/Brands-Logos/sei-tu1.png'),
  //             link: 'https://www.seitu.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 23,
  //             name: 'Sig School',
  //             img: require('../images/Brands-Logos/sigschool.png'),
  //             link: 'https://www.instagram.com/sigschoolargentina'
  //         }},
  //         {brand : 
  //           {
  //             id: 24,
  //             name: 'Super Todo',
  //             img: require('../images/Brands-Logos/super-todo.png'),
  //             link: 'https://supertodo.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 25,
  //             name: 'Tante Frida',
  //             img: require('../images/Brands-Logos/tante-frida.png'),
  //             link: 'http://tantefrida.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 26,
  //             name: 'Tomasso',
  //             img: require('../images/Brands-Logos/tomasso.png'),
  //             link: 'https://tomassopizzas.com.ar/'
  //         }},
  //         {brand : 
  //           {
  //             id: 27,
  //             name: 'Tostado Cafe Club',
  //             img: require('../images/Brands-Logos/tostado-cafe-club.png'),
  //             link: 'http://www.tostadocafeclub.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 28,
  //             name: 'Vitalcer',
  //             img: require('../images/Brands-Logos/vitalcer.png'),
  //             link: 'http://www.vitalcer.com/'
  //         }},
  //         {brand : 
  //           {
  //             id: 29,
  //             name: 'Tropea',
  //             img: require('../images/Brands-Logos/tropea.png'),
  //             link: 'http://tropea.com.ar'
  //         }},
          
  //       ]) 
  //   },[])

    return ( 
      <Container
      >
          <span id="marcas"></span>
            <div className="another-section">
              <h1>
              Crecer juntos 
              <br />
              es nuestra meta.</h1>
              <h3>
              Asesoramos a mas de 5000 emprendedores, comercios 
              <br />
              y empresas en el pais, a través de nuestra agencia.
              </h3>
            </div>

            <div className="carousel-sect">
              <div className="marcas-div">
                {/* {
                  logos.sort((a, b) => a.brand.name.localeCompare(b.brand.name)).map((logo) => {
                    return (
                    <a
                    key={logo.brand.id}
                    className="logo-a"
                    data-aos={animation} 
                    style={{height: '70px'}}
                    target="_blank" href={logo.brand.link}>
                      <img 
                      src={logo.brand.img} alt="" />
                    </a>
                    )
                  })
                } */}

                <div className="wallimg"></div>
              </div>
            </div>
        </Container>
     );
}
 
export default Marcas;

const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: calc(80vh);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    gap: 30px;
    padding: 100px 0;

    span {
            padding-top: 80px;
            margin-top: -80px;

            @media (max-width: 764px) {
              padding-top: 0px;
              margin-top: 0px;
            }
        }

    @media (max-width: 1100px) {
      min-height: 73vh;
      height: auto;
    }
    @media (max-height: 720px) {
      padding-top: 20px;
    }

   
    .carousel-sect {
     height: auto;
     position: relative;
     width: 100%;
     display: flex;
     overflow: hidden;

      &::after{
        top: 0;
        left: -2%;
        content: '';
        position: absolute;
        width: 10%;
        height: 100%;
        background: linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%);
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        width: 10%;
        height: 100%;
        right: -2%;
        top: 0;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%);
        z-index: 2;
      }

      
      .marcas-div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        align-items: center;
        width: calc(250px * 16);
        animation: scroll 10s linear infinite;
        &:hover {
          animation-play-state: paused;
        }

        .wallimg {
          background-image: url('https://i.ibb.co/gyQqkJb/banner-2.png');
          background-size: cover;
          width: 100%;
          height: 350px;
          background-repeat: repeat-x;
          animation-duration: 2000s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: normal;
          animation-fill-mode: none;
          animation-play-state: running;
          animation-name: carousel;

            @keyframes carousel {
              0% {background-position: 0 0}
              100% {background-position: -100000px 0}
          }

            @media (max-width: 764px) {
              height: 250px;          
            }

        /* @keyframes scroll {
          0% {transform: translateX(0)};
          100% { transform: translateX(calc(-250px * 7))}
        } */
      }

      a {
        perspective: 100px;
        cursor: default;

        img {
          height: 70px;
          display: flex;
          align-items: center;
          transition: transform 1s;
          &:hover {
            transform: translateZ(10px);
          }
        }
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

        h1 {
          margin: 0;
          width: 100%;
          font-size: 50px;
          font-weight: 900;
          text-align: center;
          padding-bottom: 10px;

          @media (max-width: 1400px) {
          font-size: 40px;
          }

          @media (max-width: 764px) {
          font-size: 30px;
          }
          
        }
        h3 {
        margin: 0;
        width: 100%;
        font-size: 24px;
        text-align: center;
        font-weight: 400;
        padding: 10px 20px;

        @media (max-width: 1100px) {
            font-size: 22px;
          }

          @media (max-width: 764px) {
            font-size: 18px;
            }
      }
    }


    
`