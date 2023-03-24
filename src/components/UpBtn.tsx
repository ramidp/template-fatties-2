import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const UpBtn = () => {


    return ( 
        <Container>
            <div>
                <a href="#top">
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
            </div>
        </Container>
     );
}
 
export default UpBtn;

const Container = styled.div`
    width: auto;
    height: auto;
    z-index: 100;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    bottom: 70px;
    right: 40px;

    div {
        padding-right: 160%;
        padding-bottom: 30%;
        @media (max-width: 1100px) {
            padding-right: 50%;
            padding-bottom: 30%;
  
        }
    }

    img {
        width: 60px;
    @media (max-width: 1100px) {
            width: 50px;
            }

    }
    
    svg { 
        width: 40px;
        height: 40px;
        color: rgb(239,73,49);
        
        &:hover {
            color: rgb(0, 0, 0);
            }
        }
    
`