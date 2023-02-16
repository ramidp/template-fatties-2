import styled from 'styled-components';
import { OffCanvasTop } from './OffCanvasTop';


const MenuNav = () => {

  return (
    <MenuNavContainer>
            <OffCanvasTop/>
            <a href="#top"><h3>Servicios</h3></a>
            <a href="#menu"><h3>Marcas</h3></a>
            <a href="#nosotros"><h3>Nosotros</h3></a>
            <a href="blog" target="_blank"><h3>Blog</h3></a>
            <a href="faq" target="_blank"><h3>FAQ</h3></a>
            <a href="#contacto"><h3>Contacto</h3></a>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    color: white;
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-top: 70px;
    gap: 25px;

    @media (max-width: 991px) {
      margin: auto 0;
      justify-content: center;
      align-items: center;
    }

    a {
      text-decoration: none;
      h3 {
        margin: 0;
        font-size: 20px;
        color: ${props => props.theme.secondary};
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          filter: contrast(20%)
        }
      }
    }
    
    .hide {
        @media (max-width: 991px) {
      display: none;
    }
}
`

