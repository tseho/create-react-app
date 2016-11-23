import { createStore } from 'react-redux-app-container'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

export default () => {
    const initialState = {}
    const reducers = {
        routing: routerReducer
    }
    const middlewares = [
        thunk
    ]
    const enhancers = []

    return createStore(initialState, reducers, middlewares, enhancers)
}
