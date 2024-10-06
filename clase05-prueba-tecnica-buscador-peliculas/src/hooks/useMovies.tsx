import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies, MappedMovie } from '../services/movies'; 

export function useMovies(search: string, sort:boolean) {
    const [movies, setMovies] = useState<MappedMovie[]>([]); // Cambiado a MappedMovie[]
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)
    const previousSearch = useRef(search)   //guarda el valor de la busqueda anterior

    const getMovies = useCallback(async(search:string)=>{
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies(search);  //Como searchMovies es una promesa tenemos que usar async/await
            setMovies(newMovies); // Establecer directamente el array de películas mapeadas
        } catch (e) {
            if (e instanceof Error){
                setError(e.message)
            }
        } finally {
            setLoading(false)
        }
    },[])

    const sortedMovies = useMemo(()=>{        
        return sort
            ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
            : movies
    },[movies, sort])

    return { movies: sortedMovies, loading, getMovies };
}
