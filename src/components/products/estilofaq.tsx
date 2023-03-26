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
    min-height: 93vh;
    height: auto;
    background-color: white;
    padding: 20px 200px; 
    
    @media (max-width: 1100px) {
        padding: 20px 0;
    }

        .title {
            font-size: 30px;
            text-align: left;
            width: 90%;
            color: darkgray;
            @media (max-width: 1100px) {
                    font-size: 30px;
                    }

        }

    p {
        width: 90%;
        text-align: left;
    }

    .tag-searcher {
        text-align: left;
        width: 60vw;
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
        margin-top: 20px;
        padding: 30px;
        width: 90%;
        height: auto;
        min-height: 65vh;
        background-color: #ececec;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        box-shadow: -2px 16px 54px -17px rgba(0,0,0,0.44);

        @media (max-width: 1100px) {
            padding: 20px;
            width: 90vw;
            height: auto;
        }


        h1 {
            font-size: 28px;
            font-weight: bold;
            width: 100%;
            @media (max-width: 1100px) {
                font-size: 20px;
                
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


            }
    }

`

export default ProductContainer