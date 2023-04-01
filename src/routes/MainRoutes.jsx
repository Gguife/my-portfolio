import { useRoutes } from "react-router-dom";
import {HomePage} from '../pages/homePage/HomePage'
import {ContentProject} from '../pages/contentProject/ContentProject'

export const MainRoutes = () =>{
  const routes = useRoutes([
    {path:'/', element:<HomePage />},
    {path:'/projetos', element:<ContentProject/>}
  ])

  return routes;
}