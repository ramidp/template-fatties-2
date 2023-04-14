import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import LoadingPage from './components/LoadingPage';
import Blog from './components/products/Blog-map';
import Blog1 from './components/products/Blog1';
import Blog2 from './components/products/Blog2';
import Blog3 from './components/products/Blog3';
import Faq from './components/products/Faq';
import Faq1 from './components/products/Faq1';
import Faq2 from './components/products/Faq2';
import Faq3 from './components/products/Faq3';
import Main from './components/Main';
import WebFont from 'webfontloader'
import React, { useState } from 'react';
import WhatsAppBtn from './components/WhatsApp';
import Nosotros from './components/Nosotros';
import WallExample from './components/WallExample';
import IconMenu from './components/products/IconMenu';

const App = () => {

  WebFont.load ({
    google: {
      families: [
      'Ubuntu:400', 
      'Mate:400', 
      'Kosugi:400', 
      'Amiko:400', 
      'Anton:400', 
      'Antonio:400', 
      'Abril Fatface:400', 
      'Montserrat:300,400,500,700,900',
      'Helvetica:400:700:900',
      ''
  ]
    }
  });

  const [theme, setTheme] = useState({

      primary: 'rgb(84,193,186)',
      secondary: 'rgb(239,73,49)', // Main Color de la página
      secondaryOpact: 'rgb(248, 168, 156)',
      tertiary: 'rgb(245,186,63)',
      gray: '#f0f0f0',
      mainFont: "Arial", // Fuente 1
  })

  return (
    <ThemeProvider theme={theme}>
    <AppContainer>
      <BrowserRouter>
      <LoadingPage/>
      <WhatsAppBtn/>
      <IconMenu/>

        <div className="menu">
          <Menu/>
        </div>

        <div className="center">
                <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/blog" element={<Blog/>}/>
                  {/* Dynamic Router (I used useLocation to compare blog.ink against the location of the URL)*/}
                  <Route path={'/blog/mp_1'} element={<Blog1/>}/>
                  <Route path={'/blog/calim_1' } element={<Blog2/>}/>
                  <Route path={'/blog/mp_2' } element={<Blog3/>}/>
                  <Route path={'/faq/fatties_faq' } element={<Faq1/>}/>
                  <Route path={'/faq/mercadopago_faq' } element={<Faq2/>}/>
                  <Route path={'/faq/calim_faq' } element={<Faq3/>}/>


                  <Route path="/faq" element={<Faq/>}/>
                  <Route path="/nosotros" element={<Nosotros/>}/>
                  <Route path="/images/" element={<WallExample/>}/>
                  {/* <Route path="/Products" element={<Products/>}/> */}
                </Routes>
                <Footer/>
        </div>
      </BrowserRouter>
    </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
    margin: 0 auto;
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: column;

    .menu {
      font-family: ${props => props.theme.mainFont};
      width: 100%;
      height: 7vh;
    }

    .center {
      width: 100%;
      box-shadow: 29px 10px 56px -9px rgba(0,0,0,0.27);
      background-color: inherit;
    }
     
`