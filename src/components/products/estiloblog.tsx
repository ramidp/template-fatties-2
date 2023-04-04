import styled from "styled-components";

const ProductContainer = styled.div`
    margin: 0;
    color: ${props => props.theme.fontFour};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 93vh;
    height: auto;
    background-color: white;
    padding: 20px;
            
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
        margin: 0;
        text-align: left;
    }

    .searcher {    
        background: ${props => props.theme.secondary};
        width: 20%;
        display: flex;
        flex-direction: column;
        height: 70vh;
        padding: 10px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 16px;

        .tag-searcher {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            width: 100%;

            input {
                background: white;
                color: ${props => props.theme.secondary};
                border: none;
                height: 40px;
                width: 85%;
                padding-left: 10px;
                border-top-left-radius: 8px;
                
                &:focus {
                    border: none;
                    outline: none;
                    background: white;
                }
                &::placeholder {
                    color: ${props => props.theme.secondaryOpact};
                }
            }
        }

        .searched-data {
            border-radius: 10px;
            padding: 10px 0;
            
            p {
                width: 100%;
                font-size: 16px;
                padding: 5px;
                color: white;
                &:hover {
                    cursor: pointer;
                    background: ${props => props.theme.secondaryOpact};
                    border-radius: 10px;
                }
            }
        }
}

    .products {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 5px;
        
        @media (max-width: 1100px) {
                width: 95%;
                padding-top: 5px;
            }
        
        .product-types {
            background-color: white;
            height: 15vh;
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            box-shadow: 0px 0px 50px -20px rgba(0,0,0,0.44);
            cursor: pointer;
            gap: 10px;

            @media (max-width: 1100px) {
                justify-content: center;
                flex-direction: column;
            }
            @media (max-width: 520px)    {
                justify-content: center;               
                }

            &:hover {
                background-color: ${props => props.theme.secondaryOpact};
            }


            svg {
                font-size: 25px;
                @media (max-width: 1100px) {
                    display: none;
                }
            }
            .btn {
                box-shadow: -2px 16px 54px -27px rgba(0,0,0,0.44);
            }

            @media (max-width: 1100px) {
                width: 100%;
            }
            h1 {
                margin: 0;
                width: 60;
                font-size: 16px;
                font-weight: bold;

            @media (max-width: 520px)    {
                font-size: 16px;
                }
            }
            p {
                width: auto;
                min-width: 10vw;
                max-width: 25vw;
                margin: 0;
                text-align: center;
                font-size: 14px;
                font-weight: 300;
        
                @media (max-width: 1100px)    {
                font-size: 12px;
                width: auto;
                }

                @media (max-width: 520px)    {
                display: none;               
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
    
    svg {
        color: white;
        font-size: 25px;
    }
    
    .product-types1 {
        padding: 30px;
        width: 70%;
        height: auto;
        min-height: 83vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;

        @media (max-width: 1100px) {
            padding: 20px;
            width: 90vw;
            height: auto;
        }

        .tags {
            flex-direction: row;
            width: 100%;
        }

        .blog-title {
            position: absolute;
            width: auto;
            color: white;
            z-index: 2;
            font-size: 50px;
            padding: 50px 100px;
            text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
               1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;        
            }

        h1 {    
                text-align: left;
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
            font-size: 16px;
            color: darkgray;
            text-align: left;
        }
            p {
                width: 100%;
                text-align: left;
                font-size: 16px;
                margin: 0;
                
                @media (max-width: 1100px) {
                    font-size: 14px;
                }
            }

            ul {
                width: 100%;
                li {
                    text-align: left;
                    font-style: italic;
                }
            }
            img {
                width: 100%;
                height: 220px;
                object-fit: cover;
                object-position: 50% 20%;
                filter: opacity(80%);
                border-top-left-radius: 20px;
                border-bottom-right-radius: 20px;

            }
    }

    .container-modal {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
    }

`

export default ProductContainer