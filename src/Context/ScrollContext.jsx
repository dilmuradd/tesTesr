import { createContext, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BasketContext } from "./Basket";
export let ScrollContext = createContext()

export let ScrollProvider = ({ children }) => {
    let SectionREF = useRef(null)

    let ScrollID = () => {
        SectionREF.current.scrollIntoView({ behavior: 'smooth' })

        console.log('salom');

    }

    let burger = useRef(null)
let ScrollBurger = ()=>{
burger.current.scrollIntoView({behavior: 'smooth' })
}

let lavash = useRef(null)
let ScrollLavash = ()=>{
    lavash.current.scrollIntoView({behavior: 'smooth'})
} 
let donar = useRef(null)
let ScrollDonar = ()=>{
    donar.current.scrollIntoView({behavior: 'smooth'})
}
let sendvich = useRef(null)
let ScrollSendvich = ()=>{
    sendvich.current.scrollIntoView({behavior: 'smooth'})
}
let xotdog = useRef(null)
let Scrollxotdog = ()=>{
    xotdog.current.scrollIntoView({behavior: 'smooth'})
}


let Smenu = useRef(null)
let menu = ()=>{
    Smenu.current.scrollIntoView({behavior: 'smooth'})
}



    return (
        <ScrollContext.Provider value={{ScrollLavash,lavash, ScrollID, SectionREF,ScrollBurger,burger,ScrollDonar,donar,ScrollSendvich,sendvich,Scrollxotdog,xotdog,menu,Smenu }}>
            {children}
        </ScrollContext.Provider>
    )
}