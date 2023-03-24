import styled from 'styled-components';
import { OffCanvasTop } from './OffCanvasTop';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faQuestion, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';




const MenuNav = () => {

const [display, setDisplay] = useState(false)

const blogIcon = require ('../images/icons/blog.png')

const location1 = useLocation()
const isHome = location1.pathname === '/'

useEffect(() => {

  if (window.innerWidth <= 1100) {
    setDisplay(true)
  } else {
    setDisplay(false)
  }

},[display])


  return (
    <MenuNavContainer>
            {/* <OffCanvasTop/> */}
            <div className="hide">
              {
                display?
                <></>
                :
              <>
              {isHome ?
              <a href="#top"><h3>Home</h3></a>
                :
              <a href="/"><h3>Home</h3></a>
              }
              </>

              }

              <a href="/blog"><h3 className="underline">Blog</h3></a>
              <a href="/faq"><h3 className="underline">FAQ</h3></a>
              <a href="/contacto"><h3 className="underline">Contacto</h3></a>
            </div>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    color: white;
    display: flex;
    height: 100%;
    width: 60%;
    flex-direction: row;
    margin-top: 70px;
    margin: auto 0;
    justify-content: center;
    align-items: center;

    .underline {
      display: flex;
      justify-content: space-between;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 7px;
      }
    }

    a {
      width: auto;
      text-decoration: none;


      h3 {
        padding: 10px;
        margin: 0;
        font-size: 22px;
        color: ${props => props.theme.secondary};
        cursor: pointer;

        &:hover {
          background-color: rgba(239,73,49, 0.2);
        }
        @media (max-width: 1100px) {
          padding: 10px;
      }

      }
    }
    
    .hide {
      width: 100%;
      display: flex;
      flex-direction: row;

      a {
        img {
          width: 20px;
        }
        svg {
          font-size: 26px;
          padding: 10px 20px;
          color: ${props => props.theme.secondary};
          &:hover {
            cursor: pointer;
            background-color: rgba(239,73,49, 0.2);
          }
        }
      }

}
`

