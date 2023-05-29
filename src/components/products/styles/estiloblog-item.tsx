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
    background-color: white;
            
    @media (max-width: 1100px) {
        padding: 20px 0;
        padding-top: 100px;
    }

    p {
        margin: 0;
        width: 85%;
        text-align: left;
    }

    .anchor-blog {
        text-decoration: none;
        color: ${props => props.theme.secondary};
        &:hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 3px;
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
               
               @media (max-width: 1100px) {
                    font-size: 32px;
                }

                @media (max-width: 600px) {
                    font-size: 22px;
                }
                @media (max-width: 376px) {
                    font-size: 20px;
                }

            }
    
            h1 {       
                margin: 0;
                text-align: left;
                font-size: 22px;
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
                padding-left: 20px;
            }

            .blog-text {

                background-color: #e6e6e6;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                line-height: 28px;
                font-size: 16px;

                
                @media (max-width: 1100px) {
                    font-size: 14px;
                }

                @media (max-width: 764px) {
                    font-size: 12px;
                }

                p {
                    width: 100%;
                    text-align: left;
                    margin: 0;
                    
                }
    
                ul {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    li {
                        padding: 0;
                        text-align: left;
                        font-style: italic;
                    }
                    ol {
                        padding: 0;
                        text-align: left;
                        font-style: italic;
                    }
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