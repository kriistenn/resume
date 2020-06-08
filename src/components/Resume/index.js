import React from 'react';

import PageWrapper from '../pagewrapper/index'
import style from './resume.module.css'

function Resume() {
    return (
        <PageWrapper>
        <div className={style.container}>
            <div className={style['about-cont']}>
                <div className={style.blockDecoration}></div>
                <div className={style.content}>
                    <div className={style['section-title-block']}>
                            <h2 className={style['h2-about']}>Resume</h2>
                            <h5 className={style['h5-about']}>Experience no</h5>
                    </div>
                <div className={style['cont-resume']}>
                    <div className={style['subpage-block']}>
                        <div className={style['block-title']}>
                            <h3 className={style.h3}>Education</h3>
                        </div>
                        <div className={style['timeline']}>
                            <div className={style['block-res']}>
                                <h5 className={style['block-res-h5']}>2019-2020</h5>
                                <h4 className={style['block-res-h4']}>Specialization Course</h4>
                                <span>IT Academy of Studies</span>
                                <p>Course on Front-end developer</p>
                            </div>
                        </div>
                    </div>
                    <div className={style['subpage-block']}>
                    <div className={style['block-title']}>
                            <h3 className={style.h3}>Experience</h3>
                        </div>
                    </div>
                    <div className={style['subpage-block']}>
                    <div className={style['block-title']}>
                            <h3 className={style.h3}>Coding Skills</h3>
                        </div>
                        <div className={style['skills-info']}>
                        <h4>HTML5</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl1}></div>
                        </div>
                        <h4>CSS3</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl2}></div>
                        </div>
                        <h4>JavaScript</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl3}></div>
                        </div>
                        <h4>React.js</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl4}></div>
                        </div>
                        <h4>Node.js</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl4}></div>
                        </div>
                        <h4>Git</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl4}></div>
                        </div>
                        <h4>Bootstrap</h4>
                        <div className={style['skill-container']}>
                            <div className={style.lvl4}></div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</PageWrapper>
    );
}

export default Resume;
