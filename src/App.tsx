import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import Footer2 from './components/Footer2';
import WhatsAppBtn from './components/WhatsApp';
import Marcas from './components/Marcas';
import Wallpaper from './components/Wallpaper';
import LoadingPage from './components/LoadingPage';

const App = () => {

  const theme = ({

      primary: 'rgb(84,193,186)',
      secondary: 'rgb(239,73,49)', // Main Color de la página
      tertiary: 'rgb(245,186,63)',
      lightGray: '#e2e2e2',
      mainFont: "Red Hat Display", // Fuente 1
  })

  return (
      <AppContainer>
      <BrowserRouter>
      <LoadingPage/>
      <Wallpaper/>
      <WhatsAppBtn/>
      <ThemeProvider theme={theme}>
        <div className="menu">
          <Menu/>
        </div>
        <div className="center">
                  <Routes>
                    <Route path="/" element={<Main/>}/>
                    {/* <Route path="/Products" element={<Products/>}/> */}
                    <Route path="/Marcas" element={<Marcas/>}/>
                    <Route path="/Nosotros" element={<Nosotros/>}/>
                    <Route path="/Contacto" element={<Footer2/>}/>
                  </Routes>
                  <Footer/>
        </div>
      </ThemeProvider>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    margin: 0 auto;
    display: flex;
    height: auto;
    width: 90%;


    .menu {
      min-width: 150px;
      @media (max-width: 991px) {
        min-width: 0;
      }
    }

    .center {
      box-shadow: 29px 10px 56px -9px rgba(0,0,0,0.27);
      width: 100%;
      background-color: inherit;
      @media (max-width: 991px) {
        margin-top: 100px;
      }
    }

     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }
     

`