import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    recipes: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink["idDrink"])=>Promise<void>
    closeModal: ()=>void
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    recipes: {
        drinks:[]
    },
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async()=>{
        const categoriesCall = await getCategories()
        set (()=>({
            categories: categoriesCall
        }))
    },
    searchRecipes: async(filters)=>{
        const drinkResult = await getRecipes(filters)
        set(()=>({
            recipes: drinkResult
        }))
    },
    selectRecipe: async(id)=>{
        const selectRecipe = await getRecipeById(id)
        set(()=>({
            selectedRecipe: selectRecipe,
            modal: true
        }))
    },
    closeModal: ()=>{
        set(()=>({
            modal: false
        }))
    }
})

