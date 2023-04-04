import styled from 'styled-components';
import BrandMain from './BrandMain';
import Marcas from './Marcas';
import Referencias from './Referencias';
import React from 'react'



const Main = () => {

  return (
    <AppContainer>
          <BrandMain/>
          <Marcas/>
          <Referencias/>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
  height: auto;

`