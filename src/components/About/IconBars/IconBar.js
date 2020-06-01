import React from 'react'
import style from './iconbar.module.css'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import TelegramIcon from './TelegramIcon'

function IconBar () {
    return (
        <div className={style.social}>
            <a 
            href="https://github.com/kriistenn"
            target="_blank"
            rel="nooperer noreferrer"
            >
            <GithubIcon className={style.icon}/>
            </a>
            <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="nooperer noreferrer"
            >
                <InstagramIcon className={style.icon}/>
            </a>
            <a
            href="https://t.me/kriistenn"
            target="_blank"
            rel="nooperer noreferrer"
            >
                <TelegramIcon  className={style.icon}/>
            </a>
        </div>

    )
}

export default IconBar