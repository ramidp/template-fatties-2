import React, { useState } from 'react'
import styled from 'styled-components';
import BrandMain from './BrandMain';
import Products from './Products';
import Nosotros from './Nosotros';
import Marcas from './Marcas';



const Main = () => {

  return (
    <AppContainer>
        <div className="hide">
          <BrandMain/>
          <Marcas/>
          <Nosotros/>
        </div>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }

     .hide {
    @media (max-width: 991px) {
      display: none;
    }
     }
`