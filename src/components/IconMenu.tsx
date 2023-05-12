import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const IconMenu = () => {

    const animation3 = 'fade-out'

    useEffect (() => {
        Aos.init({
            duration: 1500,
            once: true,
        });
    },[])
    

    const location1 = useLocation()
    const isHome = location1.pathname === '/'
    
    return ( 
        <Container>
            <div className="menu-div">

                    { 
                    isHome &&

                    <Link
                    data-aos={animation3}
                    
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
    background: transparent;
    z-index: 10;
    right: 0%;
    top: 10%;

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