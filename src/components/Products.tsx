import styled from "styled-components";
import React from 'react'
import Marcas from "./Marcas";
import Nosotros from "./Nosotros";



const Products = () => {
    return ( 
        <>
        <span id="menu"></span>
        
            <ProductsContainer>
                    <Marcas/>
                    <Nosotros/>
            </ProductsContainer>
        </>
     );
}
 
export default Products;

const ProductsContainer = styled.div`
    width: 100%;
    height: auto;
    span {
        position: relative;
        top: 100%;
    }

@media (max-width: 466px) {
    padding-top: 30px;
}
   
`