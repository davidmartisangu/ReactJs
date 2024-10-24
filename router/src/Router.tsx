import { useEffect, useState, Children, ReactNode } from "react"
import {EVENTS} from "./consts"
import { RouterProps } from "./assets/components/interfaces"
import { match } from "path-to-regexp"
import React from "react"

export function Router({routes = [], defaultComponent:DefaultComponent = ()=> <h1>404</h1>, children}: RouterProps){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
      const onLocationChange =()=>{
        setCurrentPath(window.location.pathname)
      }
  
      //Escuchar el evento
      window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE,onLocationChange)    //evento popstate, es el que se dispara cuando se navega con los botones del historial.
  
      //Limpiar el evento, devolver una función que limpie el evento
      return()=>{
        window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
      }
    },[])

    const routesFromChildren = Children.map(children,(child:ReactNode)=>{
      // Verifica si el hijo es un elemento válido de React
      if (React.isValidElement(child)) {
        const { props, type } = child;
        const isRoute = type && (type as any).name === "Route"; // Verifica el nombre del tipo

        return isRoute ? props : null;
    }
    return null; 
    })|| []; // Asegurarse de que sea un array, si es null o undefined

    const routesToUse = routes.concat(routesFromChildren.filter(Boolean))

    //MANEJAR RUTAS CON PARAMETROS DINÁMICOS
    //Se inicializa un objeto vacío que para almacenar los parámetros de la ruta
    let routeParams = {}
  
    const Page = routesToUse.find(({path})=>{
      if (path === currentPath) return true
      //usamos path-to-regexp para poder detectar rutas dinámicas como por ejemplo /search/:query
      const matchedUrl = match(path,{decode: decodeURIComponent})   // crea una función matchedUrl que puede verificar coincidencias con currentPath usando el path de la ruta.
      const matched = matchedUrl(currentPath)
      if (!matched) return false
      // Si matched es verdadero matched.params contiene los valores extraídos de la ruta dinámica.
      routeParams = matched.params
      return true
    })?.Component
  
    return Page
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams}/>
}
