interface Movie {
    title:string,
    year:string,
    id:string,
    Type?:string,
    poster:string,
}

function ListOfMovies ({movies}:{movies:Movie[]}){
    return (
        <ul className="movies">{            
            movies.map(movie=>(
                <li key={movie.id} className="film">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.poster} alt={movie.title} />
                </li>
              ))
            }
        </ul>
    )
}

function RenderNoResults (){
    return(
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies ({movies}:{movies:Movie[]}){
    const hasMovies = movies?.length>0
    return (
        hasMovies
        ? <ListOfMovies movies={movies}/>
        :<RenderNoResults/>
    )
}