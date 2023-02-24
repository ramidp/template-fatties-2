import styled from 'styled-components';
import { OffCanvasTop } from './OffCanvasTop';

const MenuNav = () => {

  return (
    <MenuNavContainer>
            <OffCanvasTop/>
            <div className="hide">
              <a href="/#top"><h3>Servicios</h3></a>
              <a href="/#marcas"><h3>Marcas</h3></a>
              <a href="/#nosotros"><h3>Nosotros</h3></a>
              <a href="/blog"><h3 className="arrow" >Blog</h3></a>
              <a href="/faq"><h3 className="arrow" >FAQ</h3></a>
              <a href="#contacto"><h3>Contacto</h3></a>
            </div>
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

    @media (max-width: 991px) {
      margin: auto 0;
      justify-content: center;
      align-items: center;
    }

    .arrow {
      display: flex;
      justify-content: space-between;

      &:hover {
       &::after{

          color: red;
          content: ' >>'
        }

      }
    }

    a {
      text-decoration: none;

      h3 {
        padding: 10px 20px;
        margin: 0;
        font-size: 18px;
        color: ${props => props.theme.secondary};
        cursor: pointer;
        &:hover {
          border-radius: 10px;
          background-color: rgba(239,73,49, 0.2);
        }
      }
    }
    
    .hide {
      display: flex;
      flex-direction: column;

        @media (max-width: 991px) {
      display: none;
    }
}
`

