import styled from "styled-components";

const Wallpaper = () => {
    return ( 
        <WallpaperScreen>
        </WallpaperScreen>
     );
}
 
export default Wallpaper;

const WallpaperScreen = styled.div `
    
    background-color: white;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    bottom: 0;
    right: 0;
    
`