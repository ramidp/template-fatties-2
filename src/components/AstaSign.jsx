import styled from 'styled-components'
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase/firebaseConfig';

const AstaSign = () => {
    return ( 

        <Container>

            <p>Hecho por:</p>

            <a 
            onClick={() => logEvent(analytics, 'AstaSign | Asta eStudio')}
            href="https://asta-portfolio.web.app/"
            target='_blank'
            >
            <span>アスタ</span> | Asta
            </a>

        </Container>
     );
}
 
export default AstaSign;

const Container = styled.div`

background-color: #c0c0c0;
display: flex;
margin: 0;
justify-content: flex-end;
align-items: center;
gap: 10px;
padding: 0 100px;

@media (max-width: 764px) {
    padding: 0 50px;
}

p {
    font-family: 'Raleway'!important;
    margin: 0;
    color: #494949;
    font-weight: 500;
    font-size: 14px;

    @media (min-width: 2048px) {
        font-size: 18px;
    }
    
}

span {
    font-family: 'Raleway'!important;
}

a { 
    text-decoration: none;
    text-align: right;
    margin: 0;
    font-weight: 700;
    color: #2b2b2b;
    font-size: 16px;
    padding: 5px 0;
    transition: 500ms ease all;
    font-family: 'Raleway'!important;

    @media (min-width: 2048px) {
        font-size: 20px;
    }
    

    &:hover {
        color: white;
    }
}
    

`