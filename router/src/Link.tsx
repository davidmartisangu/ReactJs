import React from "react";
import {EVENTS} from "./consts"

type LinkProps = {
    to: string;
    target?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function navigate (href:string){
    window.history.pushState({},"",href)   //Cambia la URL en la barra de direcciones sin recargar la página.
    const navitgationEvent = new Event(EVENTS.PUSHSTATE)    //Crea un evento personalizado que indica que ha ocurrido un cambio de ruta.
    window.dispatchEvent(navitgationEvent)    //Dispara el eventto
}

export function Link({target, to, ...props}:LinkProps){
    const handleClick = (event:React.MouseEvent<HTMLAnchorElement>)=>{
        //Para que funcionen los botones del teclado para abrir pestañas y algunas funciones más:
        //1º Comprobamos  si el clic proviene del botón principal del ratón
        const isMainEvent = event.button === 0
        //2º Comprobamos si el usuario está manteniendo presionada alguna tecla modificadora (Ctrl, Shift, Alt, o Meta)
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        //3º Comprobamos si el target es "_self" o no está definido.
        const isManageable = target === undefined || target === "_self"

        if(isMainEvent && isManageable && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}/>
}
