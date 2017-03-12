import { createStore } from 'react-redux-app-container'
import thunk from 'redux-thunk'

export default () => {
    const initialState = {}
    const reducers = {}
    const middlewares = [
        thunk
    ]
    const enhancers = []

    return createStore(initialState, reducers, middlewares, enhancers)
}
