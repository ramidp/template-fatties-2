import styled from "styled-components";
import React from 'react'


const Footer = () => {

    const facebookLogo = require('../images/icons/facebook.svg')
    const instagramLogo = require('../images/icons/instagram.svg')
    const twitterLogo = require('../images/icons/twitter.svg')

    return ( 
        <>
            <FooterContainer className="container">
                <div className="row p-0 m-auto"> 
                    <a href="#getintouch"><h3>Contactanos</h3></a>
                    <div className="col-12">
                        <div className="row">
                            <div className="card col-6 p-3 m-0">
                                <h1>Unite al Staff</h1>
                                <p>Texto para unirte al laburo bla bla bla</p>
                                <p>info@tuvieja.com</p>
                                <a href="">E-MAIL</a>
                                <p>Escribinos para sentirte parte de esta basura</p>
                            </div>
                            <div className="card col-6 p-3 m-0">
                                <h1>Card 2</h1>
                                <p>Texto para otra funcion o idea</p>
                                <p>Aguante tu emprendimiento</p>
                                <a href="">Datos mas</a>
                                <p>Escribinos para sentirte parte de esta basura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.tertiary};
    margin: auto;
    padding: 200px 0;
        a {
            text-align: center;
            text-decoration: none;
            color: ${props => props.theme.fontFour};
        }

    .card {
        gap: 30px;
        border: none;        
        text-align: center;
        height: 50vh;
        border: none;
        background: ${props => props.theme.tertiary};
        color: ${props => props.theme.fontSecond};
   
        a {
            text-decoration: none;
            color: ${props => props.theme.fontFour};
        }
        h1 {
            display: inline;
            font-size: 25px;
            margin: 0;
            font-size: 30px;
        }
    }
    .card-input {
        justify-content: flex-start;

    @media (max-width: 991px) {
        width: 100%!important;
    }
    
        input {
            width: 70%;
            padding: 10px 0;
            margin: 15px 0;
            &::placeholder {
                    padding-left: 10px;
                    }
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            
            button {
                width: 20%;
                background-color: ${props => props.theme.tertiary};
                border: 1px solid ${props => props.theme.primary};
                color: ${props => props.theme.fontSecond};
                &:hover {
                    background-color: ${props => props.theme.primary};
                    color: ${props => props.theme.fontSecond};
                }
            }
        }
    }
    .social-media {
        height: 5vh;
        gap: 15px;
        a {
        img {
            height: 30px;
            &:hover {
                filter: invert(50%)
            }
            }
        }    
    }

`