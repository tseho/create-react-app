import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    render () {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Welcome to React</h2>
                </div>
                <div className='App-menu'>
                    <IndexLink to='/'>
                        Home
                    </IndexLink>
                    <Link to='/about'>
                        About
                    </Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    children : React.PropTypes.element
}

export default App
