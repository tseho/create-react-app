import { createStore } from 'react-redux-app-container'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import { ReduxDebugPanel } from 'react-redux-app-container-devtools'

export default () => {
    const initialState = {}
    const reducers = {
        routing: routerReducer
    }
    const middlewares = [
        thunk
    ]
    const enhancers = []

    if (process.env.NODE_ENV === 'development') {
        enhancers.push(ReduxDebugPanel.instrument())
    }

    return createStore(initialState, reducers, middlewares, enhancers)
}
