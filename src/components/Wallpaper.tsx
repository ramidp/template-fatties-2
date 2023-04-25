import styled from "styled-components";

const Wallpaper = () => {
    return ( 

        <Container>

            
        </Container>
     );
}
 
export default Wallpaper;

const Container = styled.div`
    width: 0;
    height: 0;
    border-right: 30vw solid transparent;
    border-left: 35vw solid rgb(243, 124, 105);
    border-bottom: 50vw solid ${props => props.theme.secondary};
    position: fixed;
    animation: bgmovement 1s ease forwards;
    
`