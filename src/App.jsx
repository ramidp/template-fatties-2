import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Wallpaper from './components/Wallpaper';
import LoadingPage from './components/LoadingPage';
import Blog from './components/products/Blog-map';
import Faq from './components/products/Faq';
import Main from './components/Main';
import Footer2 from './components/Footer2';
import WebFont from 'webfontloader'
import { useState } from 'react';
import blogs from './data/blogs.json'
import faq from './data/faq.json'
import BlogArticleMap from './components/products/BlogArticle-map';
import FaqMap from './components/products/Faq-map';

const App = () => {


  WebFont.load ({
    google: {
      families: ['Ubuntu:400', 'Mate:400', 'Kosugi:400', 'Amiko:400', 'Anton:400', 'Antonio:400', 'Abril Fatface:400']
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

  let handleChangeTheme = () => {

    console.log('Cambio de tema')

    switch (theme.primary) {
      case 'rgb(169, 193, 84)':
        {setTheme({
                primary: 'rgb(25, 87, 83)',
                secondary: 'rgb(64, 201, 0)', // Main Color de la página
                secondaryOpact: 'rgb(170, 156, 248)',
                tertiary: 'rgb(245,186,63)',
                gray: '#f1f1f1',
                mainFont: "Arial", // Fuente 1
                })}
                
        break;
        case 'rgb(25, 87, 83)':
          {setTheme({
                  primary: 'rgb(84,193,186)',
                  secondary: 'rgb(239,73,49)', // Main Color de la página
                  secondaryOpact: 'rgb(248, 168, 156)',
                  tertiary: 'rgb(245,186,63)',
                  gray: '#f1f1f1',
                  mainFont: "Arial", // Fuente 1
                        })}
          break;
      default:
        setTheme({
          primary: 'rgb(169, 193, 84)',
          secondary: 'rgb(16, 5, 179)', // Main Color de la página
          secondaryOpact: 'rgb(165, 156, 248)',
          tertiary: 'rgb(245,186,63)',
          gray: '#f1f1f1',
          mainFont: "Arial", // Fuente 1
    
        })
        break;
    }
  }

  return (
      <AppContainer>
      <BrowserRouter>
      <LoadingPage/>
      {/* <WhatsAppBtn/> */}
      {/* <UpBtn/> */}
      <ThemeProvider theme={theme}>

        <div className="menu">
          <Menu handleChangeTheme={handleChangeTheme}/>
        </div>

        <div className="center">
                <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/blog" element={<Blog/>}/>
                  {/* Dynamic Router (I used useLocation to compare blog.ink against the location of the URL)*/}
                  {
                    blogs.map(blog => {
                      return (
                        <Route key={blog.id} path={'/blog/' + blog.link} 
                        element={<BlogArticleMap/>
                        }/>
                      )
                    })
                  }
                  {
                    faq.map(faq => {
                      return (
                        <Route key={faq.id} path={'/faq/' + faq.link} 
                        element={<FaqMap/>
                        }/>
                      )
                    })
                  }

                  <Route path="/faq" element={<Faq/>}/>
                  <Route path="/contacto" element={<Footer2/>}/>
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