import { useState } from 'react';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import Footer2 from './components/Footer2';


const App = () => {

  const [theme, setTheme] = useState({

      primary: 'rgb(54,99,254)',
      secondary: 'black',
      tertiary: 'rgb(245,250,253)',
      fourth: 'gray',
      fontPrim: 'rgb(245,250,253)',
      fontSecond: 'black',
      fontTert: 'gray',
      fontFour: 'rgb(54,99,254)',
      mainFont: "Red Hat Display", // Fuente 1
  })

  return (
      <AppContainer>
      <ThemeProvider theme={theme}>
        <div className="menu">
          <Menu/>
        </div>
          <div className="center">
            <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Main/>}/>
                      <Route path="/Products" element={<Products/>}/>
                      <Route path="/Nosotros" element={<Nosotros/>}/>
                      <Route path="/Contacto" element={<Footer2/>}/>
                    </Routes>
                    <Footer/>
            </BrowserRouter>
          </div>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;

    .menu {
      width: 8%;
      min-width: 130px;
    }

    .center {
      width: 92%;
    }

     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }
     

`