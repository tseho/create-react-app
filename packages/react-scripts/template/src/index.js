import React from 'react'
import ReactDOM from 'react-dom'
import { ReactReduxAppContainer } from 'react-redux-app-container'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './app/App'
import createStore from './store'

const store = createStore()
const routes = require('./routes/index').default(App, store)
const history = syncHistoryWithStore(browserHistory, store)

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
    <ReactReduxAppContainer
        store={store}
        history={history}
        routes={routes}
    />,
    MOUNT_NODE
)
