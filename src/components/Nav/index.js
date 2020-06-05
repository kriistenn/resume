import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

const navItems = [
    {id: 1 , link: '/', text: 'About'},
    {id: 2 , link: '/resume', text: 'Resume'},
    {id: 3 , link: '/portfolio', text: 'Portfolio'},
    {id: 4 , link: '/contacts', text: 'Contacts'}
]
function Nav(){
    const [active,setActive] = React.useState(false)

    return (
                <div className={style['div-nav']}>
            <div className={style['photo-name']}>
                <div className={style.image}>
                    <img className={style.imgs} src={'https://i.pinimg.com/originals/9a/64/26/9a6426e462d8e10cae76d6491e4051b8.jpg'}/>
                </div>
                <h1 className={style.name}>Christina Kolitvinova</h1>
                <button className={style.menu} onClick={()=>setActive(!active)}>Menu</button>
                </div>
            {   
                active && navItems.map(item => (
                <NavLink className={active}
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
    )
}


export default Nav


