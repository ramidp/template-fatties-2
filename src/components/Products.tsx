import styled from "styled-components";
import Product1 from "./products/Product1";
import Product2 from "./products/Product2";
import Product3 from "./products/Product3";
import React from 'react'
import Marcas from "./Marcas";



const Products = () => {
    return ( 
        <>
        <span id="menu"></span>
        
            <ProductsContainer>
                    <Marcas/>
                    {/* <Product1/> */}
                    {/* <Product2/>
                    <Product3/> */}
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