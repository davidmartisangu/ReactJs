import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { SortBy, type User } from './type.d'

function App() {
  const [users, setUsers] = useState<User[]>([]) // Estado para almacenar los usuarios
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry,setFilterCountry] = useState<string | null>(null)
  
  const originalUsers = useRef<User[]>([])

  const toggleColors = ()=>{
    setShowColors(!showColors)
  }

  const toggleSortByCountry = ()=>{
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (email:string)=>{
    const filteredUser = users.filter((user)=>user.email != email)
    setUsers(filteredUser)
  }

  const handleReset =()=>{
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) =>{
    setSorting(sort)
  }

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=100")
    .then(async res => res.json())
    .then(res=>{
      setUsers(res.results)   // Almacena los resultados en el estado
      originalUsers.current = res.results}) 
    .catch(err => console.log("Error fetching users:", err))
  }
  ,[])

  const filteredUsers = useMemo(()=>{ 
    return filterCountry
      ? users.filter(user =>{
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users},[users, filterCountry])


  const sortedUsers = useMemo(()=>{
    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted
        ((a, b)=>{return a.location.country.localeCompare(b.location.country)
        })
      }
    if (sorting === SortBy.NAME){
      return filteredUsers.toSorted((a,b)=>{return a.name.first.localeCompare(b.name.first)})
    }
    if (sorting === SortBy.LAST){
      return filteredUsers.toSorted((a,b)=>{return a.name.last.localeCompare(b.name.last)})
    }
    return []; 
  },[filteredUsers, sorting])

  return (

    <div className='App'>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>{sorting === SortBy.COUNTRY ? "No ordenar por pais" : "Ordenar por pais"}</button>
        <button onClick={handleReset}>Resetear estado</button>
        <input type="text" placeholder='Filtrar por pais' onChange={(e)=>{setFilterCountry(e.target.value)}}/>
      </header>
      <main>
        <UserList changeSorting = {handleChangeSort} users={sortedUsers} showColors={showColors} deleteUser={handleDelete}/>
      </main>
    </div>

  )
}

export default App
