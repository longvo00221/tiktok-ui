import routesConfig from '~/config/routes'

import { HeaderOnly } from "~/components/Layout"
import Home from "~/pages/Home"
import Following from "~/pages/Following/Following"
import profile from "~/pages/profile/profile"
import Upload from "~/pages/Upload"
const publicRoutes =[
    {path: routesConfig.home , component:Home},
    {path: routesConfig.following , component:Following},
    {path: routesConfig.profile , component:profile},
    {path: routesConfig.Upload,component:Upload, layout:HeaderOnly}

]
const privateRoutes =[

]
export {publicRoutes,privateRoutes}