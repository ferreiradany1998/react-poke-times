import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

//To redirect we need to make this into a Higher order component since it is not a <Route>
// Making it a Supercharged Component (with extra features)

//setTimeout(() => {
//    props.history.push('/about')
//}, 2000);

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

//Making it a WrappedComponent
export default withRouter(Navbar)
