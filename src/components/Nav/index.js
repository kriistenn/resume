import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'



function Nav() {
    console.log('style', style)
    return (
        <div className={style['bg-blue']}>
            <NavLink activeClassName={style.activeLink} exact to="/">About</NavLink>
            <NavLink activeClassName={style.activeLink} to="/resume">Resume</NavLink>
            <NavLink activeClassName={style.activeLink} to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName={style.activeLink} to="/contacts">Contacts</NavLink>
        </div>
    )
}

export default Nav