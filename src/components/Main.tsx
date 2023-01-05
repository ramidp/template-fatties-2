import React, { useState } from 'react'
import styled from 'styled-components';
import BrandMain from './BrandMain';
import Products from './Products';
import Promociones from './Nosotros';



const Main = () => {

  return (
    <AppContainer>
        <BrandMain/>
        <div className="hide">
          <Products/>
          <Promociones/>
        </div>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }

     .hide {
    @media (max-width: 991px) {
      display: none;
    }
     }
`