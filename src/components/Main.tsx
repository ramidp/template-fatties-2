import styled from 'styled-components';
import BrandMain from './BrandMain';
import Marcas from './Marcas';
import Nosotros from './Nosotros';



const Main = () => {

  return (
    <AppContainer>
          <BrandMain/>
          <Marcas/>
          <Nosotros/>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
  height: auto;

`