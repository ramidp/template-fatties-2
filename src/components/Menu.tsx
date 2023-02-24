import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Datos from "./Datos";
import MenuMobile from "./MenuMobile";


const Menu = () => {


    return ( 
            <MenuContainer>
                <Datos/>
                <MenuMobile/>
            </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    min-width: 170px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 100;
    box-shadow: -2px 16px 54px -27px rgba(0, 0, 0, 0.753);

        @media (max-width: 991px) {
            flex-direction: row;
            width: 90%;
            height: 100px;
        }
    `
    