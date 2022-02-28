import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='logo'>Converter</div>
            <ul className='nav'>
                <li>
                    <Link to='#'>About</Link>
                </li>
                <li>
                    <Link to='#'>FAQ</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav