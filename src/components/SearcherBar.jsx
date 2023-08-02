import styled from "styled-components";
import { useState, useEffect } from 'react'
import blogs from '../data/blogs.json'

const SearcherBar = () => {

    useEffect(() => {
        setFilteredData('')
    },[])

    const [filteredData, setFilteredData] = useState([])

    const handleChange = (e) => {
        const searchWord = e.target.value;
        const newFilter = blogs.filter((item => {
            return (
                item.title.toLowerCase().includes(searchWord.toLowerCase())
                )
        }));

        if (searchWord === '') {
            setFilteredData([])
        } else {
        setFilteredData(newFilter)

        }
    }


// Buena forma de hacer un Click outside the box. Si la info depende de un valor True/False o un Length, podemos usar el ELSE que es por fuera de la caja, para cambiar ese valor 
// Y limpiar un campo.

    return ( 
        <Container>

<div className='searcher'>
                        <div className="tag-searcher">
                            <input
                            type="text"
                            onChange={handleChange}
                            />
                            {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
                        </div>
                        <div 
                        id='clickbox'
                        className="relative-pos">
                        {
                            filteredData.length > 0 ?
                            <div className="searched-data">
                            {
                                filteredData.slice(0, 10).sort((a, b) => b.id - a.id).map((item, index) => {
                                    return (
                                        <a href={'/blog/' + item.link} key={item.id}>{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                            :
                            <>
                            </>
                        }
                        </div>
                    </div>
            
        </Container>
     );
}
 
export default SearcherBar;

const Container = styled.div`
    
    .searcher { 
        width: 100%;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 10px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 16px;
        background-color: none;

        @media (max-width: 1100px) {
            width: 95%;
                }


        .tag-searcher {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            width: 100%;

            input {
                color: white;
                border: none;
                height: 40px;
                width: 35%;
                border-top-left-radius: 8px;
                border-bottom-right-radius: 8px;
                font-size: 14px;
                
                &:focus {
                    border: none;
                    outline: none;
                }
                &::placeholder {
                    color: #ffffff;
                }
            }
        }
        .relative-pos {
            position: relative;
            left: -30%;
            width: 300px;

            .searched-data {
                position: absolute;
                width: 100%;
                background-color: white;
                border-radius: 10px;
                overflow-y: auto;
                padding: 10px 5px;
                margin-top: 10px;
                box-shadow: 0px 0px 5px 5px #2b2b2b49;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                
                
                a {
                    text-decoration: none;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    font-size: 14px;
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
` 