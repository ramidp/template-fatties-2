import styled from "styled-components";

const ProductContainer = styled.div`
    margin: 0;
    color: ${props => props.theme.fontFour};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-height: ${props => props.theme.mainHeight};
    height: auto;
    padding-top: 100px;
    background-color: white;
            
    @media (max-width: 1100px) {
        padding: 20px 0;
        padding-top: 100px;
    }

    .anchor-link {
        width: 85%;

        @media (min-width: 2048px) {
            font-size: 20px;
        }    

        @media (max-width: 1100px) {
        width: 95%;
        padding-left: 10px;
        }
        
    .anchor-blog {
        width: 100%;
        text-align: left;
        text-decoration: none;
        color: ${props => props.theme.secondary};
        &:hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 3px;
        }
        
    }
}   
    .product-types1 {
        padding: 20px 0px;
        width: 85%;
        height: auto;
        min-height: 83vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 35px;

        @media (max-width: 1100px) {
            padding: 20px 10px;
            width: 95%;
            height: auto;
        }

        .tags {
            flex-direction: row;
            width: 100%;
        }

        .blog-title {
            width: 100%;
            text-align: left;
            z-index: 2;
            font-size: 46px;
            font-weight: 400;

            @media (min-width: 2048px) {
                font-size: 52px;
            }  
               
               @media (max-width: 1100px) {
                    text-align: center;
                    font-size: 32px;
                }

                @media (max-width: 600px) {
                    font-size: 26px;
                }


            }
    
            h1 {       
                margin: 0;
                text-align: left;
                font-size: 22px;
                font-weight: bold;
                width: 10%;

                @media (max-width: 1100px) {
                    font-size: 20px;
                }
                }
                
            h3 {
                margin: 0;
                width: 100%;
                font-size: 16px;
                color: #494949;
                text-align: left;

                @media (min-width: 2048px) {
                    font-size: 20px;
                }  
            }

            .blog-text {

                line-height: 28px;
                font-size: 16px;
                background-color: #dfdfdf;              

                
                @media (max-width: 1100px) {
                    font-size: 14px;
                }

                .inner-text {
                    padding: 20px;
                    line-height: 35px;

                    @media (max-width: 764px) {
                        line-height: 25px;
                    }

                    .short-img {
                    width: 100%;
                    object-fit: contain;
                    }   
                    .full-screen {
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        background-color: #a0a0a0d1;
                        z-index: 10;
                    }
                    
                    h1 {
                        width: auto;
                        font-size: 24px;
                        padding-bottom: 10px;

                        @media (min-width: 2048px) {
                            font-size: 28px;
                        }  

                        @media (max-width: 764px) {
                            font-size: 20px;
                        }
                    }

                    h4 {
                        font-size: 20px;
                        font-weight: 600;
                    }

                    h2 {
                        font-size: 22px;
                        font-weight: 600;
                    }

                    h5 {

                        span {
                            font-weight: bold;
                        }
                    }
                    
                    p {
                        text-align: left;
                        width: 100%;
                        margin: 0;
                        font-size: 18px;
                        padding-bottom: 10px;

                        img {
                            width: 80px;
                        }

                        @media (min-width: 2048px) {
                            font-size: 20px;
                        } 

                        @media (max-width: 764px) {
                            font-size: 16px;
                        }
                    }

                    .whatsapp {
                        background-color: #1c9b4a;
                        padding: 10px;
                        color: white;
                        text-decoration: none;
                        display: flex;
                        gap: 10px;
                        justify-content: center;
                        align-items: center;
                        width: 40%;
                        margin: 10px auto;
                        border-radius: 10px;
                        transition: 300ms ease all;
                        
                        &:hover {
                            cursor: pointer;
                            filter: contrast(50%)
                        }
                    }

                    a {
                        font-size: 16px;
                        text-underline-offset: 4px;                        
                        color: ${props => props.theme.secondary};

                        @media (min-width: 2048px) {
                            font-size: 20px;
                        } 

                        @media (max-width: 764px) {
                            font-size: 16px;
                        }
                        
                    }
                    
                    ul, ol{
                        margin: 0;
                        display: flex;
                        text-align: left;
                        flex-direction: column;
                        width: 100%;

                        li {
                            padding: 0;
                            padding-bottom: 5px;
                            text-align: left;
                            font-size: 16px;
                            font-style: italic;                            

                            @media (min-width: 2048px) {
                            font-size: 20px;
                            } 

                            span {
                                font-weight: bold;
                                color: #51bce6;
                            }

                            .svg {
                                color: #51bce6;
                                font-size: 18px;
                            }
                        }
                        }                        
                    }

            }

            .underline {
            margin: 10px 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(50deg, white 5%, ${props => props.theme.primaryOpact} 20%, ${props => props.theme.primary} 60%, white 95%);
                }

            .wall-img {
                background-color: #dfdfdf;
                width: 65%;
                float: right;

                @media (max-width: 1100px) {
                    float: none;
                    margin: 0;
                    width: 100%;
                    background-color: white;
                }

                            img {
                    width: calc(100% - 30px);
                    height: calc(450px - 30px);
                    object-fit: cover;
                    object-position: 50% 30%;
                    margin-bottom: 30px;
                    margin-left: 30px;
    
                    @media (max-width: 1100px) {
                        height: 200px;
                        width: 100%;
                        margin-left : 0;
                    }
                    @media (max-width: 764px) {
                        height: 200px;
                        margin: 0;
                        margin-bottom: 10px;
                    }
    
    
                }
            }
    }

`

export default ProductContainer