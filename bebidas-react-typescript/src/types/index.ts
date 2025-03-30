import { z } from "zod";
import { DrinkAPISchema, DrinksAPIschema, RecipeAPIResponseSchema, RecipesSchema, SearchFilterSchema } from "../schema/recipes-schema";


export type Categories = z.infer<typeof RecipesSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIschema>
export type Drink = z.infer<typeof DrinkAPISchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>