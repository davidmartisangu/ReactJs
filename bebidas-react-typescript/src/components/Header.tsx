import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

  const [searchFilters, setSearchFilters] = useState({
    ingridient:"",
    category:""
  })

  const {pathname} = useLocation()
  
  const isHome = useMemo(()=> pathname==="/",[pathname])

  const fetchCategories = useAppStore((state)=>state.fetchCategories)
  const categories = useAppStore((state)=>state.categories)
  const searchRecipes = useAppStore((state)=>state.searchRecipes)
  const showNotification = useAppStore((state)=>state.showNotificacion)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(Object.values(searchFilters).includes("")){
      showNotification({
        text: "Deben introducirse todos los datos",
        error:true
      })
      return
    }
    searchRecipes(searchFilters)

  }

  useEffect(()=>{
    fetchCategories()
    },[])

  return (
    <header className={isHome ? "bg-[url(/bg.jpg)] bg-center bg-cover" : "bg-slate-800"}>
        <div className=" mx-auto px-5 py-16 container">
            <div className="flex justify-between items-center">
                <div>
                    <img className=" w-32" src="/logo.svg" alt="logotipo" />
                </div>
                <nav className=" flex gap-4">
                  <NavLink 
                    to="/"
                    className={({isActive})=> isActive ? "font-bold uppercase text-orange-500" : "font-bold uppercase text-white"}
                  >Inicio</NavLink>
                  <NavLink 
                    to="/favoritos"
                    className={({isActive})=> isActive ? "font-bold uppercase text-orange-500" : "font-bold uppercase text-white"} 
                  >Favoritos</NavLink>
                  <NavLink 
                    to="/generate"
                    className={({isActive})=> isActive ? "font-bold uppercase text-orange-500" : "font-bold uppercase text-white"} 
                  >Generar con IA</NavLink>
                </nav>
            </div>

            {isHome &&(
              <form 
                className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <label 
                    htmlFor="ingridient"
                    className=" block text-white uppercase text-lg font-extrabold"
                  >Nombre o Ingredientes </label>

                  <input 
                    id="ingridient"
                    type="text"
                    name="ingridient"
                    className=" w-full p-3 rounded-lg focus:outline-none bg-white"
                    placeholder="Nombre o ingrediente. Ej. Tequila, cafe, Ron"
                    onChange={handleChange}
                    value={searchFilters.ingridient}
                  />
                </div>

                <div className="space-y-4">
                  <label 
                    htmlFor="category"
                    className=" block text-white uppercase text-lg font-extrabold"
                  >Categoria </label>

                  <select 
                    id="category"
                    name="category"
                    className=" w-full p-3 rounded-lg focus:outline-none bg-white"
                    onChange={handleChange}
                    value={searchFilters.category}
                  >
                    <option value="">--Seleccione--</option>
                    {categories.drinks.map(category=>(
                      <option 
                        key={category.strCategory}
                        value={category.strCategory}
                      >{category.strCategory}</option>
                    ))}
                  </select>
                </div>
                <input 
                  type="submit"
                  value={"Buscar recetas"}
                  className=" cursor-pointer uppercase w-full bg-orange-800 hover:bg-orange-900
                    rounded-lg font-extrabold text-white p-2"/>
              </form>
            )}
        </div>
    </header>
  )
}
