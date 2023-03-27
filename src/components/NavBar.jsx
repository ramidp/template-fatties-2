import styled from 'styled-components';
import { OffCanvasTop } from './OffCanvasTop';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faQuestion, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'


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
                <>
                {isHome ?
                <Link 
                to="top"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                ><h3>Home</h3>

                </Link>
                  :
                <a href="/"><h3>Home</h3></a>
                }
                </>
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
    width: 70%;
    height: 100%;
    flex-direction: row;
    margin-top: 70px;
    margin: auto 0;
    justify-content: center;
    align-items: center;

    /* .underline {
      display: flex;
      justify-content: space-between;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 7px;
      }
    } */

    a {
      width: auto;
      text-decoration: none;


      h3 {
        text-align: center;
        padding: 10px;
        margin: 0;
        font-size: 18px;
        color: ${props => props.theme.secondary};
        cursor: pointer;

        &:hover {
          background-color: rgba(239,73,49, 0.2);
        }
        @media (max-width: 1100px) {
          padding: 10px;
          font-size: 18px;
      }

      }
    }
    
    .hide {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 20%;

      @media (max-width: 1100px) {
        padding: 0;
      }

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

