import styled from 'styled-components';
import BrandMain from './BrandMain';
import Nosotros from './Nosotros';



const Main = () => {

  return (
    <AppContainer>
        <BrandMain/>
        <div className="hide">
          {/* <Marcas/> */}
          <Nosotros/>
        </div>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
`