export default (store) => ({
    path: '/about',
    getComponent (nextState, cb) {
        import('./containers/AboutContainer').then((About) => {
            cb(null, About.default)
        }).catch((err) => {
            console.error('Failed to load module', err)
        })
    }
})
