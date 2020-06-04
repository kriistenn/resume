import React from 'react'
import style from './about.module.css'
import PageWrapper from '../pagewrapper/index'
import IconBar from './IconBars/IconBar'

const listTitle = [
    {id: 1 , title: "Age",  value: "17"},
    {id: 2 , title: "Residence",  value: "Kyrgyzstan"},
    {id: 3 , title: "Address",  value: "Pushkina 13/5"},
    {id: 4 , title: "e-mail",  value: "christinadefault@mail.ru"},
    {id: 5 , title: "Phone",  value: "+996000000"},
    {id: 6 , title: "Skype",  value: "kriistenn"},
    {id: 7 , title: "Frelance",  value: "Advence"}
]
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
                                {
                                    listTitle.map((title, value) => {
                                        return(
                                            <li key={title.id}>
                                                <span className={style.title}>{title.title}</span>
                                                <span className={style.value}>{title.value}</span>
                                            </li>
                                        )
                                    })
                            
                                }
                                    <IconBar className={style.icon}/>
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
