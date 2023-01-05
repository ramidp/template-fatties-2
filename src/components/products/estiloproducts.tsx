import styled from "styled-components";

const ProductContainer = styled.div`
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.tertiary};
    color: ${props => props.theme.fontFour};
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 50px;

    .products {
        gap: 15px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        .product-types {
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border-radius: 50px;
            padding: 20px;
            background-color: ${props => props.theme.tertiary};
            box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            svg {
                font-size: 80px;
            }
            .btn {
                background-color: ${props => props.theme.primary};
                color: ${props => props.theme.fontPrim};
                box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            }
        }
    }

    .product-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: ${props => props.theme.fontTert};
        margin-bottom: 20px;
        @media (max-width: 991px ) {
        justify-content: center;
    }
    .card-box {
        max-height: 100%;
        overflow: auto;
        font-size: 20px;
    }
    .title {
        h1 {
            width: 100%;
            font-size: 40px;
            color: ${prop => prop.theme.fontFour};
            }
        }
    }
    h1 {
        font-size: 30px;
    }

    h1  {
    @media (max-width: 512px)    {
        font-size: 22px;
        }
    }
    h4 {
        @media (max-width: 512px)    {
        font-size: 18px;
        }
    }
    p {
        @media (max-width: 512px)    {
        font-size: 10px;
        }
    }

    h1  {
    @media (min-width: 513px) and (max-width: 1165px)    {
        font-size: 24px;
        }
    }
    h4 {
        @media (min-width: 513px) and (max-width: 1165px)    {
        font-size: 16px;
        }
    }
    p {
        @media (min-width: 513px) and (max-width: 1165px)    {
        font-size: 14px;
        }
    }

    .foto {
        display: flex;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        /* border: 1px solid white; */
        
    }

    img {
        object-fit: cover;
        object-position: right bottom;
        width: 100%;
        height: 100vh;
        filter: grayscale(100%);
    @media (max-width: 991px) {
        display: none;
    }
    }
`

export default ProductContainer