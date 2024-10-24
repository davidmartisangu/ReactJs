import { lazy, Suspense } from "react"
import { Page404 } from "./pages/404"
import SearchPage  from "./pages/Search"
import { Router } from "./Router"
import { RouteInterface } from "./assets/components/interfaces"
import { Route } from "./Route"

const LazyAboutPage = lazy(()=> import('./pages/About.tsx'))
const LazyHomePage = lazy(()=> import('./pages/Home.tsx'))

const appRoutes: RouteInterface[] = [
  {
    path:"/search/:query",
    Component: SearchPage
  },
  {
    path:"/lang/about",
    Component: LazyAboutPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes ={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage}/>
          <Route path="/about" Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
