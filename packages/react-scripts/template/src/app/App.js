import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

import HomeRoute from '../routes/Home'
import AboutRoute from '../routes/About'

import logo from './logo.svg'
import './App.css'

class App extends Component {
    render () {
        return (
            <Router>
                <div className='App'>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo' />
                        <h2>Welcome to React</h2>
                    </div>
                    <div className='App-menu'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <Switch>
                        <Route exact path='/' component={HomeRoute} />
                        <Route path='/about' component={AboutRoute} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
