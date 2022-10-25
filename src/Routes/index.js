import { HeaderOnly } from "~/components/Layout"
import Home from "~/pages/Home"
import Following from "~/pages/Following/Following"
import profile from "~/pages/profile/profile"
import Upload from "~/pages/Upload"
const publicRoutes =[
    {path: '/' , component:Home},
    {path: '/Following' , component:Following},
    {path: '/@:nickname' , component:profile},
    {path: '/Upload',component:Upload, layout:HeaderOnly}

]
const privateRoutes =[

]
export {publicRoutes,privateRoutes}