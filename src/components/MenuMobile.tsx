import styled from 'styled-components'
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';


const MenuMobile = (props : {handleChangeTheme: ()=> void}) => {

    const location = useLocation()

    return ( 
        <MenuMobileContainer>
                <NavBar/>

        </MenuMobileContainer>
     );
}

export default  MenuMobile;

const MenuMobileContainer = styled.div`
        width: 85%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;

        @media (max-width: 1100px) {
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
        }

`