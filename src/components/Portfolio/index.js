import React from 'react';
import PageWrapper from '../pagewrapper/index'
import Card from './Card'
import style from './portfolio.module.css'


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
                            <Card
                            title="Contact List"
                            link="/portfolio/contact-list"
                            desc="Классический контакт-лист, который есть в наших телефонах. Тут есть все стандартные вещи для таких приложений. А именно добавление, удаление и редактирование."
                            />
                            <Card
                            title="Todo List"
                            link="/portfolio/todo-list"
                            desc="Классический список задач. Главной функцией является добавление задач на день, с выбором их сложности, а так же удалением и редактированием"
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Portfolio;
