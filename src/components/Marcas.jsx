import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


// Aca van los logos de las marcas que trabajan, completarlo cuando tenga algunos logos, mi idea es poner un 3 x 3 de logos con sus anchors (links)
// Y con un interval de un tiempo suficiente para clickear y ver todos, o después podemos ver la transicion bien, por ahora es una beta.
// Tal vez con 2 Partes sea suficiente.

const Marcas = () => {
  
  const [logos, setLogos] = useState([])
  
  useEffect(() => {

    setLogos(
        [
          {brand : 
            {
              id: 1,
              name: 'Co Pain',
              img: require('../images/Brands-Logos/co-pain.webp'),
              link: 'https://www.instagram.com/copain_boulangerie'
          }},
          {brand : 
            {
              id: 2,
              name: 'Cafe Martinez',
              img: require('../images/Brands-Logos/Cafe-Martinez.webp'),
              link: 'http://www.cafemartinez.com/'
          }},
          {brand : 
            {
              id: 3,
              name: 'Dietetica Tommy',
              img: require('../images/Brands-Logos/tommy.png'),
              link: 'https://www.dieteticastomy.com.ar/'
          }},
          {brand : 
            {
              id: 4,
              name: 'Freddo',
              img: require('../images/Brands-Logos/Freddo-logo.png'),
              link: 'https://ar.freddo.com/'
          }},
          {brand : 
            {
              id: 5,
              name: 'Deniro',
              img: require('../images/Brands-Logos/deniro.png'),
              link: 'https://www.denirohamburgueseria.com.ar/'
          }},
          {brand : 
            {
              id: 6,
              name: 'Den Helder',
              img: require('../images/Brands-Logos/den-helder.png'),
              link: 'https://denhelder.com.ar/'
          }},
          {brand : 
            {
              id: 7,
              name: 'Panaderia El Calafate',
              img: require('../images/Brands-Logos/el-calafate.jpg'),
              link: 'https://www.instagram.com/elcalafatepanificacion/?hl=en'
          }},
          {brand : 
            {
              id: 8,
              name: 'La Ferneteria',
              img: require('../images/Brands-Logos/ferneteria.png'),
              link: 'https://www.laferneteria.com/'
          }},
          {brand : 
            {
              id: 9,
              name: 'La Farola',
              img: require('../images/Brands-Logos/la-farola.png'),
              link: 'https://www.instagram.com/lafarolaoriginal_'
          }},
          {brand : 
            {
              id: 10,
              name: 'Basta de Lobby',
              img: require('../images/Brands-Logos/basta-de-lobby.png'),
              link: 'https://bastadelobby.com/'
          }},
          {brand : 
            {
              id: 11,
              name: 'Casper Pet Store',
              img: require('../images/Brands-Logos/casper-pet.png'),
              link: 'https://casperpetstore.com.ar/'
          }},
          {brand : 
            {
              id: 12,
              name: 'Coquitos Online',
              img: require('../images/Brands-Logos/coquitos-online.png'),
              link: ''
          }},
          {brand : 
            {
              id: 13,
              name: 'Don Blanco',
              img: require('../images/Brands-Logos/don-blanco1.jpg'),
              link: 'https://www.instagram.com/pasteleriadonblanco'
          }},
          {brand : 
            {
              id: 14,
              name: 'El Desembarco',
              img: require('../images/Brands-Logos/el-desembarco.png'),
              link: 'https://www.instagram.com/eldesembarcook'
          }},
          {brand : 
            {
              id: 15,
              name: 'Il Vero Pippo',
              img: require('../images/Brands-Logos/il-vero-pippo.png'),
              link: 'https://pippo.com.ar/'
          }},
          {brand : 
            {
              id: 16,
              name: 'La Choripaneria',
              img: require('../images/Brands-Logos/la-choripaneria.jpg'),
              link: 'https://www.instagram.com/choripaneriaalpaso'
          }},
          {brand : 
            {
              id: 17,
              name: 'La Continental',
              img: require('../images/Brands-Logos/la-continental.jpg'),
              link: 'https://www.lacontinental.com/'
          }},
          {brand : 
            {
              id: 18,
              name: 'Tropea',
              img: require('../images/Brands-Logos/latino-sandwich.png'),
              link: 'https://www.latinosandwich.com/'
          }},
          {brand : 
            {
              id: 19,
              name: 'Las Cuartetas',
              img: require('../images/Brands-Logos/las-cuartetas.jpg'),
              link: 'http://www.lascuartetas.com/'
          }},
          {brand : 
            {
              id: 20,
              name: 'Perlutti',
              img: require('../images/Brands-Logos/perlutti.png'),
              link: 'https://www.pertutti.com.ar/'
          }},
          {brand : 
            {
              id: 21,
              name: 'Pompeya',
              img: require('../images/Brands-Logos/pompeya.jpg'),
              link: 'https://www.instagram.com/pompeyapubsocial_'
          }},
          {brand : 
            {
              id: 22,
              name: 'Sei Tu',
              img: require('../images/Brands-Logos/sei-tu1.png'),
              link: 'https://www.seitu.com/'
          }},
          {brand : 
            {
              id: 23,
              name: 'Sig School',
              img: require('../images/Brands-Logos/sigschool.png'),
              link: 'https://www.instagram.com/sigschoolargentina'
          }},
          {brand : 
            {
              id: 24,
              name: 'Super Todo',
              img: require('../images/Brands-Logos/super-todo.png'),
              link: 'https://supertodo.com.ar/'
          }},
          {brand : 
            {
              id: 25,
              name: 'Tante Frida',
              img: require('../images/Brands-Logos/tante-frida.png'),
              link: 'http://tantefrida.com/'
          }},
          {brand : 
            {
              id: 26,
              name: 'Tomasso',
              img: require('../images/Brands-Logos/tomasso.png'),
              link: 'https://tomassopizzas.com.ar/'
          }},
          {brand : 
            {
              id: 27,
              name: 'Tostado Cafe Club',
              img: require('../images/Brands-Logos/tostado-cafe-club.png'),
              link: 'http://www.tostadocafeclub.com/'
          }},
          {brand : 
            {
              id: 28,
              name: 'Vitalcer',
              img: require('../images/Brands-Logos/vitalcer.png'),
              link: 'http://www.vitalcer.com/'
          }},
          {brand : 
            {
              id: 29,
              name: 'Tropea',
              img: require('../images/Brands-Logos/tropea.png'),
              link: 'http://tropea.com.ar'
          }},
          
        ]) 
    },[])

  const animation = 'zoom-in'

  useEffect (() => {
      Aos.init({
          duration: 2500,
          once: true,
      });
  },[])

    return ( 
      <Container
        datos-aos={animation}
        datos-aos-delay="2500"
      >
          <span id="marcas"></span>
            <div className="another-section">
              <h3>
                Ellos confian en nosotros, nosotros confiamos en ellos.
                <br />
                Más de 30 empresas trabajando con nosotros.
                </h3>
            </div>
            <div className="carousel-section">
                <div
                className="marcas-div m-0">
                {
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
                }
                </div>
            </div>
            <div className="wallpaper">
            </div>
        </Container>
     );
}
 
export default Marcas;

const Container = styled.div`
    width: 100%;
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    background-color: ${props => props.theme.secondary};

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
        width: auto;
        max-width: 70vw;
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 30px;

        @media (max-width: 1100px) {
          width: 90%;
        }
 
          .logo-a, img {
            display: block;

              img {
                height: 80%;
                transition: all 0.3s ease-in;
                &:hover {
                  height: 90%;
                }
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
        width: 100%;
        font-size: 26px;
        text-align: center;
        padding: 0 100px ;
        color: white;

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