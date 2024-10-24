import { Link } from "../Link"

export function Page404(){
    return(
      <>
        <h1>This is not fine</h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif del perro de quemandose vivo" />
        <Link to="/">Volver a la home</Link>
      </>
    )
  }