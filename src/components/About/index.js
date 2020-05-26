import React from 'react';
import style from './about.module.css'
import PageWrapper from '../PageWrapper/index'
import IconBar from './IconBars/IconBar'

function About() {
    return (
    <PageWrapper>
        <div className={style.container}>
            <div className={style['about-cont']}>
                <div className={style.blockDecoration}></div>
                <div className={style.content}>
                    <div className={style['section-title-block']}>
                        <h2 className={style['h2-about']}>About Me</h2>
                        <h5 className={style['h5-about']}>Front-end developer</h5>
                    </div>
                    <div className={style['section-cont-block']}>
                        <div className={style['block-img']}>
                        <img className={style.imgs} src={'https://i.pinimg.com/originals/9a/64/26/9a6426e462d8e10cae76d6491e4051b8.jpg'}/>
                        </div>
                        <div className={style['about-info']}>
                            <h3 className={style['h3-about-info']}>I am Web Designer @ Company.com</h3>
                            <p className={style['info-p']}>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p> 
                            <p className={style['info-p']}>Duis sollicitudin, libero porttitor rutrum ultrices,<br/> turpis lorem fermentum justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className={style['personal-info']}>
                            <ul className={style['info-list']}>
                                <li>
                                    <span className={style.title}>Age</span>
                                    <span className={style.value}>17</span>
                                </li>
                                <li>
                                    <span className={style.title}>Residence</span>
                                    <span className={style.value}>Kyrgyzstan</span>
                                </li>
                                <li>
                                    <span className={style.title}>Address</span>
                                    <span className={style.value}>Pushkina 13/5</span>
                                </li>
                                <li>
                                    <span className={style.title}>e-mail</span>
                                    <span className={style.value}>christinadefault@mail.ru</span>
                                </li>
                                <li>
                                    <span className={style.title}>Phone</span>
                                    <span className={style.value}>+996000000</span>
                                </li>
                                <li>
                                    <span className={style.title}>Skype</span>
                                    <span className={style.value}>kriistenn</span>
                                </li>
                                <li>
                                    <span className={style.title}>Frelance</span>
                                    <span className={style.value}>Advence</span>
                                </li>
                                <IconBar/>
                            </ul>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </PageWrapper>
    );
}

export default About;
