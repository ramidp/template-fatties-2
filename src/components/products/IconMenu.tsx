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

                            {/* <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="servicios"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={50}>
                                <FontAwesomeIcon icon={faGears}/>
                            </Link>

                            <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="marcas"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={50}>
                                <FontAwesomeIcon icon={faUsers}/>
                            </Link>

                            <Link 
                            style={{display: 'flex',
                            flexDirection: 'column',
                            }}
                            className="contactbtn" 
                            to="referencias"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={50}>
                                <FontAwesomeIcon icon={faRegistered}/>
                            </Link> */}
                            
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
    top: 8%;

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
                color: green;
            }
        }
    }
    
`