import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ProductContainer from './estiloproducts'


const Product3 = () => {

    const image = require('../../images/city1.jpg')

    return (
        <ProductContainer>
        <span id="product3"></span>
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1 >CDT</h1>
                            <p>Te hara sentirla bien adentro .. de la garganta</p>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Tempura Shrimp</h4>
                                <p>Langostinos tempura en salsa de maracuyá montado sobre base de masa filo crocante.</p>
                            </div>
                            <div className="card">
                                <h4>Sake Pizza</h4>
                                <p>Tortilla crujiente elaborada a base de harina de trigo, con crema ponzu y 
                                finas laminas de salmón ahumado trufado, topping de cebolla morada y ciboulette..</p>
                            </div>
                            <div className="card">
                                <h4>Ejemplo 3</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Et labore eius consequuntur nobis tempore sed error cupiditate molestiae eum laudantium?</p>
                            </div>
                            <div className="card">
                                <h4>Ejemplo 4</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Velit vitae laudantium, eos minima veritatis ex maxime pariatur possimus dolorem cum!</p>
                            </div>
                            <div className="card">
                                <h4>Ejemplo 5</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Velit vitae laudantium, eos minima veritatis ex maxime pariatur possimus dolorem cum!</p>
                            </div>
                        </div>
                    </div>
                <div className="foto col-6 p-0">
                    <img src={image} alt="" />
                </div>
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product3;