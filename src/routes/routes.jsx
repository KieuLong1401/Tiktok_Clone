// Layouts
import { HeaderOnly } from '../layouts'

import Home from '../pages/Home'
import Following from '../pages/Following'
import Upload from '../pages/Upload'
import Search from '../pages/Search/'
import Profile from '../pages/Profile'

import configs from '../configs'

// public routes
const publicRoutes = [
    { path: configs.routes.root, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
    { path: configs.routes.search, component: Search, layout: null },
]

// private routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
