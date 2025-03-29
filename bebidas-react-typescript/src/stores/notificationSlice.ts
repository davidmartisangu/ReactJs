import { StateCreator } from "zustand"
import { FavoriteSliceType } from "./favoriteRecipes"

type Notification ={
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotificacion: (payload: Pick<Notification, 'text' | 'error'>)=> void
    hideNotificaton: ()=> void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoriteSliceType, [],[], NotificationSliceType> = (set, get)=>({
    notification:{
        text: "",
        error: false,
        show: false,
    },
    showNotificacion:(payload)=>{
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show:true
            }
        })
        setTimeout(()=>{
            get().hideNotificaton()
        }, 5000)
    },
    hideNotificaton:()=>{
        set({
            notification:{
                text: "",
                error: false,
                show: false,
            }
        })
    }
})