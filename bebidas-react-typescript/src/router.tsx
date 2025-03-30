import { lazy, Suspense } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout"
const FavoritesPage = lazy(()=>import('./views/FavoritesPage'))
const IndexPage = lazy(()=>import('./views/IndexPage'))
const GenerateAI = lazy(()=>import("./views/GenerateAI"))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={
              <Suspense fallback="Cargando...">
                <IndexPage/>
              </Suspense>
            } index/>

            <Route path="/favoritos" element={
              <Suspense fallback="Cargando...">
                <FavoritesPage/>
              </Suspense>
            }/>
            <Route path="/generate" element={
              <Suspense fallback="Cargando...">
                <GenerateAI/>
              </Suspense>
            }/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
