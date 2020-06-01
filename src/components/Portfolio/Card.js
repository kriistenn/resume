import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import style from './portfolio.module.css'


function Card ( {link, image, alt ='', title, desc} ) {
    return (
        <NavLink to={link} className={style.card}>
            <img src={image} alt={alt}/>
            <div className={style.cardText}>
                <h3>{title}</h3>
                <div>{desc}</div>
            </div>
        </NavLink>
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