import React from 'react';
import PageWrapper from '../pagewrapper/index'
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
                        <div className={style['portfolio-grid']}>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Portfolio;
