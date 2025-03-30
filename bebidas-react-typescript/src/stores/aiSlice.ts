import { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string
    generateRecipe: (prompt: string)=>Promise<void>
    isGenerating: boolean
}

export const createAISlice: StateCreator<AISlice> =(set)=>({
    recipe:"",
    isGenerating: false,
    generateRecipe: async (prompt)=>{
        // Reiniciar la receta antes de empezar a generar la nueva
        set({recipe:"", isGenerating: true})
        const data = await AIService.generateRecipe(prompt)

        for await(const textPart of data){
            set((state)=>({
                recipe: state.recipe + textPart
            }))
        }
        set({isGenerating: false})
    }
})
