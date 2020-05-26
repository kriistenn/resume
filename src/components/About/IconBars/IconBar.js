import React from 'react'
import style from './iconbar.module.css'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import TelegramIcon from './TelegramIcon'

function IconBar () {
    return (
        <div className={style.social}>
            <a href="https://github.com/kriistenn">
            <GithubIcon className={style.icon}/>
            </a>
            <a href="https://www.instagram.com/">
                <InstagramIcon className={style.icon}/>
            </a>
            <a href="https://t.me/kriistenn">
                <TelegramIcon  className={style.icon}/>
            </a>
        </div>

    )
}

export default IconBar