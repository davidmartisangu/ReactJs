import { RouteParams } from "../assets/components/interfaces"

export default function SearchPage ({routeParams}: { routeParams?: RouteParams }){
    return(
        <h1>Has buscado {routeParams?.query || "nada"}</h1>
    )
}
