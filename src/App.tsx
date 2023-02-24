import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import WhatsAppBtn from './components/WhatsApp';
import Wallpaper from './components/Wallpaper';
import LoadingPage from './components/LoadingPage';
import Blog from './components/products/Blog';
import Faq from './components/products/Faq';
import Blog1 from './components/products/Blog1';
import Blog2 from './components/products/Blog2';
import Main from './components/Main';
import Faq1 from './components/products/Faq1';
import Faq2 from './components/products/Faq2';

const App = () => {

  const theme = ({

      primary: 'rgb(84,193,186)',
      secondary: 'rgb(239,73,49)', // Main Color de la página
      secondaryOpact: 'rgb(248, 168, 156)',
      tertiary: 'rgb(245,186,63)',
      gray: '#e2e2e2',
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
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/servicio_personalizado" element={<Blog1/>}/>
                    <Route path="/inflacion_100" element={<Blog2/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/cuenta_mercado_pago" element={<Faq1/>}/>
                    <Route path="/pagos" element={<Faq2/>}/>
                    {/* <Route path="/Products" element={<Products/>}/> */}
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
      min-width: 170px;
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
     
.hide {
  @media (max-width: 991px) {
    display: none;
  }
}
`