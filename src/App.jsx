import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import LoadingPage from './components/tools/LoadingPage';
import Blog from './components/products/Blog-map';
import Blog1 from './components/products/Blog1';
import Blog2 from './components/products/Blog2';
import Blog3 from './components/products/Blog3';
import Blog4 from './components/products/Blog4';
import Blog5 from './components/products/Blog5';
import Blog6 from './components/products/Blog6';
import Blog8 from './components/products/Blog8';
import Blog7 from './components/products/Blog7';
import Faq from './components/products/Faq';
import Faq1 from './components/products/Faq1';
import Faq1_1 from './components/products/Faq1_1';
import Faq1_2 from './components/products/Faq1_2';
import Faq1_3 from './components/products/Faq1_3';
// import Faq2 from './components/products/Faq2';
// import Faq3 from './components/products/Faq3';
import Main from './components/Main';
import WebFont from 'webfontloader'
import React from 'react';
import WhatsAppBtn from './components/tools/WhatsApp';
import Nosotros from './components/Nosotros';
import Error404 from './components/Error404';
import AstaSign from './components/AstaSign';
import NewsAlert from './components/tools/NewsAlert';


const App = () => {



  WebFont.load ({
    google: {
      families: [
      'Anton:400',
      'Antonio:400',
      'Montserrat:300,400,600,700,800,900',
      'Roboto:400,700,900',
      'Rubik:300,400,700,900,1100',
      'Poppins:300,400,700,900',
      'Inter:300,400,700,900',
      'Raleway:200,300,400,500,600,700,800,900',
  ]
    }
  });

  const theme = {

      primary: 'rgb(84,193,186)',
      primaryOpact: '#7cdaa3',
      secondary: 'rgb(239,73,49)', // Main Color de la página
      secondaryOpact: 'rgb(248, 168, 156)',
      tertiary: 'rgb(245,186,63)',
      gray: '#f0f0f0',
      mainFont: "Arial", // Fuente 1,
      mainHeight: 'calc(100vh)'
  }

  return (
    <ThemeProvider theme={theme}>
    <AppContainer>
      <BrowserRouter>
        <LoadingPage/>
        <WhatsAppBtn/>
        {/* <IconMenu/> */}


          <NewsAlert/>


          <div className="menu">
            <Menu/>
          </div>

          <div className="center">
                  <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="*" element={<Error404/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    {/* Dynamic Router (I used useLocation to compare blog.link against the location of the URL)*/}
                    <Route path={'/blog/mp_1'} element={<Blog1/>}/>
                    <Route path={'/blog/calim_2' } element={<Blog2/>}/>
                    <Route path={'/blog/calim_1' } element={<Blog3/>}/>
                    <Route path={'/blog/mp_2' } element={<Blog4/>}/>
                    <Route path={'/blog/mp_3' } element={<Blog5/>}/>
                    <Route path={'/blog/mp_4' } element={<Blog6/>}/>
                    <Route path={'/blog/calim_3' } element={<Blog7/>}/>
                    <Route path={'/blog/calim_4' } element={<Blog8/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path={'/faq/fatties_faq_1' } element={<Faq1/>}/>
                    <Route path={'/faq/fatties_faq_2' } element={<Faq1_1/>}/>
                    <Route path={'/faq/fatties_faq_3' } element={<Faq1_2/>}/>
                    <Route path={'/faq/fatties_faq_4' } element={<Faq1_3/>}/>
                    {/* <Route path={'/faq/mercadopago_faq' } element={<Faq2/>}/>
                    <Route path={'/faq/calim_faq' } element={<Faq3/>}/>  */}
                    <Route path="/nosotros" element={<Nosotros/>}/>
                  </Routes>
                  <Footer/>
                  <AstaSign/>
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
    width: 70%;
    flex-direction: column;
    box-shadow: 0px 0px 10px 10px rgba(124, 124, 124, 0.5);
    background-color: white;
    margin-bottom: 3vh;

    @media (max-width: 1400px) {
            width: 95%;
        }

    @media (max-width: 1100px) {
            width: 100%;
            margin-bottom: 0;
        }

    @media (max-width: 764px) {
            width: 100%;
        }


    .menu {
      font-family: ${props => props.theme.mainFont};
      width: 100%;
    }

    .center {
      width: 100%;
      background-color: inherit;
    }
     
`