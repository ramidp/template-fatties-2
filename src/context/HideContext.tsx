import React from "react";
import { useState } from "react";

const ContextHide = React.createContext({});


const HideContext = ({children} : any) => {

    const [hide, setHide] = useState<boolean>(false)

    const menuHidding = () => {
        setHide(true)
    }

    const menuOff = () => {
        setHide(false)
    }

    return ( 
        <ContextHide.Provider
        value={{hide, setHide, menuHidding, menuOff}}>
            {children}
        </ContextHide.Provider>
     );
}
 
export {HideContext, ContextHide};