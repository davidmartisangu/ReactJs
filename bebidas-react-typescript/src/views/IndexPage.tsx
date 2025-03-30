import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function IndexPage() {

  const drinks = useAppStore((state)=>state.recipes)

  const hasDrinks = useMemo(()=> drinks.drinks.length,[drinks])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      {hasDrinks ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {drinks.drinks.map(drink=>(
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ) : (
        <p className=" text-center my-10 text-2xl">No hay bebidas utilice el formulario</p>
      )}
    </>
  )
}
