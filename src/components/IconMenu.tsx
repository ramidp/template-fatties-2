import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUsers ,faHome, faGears, faRegistered} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
const IconMenu = () => {

    const location1 = useLocation()
    const isHome = location1.pathname === '/'
    
    return ( 
        <Container>
            <div className="menu-div">

                    { 
                    isHome &&

                    <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={50}
                    >                                
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                    }   
                    
            </div>
        </Container>
     );
}
 
export default IconMenu;

const Container = styled.div`
    position: fixed;
    width: auto;
    height: 100%;
    background: transparent;
    z-index: 10;
    right: 0%;
    top: 9%;

    .menu-div {
        gap: 15px;
        display: flex;
        flex-direction: column;
        padding-right: 10px;

       a, svg {
            text-decoration: none;
            margin: 0;
            text-align: center;
            color: ${props => props.theme.secondary};
            font-size: 20px;
            width: fit-content;
            &:hover {
                cursor: pointer;
                filter: contrast(50%);
            }
        }
    }
    
`