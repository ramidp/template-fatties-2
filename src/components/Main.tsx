import styled from 'styled-components';
import BrandMain from './BrandMain';
import Marcas from './Marcas';
import Referencias from './Referencias';
import React from 'react'
import Formulario from './tools/Form';
import Banner from './tools/Banner';



const Main = () => {

  return (
    <AppContainer>
      <BrandMain />
      <Banner />
      <Marcas />
      <Referencias />
      <Formulario />
    </AppContainer>
  );
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
  height: auto; 
`