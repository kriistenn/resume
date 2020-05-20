import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'



function Nav() {
    console.log('style', style)
    return (
        <div>
        <div className={style['div-nav']}>
            <div className={style['photo-name']}>
            <div className={style.image}>Imge</div>
            <h1 className={style.name}>Christina Kolitvinova</h1>
            </div>
            <div >
            <NavLink activeClassName={style.activeLink} className={style['nav-icon']} exact to="/">About</NavLink>
            <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/resume">Resume</NavLink>
            <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/contacts">Contacts</NavLink>
            </div>
        </div>
        </div>
    )
}

export default Nav