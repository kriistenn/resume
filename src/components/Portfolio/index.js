import React from 'react'
import style from './portfolio.module.css'
import PageWrapper from '../pagewrapper'
import {NavLink} from 'react-router-dom'

function Portfolio() {
    return (
        <PageWrapper>
           <div className={style.portfolioList}>
                <NavLink to="/portfolio/contact-list">Contact List</NavLink>
           </div>
        </PageWrapper>
    );
}

export default Portfolio;
