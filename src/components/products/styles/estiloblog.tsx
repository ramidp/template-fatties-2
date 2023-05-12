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
    padding-bottom: 50px;
    margin-bottom: 50px;
    background: linear-gradient(140deg, orange 10% ,${props => props.theme.secondary} 60%);

        .title {
            font-size: 60px;
            text-align: center;
            width: 100%;
            color: white;
            font-weight: bold;
            @media (max-width: 1100px) {
                    font-size: 50px;
                    }

            @media (max-width: 764px) {
                    font-size: 40px;
                    }

        }

        .blog-text-bg {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 6vh;

            .blog-text {
                margin: 0;
                font-size: 72px;
                background: -webkit-linear-gradient(120deg, orange 10% ,${props => props.theme.secondary} 60%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 30px;
                width: 100%;
                text-align: center;
                padding: 5px 10px;
                font-weight: 100;

                @media (max-width: 1100px) {
                    font-size: 26px;
                    }

                @media (max-width: 764px) {
                        font-size: 20px;
                        }
            }
        }

        .underline {
            margin: 30px 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(40deg,  rgba(255, 138, 43, 0.068) 10%, #ffa60097 30% , #ffffff 80%);
        }


    p {
        margin: 0;
        text-align: left;
    }

    .anchor-blog {
        text-decoration: none;
        color: ${props => props.theme.secondary};
        &:hover {
            cursor: default;
            text-decoration: underline;
            text-underline-offset: 3px;
        }
    }

    .searcher { 
        width: 100%;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 10px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 16px;
        margin: 0 10px 30px 10px;

        @media (max-width: 1100px) {
            width: 95%;
            margin: 0 10px 20px 10px;
                }


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
                width: 100%;
                padding-left: 10px;
                border-top-left-radius: 8px;
                border-bottom-right-radius: 8px;
                
                &:focus {
                    border: none;
                    outline: none;
                    background: #f1f1f1;
                }
                &::placeholder {
                    color: ${props => props.theme.secondary};
                }
            }
        }
        .relative-pos {
            position: relative;

            .searched-data {
                position: absolute;
                width: 100%;
                background-color: white;
                border-radius: 10px;
                overflow-y: auto;
                padding: 10px 5px;
                margin-top: 10px;
                box-shadow: 0px 0px 20px 5px #2b2b2b49;
                display: flex;
                flex-direction: column;
                
                
                a {
                    text-decoration: none;
                    width: 100%;
                    font-size: 16px;
                    padding: 5px 15px;
                    margin: 0;
                    color: ${props => props.theme.secondary};
                    &:hover {
                        cursor: pointer;
                        color: white;
                        background: ${props => props.theme.secondaryOpact};
                        border-radius: 10px;
                    }
                }
            }
        }
}

    .products {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
        
        @media (max-width: 1100px) {
                width: 95%;
                flex-direction: column;
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
        padding: 20px 0px;
        width: 70%;
        height: auto;
        min-height: 83vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;

        @media (max-width: 1100px) {
            padding: 20px 10px;
            width: 90vw;
            height: auto;
        }

        .tags {
            flex-direction: row;
            width: 100%;
        }

        .blog-title {
            position: absolute;
            width: 60%;
            color: white;
            z-index: 2;
            font-size: 2.5em;
            padding: 2% 0% 0% 2%; 
            text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
               1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;  
               
               @media (max-width: 1100px) {
                    width: 80%;
                    font-size: 40px;
                }
                @media (max-width: 870px) {
                    padding: 5% 0% 0% 2%;
                    font-size: 28px;
                }
                @media (max-width: 600px) {
                    font-size: 24px;
                }
                @media (max-width: 376px) {
                    font-size: 22px;
                }

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
                font-size: 18px;
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
                object-position: 50% 30%;
                filter: opacity(80%);
                border-top-left-radius: 20px;
                border-bottom-right-radius: 20px;

                @media (max-width: 1100px) {
                    height: 200px;
                }
                @media (max-width: 600px) {
                    height: 150px;
                }


            }
    }

`

export default ProductContainer