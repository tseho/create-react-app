import Home from './Home'
import About from './About'

export default (root, store) => ({
    path: '/',
    component: root,
    indexRoute: Home(store),
    childRoutes: [
        About(store)
    ]
})
