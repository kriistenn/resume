import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

const navItems = [
    {id: 1 , link: '/', text: 'About'},
    {id: 2 , link: '/resume', text: 'Resume'},
    {id: 3 , link: '/portfolio', text: 'Portfolio'},
    {id: 4 , link: '/contacts', text: 'Contacts'}
]

function Nav() {
    return (
        <div className={style['mobile-visible']}>
            <div className={style['div-nav']}>
            <div className={style['photo-name']}>
                <div className={style.image}></div>
                <h1 className={style.name}>Christina Kolitvinova</h1>
                </div>
            {   
                navItems.map(item => (
                <NavLink
                activeClassName={style.activeLink}
                className={style['nav-icon']}
                exact
                key={item.id}
                to={item.link}
                >
                {item.text}
                </NavLink>
                ))
            }
        </div>
        </div>
    )
}


export default Nav


// function Nav() {
//     console.log('style', style)
//     return (
//         <div>
//         <div className={style['div-nav']}>
//             <div className={style['photo-name']}>
//             <div className={style.image}>Imge</div>
//             <h1 className={style.name}>Christina Kolitvinova</h1>
//             </div>
//             <div >
//             <NavLink activeClassName={style.activeLink} className={style['nav-icon']} exact to="/">About</NavLink>
//             <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/resume">Resume</NavLink>
//             <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/portfolio">Portfolio</NavLink>
//             <NavLink activeClassName={style.activeLink} className={style['nav-icon']} to="/contacts">Contacts</NavLink>
//             </div>
//         </div>
//         </div>
//     )
// }