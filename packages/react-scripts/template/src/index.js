import React from 'react'
import ReactDOM from 'react-dom'
import { ReactReduxAppContainer } from 'react-redux-app-container'

import App from './app/App'
import createStore from './store'

const store = createStore()

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
    <ReactReduxAppContainer store={store}>
        <App />
    </ReactReduxAppContainer>,
    MOUNT_NODE
)
