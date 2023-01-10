import React from 'react';
import styled from 'styled-components'


const wallpaper = require('../images/fondo1.jpg')


const Fondo = () => {
    return ( 
        <>
        <Img src={wallpaper} alt="" />
        </>
     );
}
 
export default Fondo;


const Img = styled.img`
    position: absolute;
    z-index: -1;
    width: 92%;
    height: 100vh;
`