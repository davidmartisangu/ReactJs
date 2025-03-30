import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {

    const selectRecipe = useAppStore((state)=>state.selectRecipe)

    return (
        <div className="  shadow-lg">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                    className=" hover:scale-125 transition-transform hover:rotate-2" />
            </div>

            <div className="p-5">
                <h2 className="truncate text-2xl font-black">
                    {drink.strDrink}
                </h2>

                <button
                    type="button"    
                    className="bg-orange-400 hover:bg-orange-500 w-full mt-5 text-white font-bold p-3 text-lg hover:cursor-pointer"
                    onClick={()=>selectRecipe(drink.idDrink)}
                >Ver Receta</button>
            </div>

        </div>
    )
    }
