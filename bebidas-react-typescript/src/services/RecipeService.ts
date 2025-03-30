import axios from "axios"
import { DrinksAPIschema, RecipesAPIResponseSchema, RecipesSchema } from "../schema/recipes-schema"
import { Drink, SearchFilter } from "../types"

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
    //Validar con ZOD
    const result = RecipesSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingridient}`
    const {data} = await axios(url)
    //Validar con ZOD
    const result = DrinksAPIschema.safeParse(data)
    if(result.success){
        return result.data
    }
}

export async function getRecipeById(id: Drink["idDrink"]){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(url)
    //Validar con ZOD
    const result = RecipesAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data.drinks[0]
    }
}
