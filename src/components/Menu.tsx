import styled from "styled-components";
import Datos from "./Datos";
import MenuMobile from "./MenuMobile";


const Menu = ({handleChangeTheme} : any) => {


    return ( 
            <MenuContainer>
                <Datos/>
                <MenuMobile handleChangeTheme={handleChangeTheme}/>
            </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 100;
    box-shadow: -2px 16px 54px -27px rgba(0, 0, 0, 0.753);
    `
    