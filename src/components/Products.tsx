import styled from "styled-components";
import Product1 from "./products/Product1";
import Product2 from "./products/Product2";
import Product3 from "./products/Product3";
import React from 'react'



const Products = () => {
    return ( 
        <>
        <span id="menu"></span>
        
            <ProductsContainer>
                    <Product1/>
                    {/* <Product2/>
                    <Product3/> */}
            </ProductsContainer>
        </>
     );
}
 
export default Products;

const ProductsContainer = styled.div`
    background: ${props => props.theme.secondary};
    width: 100%;
    height: 100vh;
    span {
        position: relative;
        top: 100%;
    }

@media (max-width: 466px) {
    padding-top: 30px;
}
   
`