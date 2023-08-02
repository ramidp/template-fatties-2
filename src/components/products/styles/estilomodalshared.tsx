import styled from "styled-components";

const Container = styled.div`
 
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 0px 10px 5px rgba(100,100,100,0.5);
   
    @media (max-width: 764px) {
        height: 100vh;
        width: 100%;
    }
    
    .sect-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background: #c7c7c7;
        width: 100%;
        padding: 5px 0;
        height: 5vh;

        @media (max-width: 764px) {
            width: calc(100%);
        }

            h3 {
                font-size: 20px;
                
            }
    }

    section {
        width: calc(50vw);
        height: calc(93vh - 40px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        gap: 30px 0;
        animation-name: fade;
        animation-duration: 500ms;
        overflow-y: auto;
        
        @media (max-width: 1400px) {
            width: calc(70vw);
            gap: 10px 0;
        }

        @media (max-width: 1100px) {
            width: calc(85vw);
        }

        @media (max-width: 764px) {
            width: calc(100vw);
            height: (93vh - 40px);
        }

        @keyframes fade {
            0% { opacity : 0%}
            100% {  opacity : 100%}
        }


        .logo-mp {
            height: 20vh;

            @media (max-width: 1100px) {
                height: 25vh;
            }
            @media (max-width: 764px) {
                height: 20vh;
            }
        }

        .logo-calim {
            height: 9vh;

        }
        .logo-fatties {
            height: 15vh;
        }

        .h1-calim {
        background: linear-gradient(50deg,#C0D749 30%, #2192A5 70%);
        }
        .h1-mp {
            background: linear-gradient(50deg,  #86b8f1 5%, #90c6f8 30%, #77ccff 90%);
        }
        .h1-tel {
            background: linear-gradient(240deg, ${props => props.theme.tertiary} 10% ,${props => props.theme.secondary} 30%);
        }
        .h1-cross {
            background: linear-gradient(50deg, ${props => props.theme.primaryOpact} 10%, ${props => props.theme.primary} 40%);
        }

        h1 {
            color: white;
            padding: 32px;
            width: calc(90% - 64px);
            font-size: 28px;
            text-align: center;
            font-weight: 700;
            border-radius: 20px;
            
            @media (max-width: 1400px) {
                width: calc(90% - 40px);
                padding: 20px;
                font-size: 24px;
            }

            @media (max-width: 1100px) {
                width: calc(90% - 40px);
                padding: 20px;
                font-size: 22px;
            }

            @media (max-width: 764px) {
                font-size: 18px;
                padding: 10px;
                width: 100%;
            }
        }
        .title {
            font-size: 30px;
            width: 80%;
            margin: 0;
            line-height: 120%;

            @media (max-width: 1100px) {
                font-size: 22px;
            }

            @media (max-width: 764px) {
                width: 100%;
            }
            span {
                font-weight: 700;
            }
        }

        a {
            text-decoration: none;
            color: white!important;
            background: #1da34e;
            padding: 10px 20px;
            width: 70%;
            font-size: 22px;
            text-align: center;
            font-weight: 700;
            transition: 300ms ease all;
            border: 3px solid black;
            border-radius: 15px;

            svg {
                padding: 0 10px;
                height: 22px;
                fill: white;
            }


            @media (max-width: 764px) {
                width: 100%;
                font-size: 18px;
                padding: 10px;
            }

            &:hover {
                filter: brightness(110%);
                transform: scale(1.03)
            }
        }

        p {
            font-size: 22px;
            width: 90%;

            @media (max-width: 1100px) {
                font-size: 20px;
            }
            @media (max-width: 764px) {
                font-size: 18px;
            }

            span {
                font-weight: bold;
            }
        }

        .div-mp {
            height: 28%!important;

            @media (max-width: 764px) {
                height: auto!important;
            }            
        }

        div {
            width: 100%;
            height: 40%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0 30px;

            @media (max-width: 764px) {
                gap: 0;
                flex-direction: column;
                height: auto;
            }

            .img-mp {
                
                @media (max-width: 764px) {
                    height: 12vh;
                }
            }

            img {
                object-fit: contain;
                border-radius: 5%;
                height: 100%;
                width: 40%;
                background: linear-gradient(50deg,#C0D749 30%, #2192A5 70%);
                padding: 5px 0;

                @media (max-width: 764px) {
                width: 90vw;
                height: calc(18vh - 10px);
                border-radius: 10px;
            }

            }

            div {
                width: 50%;
                display: flex;
                justify-content: flex-start;
                padding-top: 2vh;
                flex-direction: column;
                height: 100%;

                @media (max-width: 764px) {
                width: 100%;
                height: 100%;
            }

                h3 {
                    width: 100%;
                    text-align: left;
                    font-size: 22px;
                    margin: 0;

                    @media (max-width: 1100px) {
                            font-size: 20px;
                        }

                    @media (max-width: 764px) {
                            font-size: 18px;
                        }

                    span {
                        font-weight: 700;
                    }
                    
                }
                ul {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    ol {
                        font-size: 18px;                      
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        text-align: left;

                        @media (max-width: 764px) {
                            font-size: 16px;
                        }

                        svg {
                            font-size: 16px;
                            color: lightblue;
                        }

                        .svg {
                            padding-right: 10px;
                        }
                    }

                }
            }

        }
           
        .buttons {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0 30px;
            flex-direction: row;

            span, p {
                font-size: 16px;
                font-weight: 900;
                width: 3vw;
                text-align: center;
                &:hover {
                    cursor: pointer;
                    color: gray;
                }
            }
        }
    }
    .first-section {
        gap: 20px 0;

        @media (max-width: 764px) {
            gap: 40px 0;
        }
    }


`

export default Container