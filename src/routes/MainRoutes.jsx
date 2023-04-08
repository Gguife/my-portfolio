import { useRoutes } from "react-router-dom";
import {HomePage} from '../pages/homePage/HomePage'
import {ContentProject} from '../pages/contentProject/ContentProject'
import {Certificados} from '../pages/certificados/Certificados'

export const MainRoutes = () =>{
  const routes = useRoutes([
    {path:'/', element:<HomePage />},
    {path:'/projetos', element:<ContentProject/>},
    {path:'/certificados', element:<Certificados/>}
  ])

  return routes;
}