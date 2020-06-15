import React from 'react';
import PageWrapper from '../pagewrapper/index'
import Card from './Card'
import style from './portfolio.module.css'

import {NavLink} from 'react-router-dom'


function Portfolio() {
    return (
        <PageWrapper>
            <div className={style.container}>
                <div className={style['portfolio-cont']}>
                    <div className={style.blockDecoration}></div>
                    <div className={style.content}>
                    <div className={style['section-title-block']}>
                        <div className={style['section-title-wrapper']}>
                            <h2 className={style['h2-portfolio']}>Portfolio</h2>
                            <h5 className={style['h5-portfolio']}>My best work</h5>
                        </div>
                        <div className={style['portfolio-list']}>
                        <NavLink to="/portfolio/contact-list" className={style.a}>
                            <Card
                            title="Contact List"
                            link="/portfolio/contact-list"
                            desc="Классический контакт-лист, который есть в наших телефонах. С функцией добавления  контактов."
                            />
                        </NavLink>
                            <NavLink  to="/portfolio/todo-list" className={style.a}>
                            <Card
                            title="To-do List"
                            link="/portfolio/todo-list"
                            desc="Классический список задач. Главной функцией является добавление задач на день, с выбором их сложности."
                            />
                            </NavLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Portfolio;
