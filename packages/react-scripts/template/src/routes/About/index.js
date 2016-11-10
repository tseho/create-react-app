export default (store) => ({
    path: '/about',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const About = require('./containers/AboutContainer').default
            cb(null, About)
        }, 'about')
    }
})
