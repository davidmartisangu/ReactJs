import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import {useMovies} from './hooks/useMovies'
import {Movies} from './components/movies'
import debounce from 'just-debounce-it'

function useSearch(){
  const [search, updateSearch] = useState("")
  const [error, setError] = useState<string|null>(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search === ""
      return
    } 

    if(search === ""){
      setError("No se puede buscar una película vacia")
      return
    } 
    if(search.length < 3){
      setError("La busqueda ha de tener al menos 3 carácteres")
      return
    }
    setError(null)
  },[search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] =useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies,getMovies, loading} = useMovies(search, sort) // Aquí obtienes el valor de mappedMovies

  const debounceGetMovies = useCallback(
    debounce((search:string)=>{
      console.log("search", search)
      getMovies(search)
    },300)
  ,[getMovies])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()   // Evita que el formulario recargue la página
    getMovies(search)
  }

  const handleSort = ()=>{
    setSort(!sort)
  }

    return (
      <div className='page'>
        <header>
          <h1>Buscador de películas</h1>
        </header>

        <main>
          <form className='form' method='get' onSubmit={handleSubmit}>
            <input name='query' value={search} onChange={handleChange} type="text" placeholder='matrix, spiderman, star wars'/>
            <input type='checkbox' onChange={handleSort} checked={sort}></input>
            <button type='submit'>Search</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <div className='pageMessage'>
            {
            loading ? <p>Loading...</p>:<Movies movies = {movies}/>
            }
          </div>
        </main>
      </div>
    )
  }

export default App
