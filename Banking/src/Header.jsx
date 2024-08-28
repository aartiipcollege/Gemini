import React from 'react'
import './App.css'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className='ul'>
                   <Link to="/create" className="li">Create Account</Link>
                   <Link to="/withdraw" className="li">Withdrawl</Link>
                   <Link to="/deposite" className="li">Deposite</Link>
                   <Link to="/transfer" className="li">Transfer</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
