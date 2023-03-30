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
    min-height: 70vh;
    height: auto;
    background-color: white;
    padding: 20px 50px; 
    
    @media (max-width: 1100px) {
        padding: 20px 0;
    }

        .title {
            font-size: 30px;
            text-align: left;
            width: 50%;
            color: darkgray;
            @media (max-width: 1100px) {
                    font-size: 30px;
                    }

        }

    p {
        width: 50%;
        text-align: left;
    }

    .tag-searcher {
        text-align: left;
        width: 60vw;
    }


    .products {
        width: 100%;
        gap: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
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
                width: auto;
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

        .tags {
            flex-direction: row;
            width: 100%;
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
            font-size: 16px;
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