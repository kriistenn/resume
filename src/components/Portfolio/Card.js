import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import style from './portfolio.module.css'


function Card ( {link, image, alt ='', title, desc} ) {
    return (
        <div className={style.card}>
            <NavLink  to={link} style={{ textDecoration: 'none' }}>
            <img src={image} alt={alt}/>
            <div className={style.cardText}>
                <h3>{title}</h3>
                <div className={style.text}>{desc}</div>
            </div>
        </NavLink>
        </div>
    )

}


Card.propTypes =  {
    link: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
}

export default Card