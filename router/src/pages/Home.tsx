import { Link } from "../Link"

export default function HomePage(){
    return(
      <>
        <h1>Home</h1>
        <p>Esto es una página para crear un React Router desde cero</p>
        <Link to="/about">Ir a Sobre nosotros</Link>
      </>
    )
  }