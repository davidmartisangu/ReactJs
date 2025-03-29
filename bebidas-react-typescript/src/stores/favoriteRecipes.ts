import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"


export type FavoriteSliceType ={
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe)=> void
    favoriteExist:(id: Recipe["idDrink"])=>boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoriteSliceType & NotificationSliceType, [],
[], FavoriteSliceType> = (set, get,api)=>({

    favorites:[],
    handleClickFavorite: (recipe)=>{
        if(get().favorites.some(favorite=>favorite.idDrink === recipe.idDrink)){
            set((state)=>({
                favorites: state.favorites.filter(favorite=> favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotificacion({
                text: "Se eliminó de favorites",
                error: false
            })
        } else{
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotificacion({
                text: "Se agrego a favorites",
                error: false
            })
        }
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },
    favoriteExist:(id)=>{
        return get().favorites.some(favorite=> favorite.idDrink === id)
    },
    loadFromStorage:()=>{
        const storedFavorites = localStorage.getItem("favorites")
        if(storedFavorites){
            set(()=>({
                favorites: JSON.parse(storedFavorites)
            }))
        }
    }
})