import React from 'react'
import { Outlet, Link } from 'react-router-dom'

/**
* @author
* @function Header
**/

export const Header = (props) => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark conainter'>
                <Link to="/" className='navbar-brand container'>Employee Managment App</Link>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    )
}
