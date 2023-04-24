import styled from "styled-components";

const ProductContainer = styled.div`
    margin: 0;
    color: ${props => props.theme.fontFour};
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    min-height: ${props => props.theme.mainHeight};
    height: auto;
    background-color: white;
    padding: 20px; 

    @media (max-width: 1100px) {
        padding: 20px 0;
    }


    .faq-anchor {
        text-decoration: none;
        color: ${props => props.theme.secondary};
        &:hover {
            cursor: default;
            text-decoration: underline;
            text-underline-offset: 3px;
        }
    }
    
    @media (max-width: 1100px) {
        padding: 20px 0;
    }

        .title {
            font-size: 30px;
            text-align: left;
            width: 80%;
            color: darkgray;
            @media (max-width: 1100px) {
                    font-size: 30px;
                    }

        }

    p {
        width: 80%;
        text-align: left;
        margin: 0;
    }

    .tag-searcher {
        text-align: left;
        width: 60vw;
    }

    .faq-box {
        padding-top: 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 24px;
            margin: 10px 0;
            text-align: left;
            background: lightgray;
            padding: 10px;
            width: 100%;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        p { 
            width: 90%;
            margin: 0;
            font-size: 16px;
        }
    }

    .products {
        width: 60vw;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 20px;
        
        @media (max-width: 1100px) {
                width: 95%;
                padding-top: 5px;
            }

        
        .product-types {
            background-color: white;
            height: 10vh;
            min-width: 25vw;
            width: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
            cursor: pointer;

            @media (max-width: 1100px) {
                justify-content: flex-start;
            }


            &:hover {
                background-color: ${props => props.theme.secondaryOpact};
            }


            svg {
                width: 10%;
                font-size: 150%;
                @media (max-width: 1100px) {
                    display: none;
                }
            }
            .btn {
                background-color: ${props => props.theme.primary};
                color: ${props => props.theme.fontPrim};
                box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            }

            @media (max-width: 1100px) {
                width: 100%;
            }
            h1 {
                margin: 0;
                width: 100%;
                font-size: 18px;
                font-weight: bold;

            @media (max-width: 512px)    {
                font-size: 16px;
                }
                
            }
            .blog-text {
                font-size: 16px;
                font-weight: bold!important;
            }
            p {
                width: 100%;
                margin: 0;
                text-align: center;
                font-size: 14px;
                font-weight: 300;
        
                @media (max-width: 1100px)    {
                font-size: 12px;
                }

                @media (max-width: 520px)    {
                display: none;               
                
                @media (max-width: 1100px) {
                    font-size: 20px;
                }


                }
            }
        }
    }
    
    .title-btn {
        display: flex;
        justify-content: space-between;
        width: 60vw;
        color: darkgray;
    }  
    
    i {
        font-size: 35px;
        cursor: pointer;
        &:hover{
            filter: contrast(20%)
        }
    }
    
    .product-types1 {
        padding: 20px;
        width: 80%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        @media (max-width: 764px) {
            width: 95%;;
        }

        .subtitle-faq {
            color: gray;
            font-size: 20px;
            text-align: left;
            height: auto;
            @media (max-width: 1100px) {
                    font-size: 18px;
                }
                @media (max-width: 764px) {
                font-size: 16px;
                }

        }

        ul {
            margin: 0;
            width: 100%;
            padding-left: 5%;
            li {
                text-align: left;
                @media (max-width: 1100px) {
                    font-size: 14px;
                }
                @media (max-width: 764px) {
                font-size: 12px;
                }

            }
        }

        h1 {
            text-align: left;
            font-size: 22px;
            font-weight: bold;
            width: 100%;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background: lightgray;
            padding: 15px 0 15px 15px;
            transition: ease 1s all;
            user-select: none;

            &:hover {
                cursor: pointer;
                background: #f0f0f0;
            }
            
            @media (max-width: 1100px) {
                font-size: 20px;
            }
            @media (max-width: 764px) {
                font-size: 16px;
            }
        }
            
        h3 {
            margin: 0;
            width: 100%;
            font-size: 15px;
            color: darkgray;
            text-align: left;
        }
            p {
                width: 100%;
                text-align: left;
                font-size: 16px;
                @media (max-width: 1100px) {
                    font-size: 14px;
                }
                @media (max-width: 764px) {
                font-size: 12px;
                }
            }
    }

`

export default ProductContainer