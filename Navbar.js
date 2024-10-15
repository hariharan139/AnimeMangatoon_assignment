import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    
    return (
        <header className='header'>
        <Link to='/' className='logo'>
       Logo
        </Link>
        <nav className='Navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
       </header>
    )
}

export default Navbar
