import styled from "styled-components";

const ProductContainer = styled.div`
    margin: 0;
    color: ${props => props.theme.fontFour};
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 0;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    height: auto;
    background-color: white;

        .title {
            text-align: left;
            width: 70vw;
            color: darkgray;
        }

    p {
        width: 70vw;
        text-align: left;
    }

    .tag-searcher {
        text-align: left;
        width: 70vw;
    }


    .products {
        width: 70vw;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 20px;

        
        .product-types {
            background-color: white;
            height: 10vh;
            min-width: 25vw;
            width: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 15px;
            padding: 10px 20px;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.secondaryOpact};
            }

            svg {
                width: 10%;
                font-size: 150%;
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
        
                @media (max-width: 512px)    {
                font-size: 10px;
                }
            }
        }
    }
    
    .title-btn {
        display: flex;
        justify-content: space-between;
        width: 70vw;
        color: darkgray;
    }  
    
    svg {
        font-size: 35px;
        cursor: pointer;
        &:hover{
            filter: contrast(20%)
        }
    }
    
    .product-types1 {
        width: 70vw;
        height: auto;
        min-height: 70vh;
        background-color: #ececec;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 30px 50px;
        margin-top: 20px;
        border-radius: 15px;
        gap: 15px;
        box-shadow: -2px 16px 54px -17px rgba(0,0,0,0.44);


        h1 {
                font-size: 35px;
                font-weight: bold;
                width: 100%;
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
            }
    }

`

export default ProductContainer