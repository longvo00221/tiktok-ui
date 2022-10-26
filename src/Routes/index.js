import config from '~/config/routes'

import { HeaderOnly } from "~/layouts"
import Home from "~/pages/Home"
import Following from "~/pages/Following/Following"
import profile from "~/pages/profile/profile"
import Upload from "~/pages/Upload"
const publicRoutes =[
    {path: config.home , component:Home},
    {path: config.following , component:Following},
    {path: config.profile , component:profile},
    {path: config.Upload,component:Upload, layout:HeaderOnly}

]
const privateRoutes =[

]
export {publicRoutes,privateRoutes}