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
    padding: 100px 0px;
    background-color: white;


    @media (max-width: 1100px) {
        padding-top:  100px;
    }


    .faq-anchor {
        text-decoration: none;
        color: ${props => props.theme.secondary};
        &:hover {
            text-decoration: underline;
            text-underline-offset: 3px;
        }
    }

        .title {
            font-size: 60px;
            text-align: center;
            font-weight: 900;
            width: 100%;
            color: white;
            @media (max-width: 1100px) {
                    font-size: 30px;
                    }

        }

    p {
        width: 85%;
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

            @media (max-width: 764px)   {
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
        width: 90%;
        padding: 10px 20px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        @media (max-width: 764px) {
            width: 95%;
        }

        .subtitle-faq {
            color: black;
            font-weight: 600;
            width: 100%;
            background-color: white;
            font-size: 18px;
            text-align: left;
            height: auto;
            padding: 5px;
            margin: 5px 0 20px 0;

                @media (max-width: 764px) {
                font-size: 14px;
                }

        }

        .faq-hidden-text {
            background-color: #eeeeee;
            padding: 20px;
            line-height: 28px;
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

                a {
                    color: ${prop => prop.theme.secondary};
                    text-underline-offset: 3px;
                    &:hover {
                        filter: contrast(50%);
                    }
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
                background: #868686;
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