import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Approach from './pages/Approach'
import Clients from './pages/Clients'
import Insights from './pages/Insights'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const router=createBrowserRouter([{path:'/',element:<Layout/>,children:[
  {index:true,element:<Home/>},{path:'about',element:<About/>},{path:'services',element:<Services/>},{path:'services/:slug',element:<ServiceDetail/>},{path:'our-approach',element:<Approach/>},{path:'clients',element:<Clients/>},{path:'insights',element:<Insights/>},{path:'faq',element:<FAQ/>},{path:'contact',element:<Contact/>},{path:'*',element:<NotFound/>}
]}])
export default function App(){return <RouterProvider router={router}/>}
