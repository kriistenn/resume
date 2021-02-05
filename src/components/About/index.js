import React from 'react'
import style from './about.module.css'
import PageWrapper from '../pagewrapper/index'
import IconBar from './IconBars/IconBar'
import photo from '../Nav/MyPhoto.jpg'

const listTitle = [
    {id: 1 , title: "Age",  value: "17"},
    {id: 2 , title: "Residence",  value: "Kyrgyzstan, Bishkek"},
    {id: 3 , title: "e-mail",  value: "christinadefault@mail.ru"},
    {id: 4 , title: "Phone",  value: "+996 500 587 778"},
    {id: 5, title: "Language", value: "Russian(native), English(intermediate)"}
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
                            <img className={style['imgs']} src={photo}/>
                        </div>
                        <div className={style['about-info']}>
                            <h3 className={style['h3-about-info']}>I am Front-end developer</h3>
                            <p className={style['info-p']}>Привет, меня зовут Кристина. Я занимаюсь Front-end разработкой. 
Люблю получать детальную и уместную критику, так как она помогает мне развиваться как личность и как разработчик. Считаю что нет не решаемых проблем, так как есть Google который имеет ответы на все вопросы  и опытные коллеги, которые укажут направление. 
Так же имею огромное желание реализоваться как front-end разработчик и никогда не останавливаться на достигнутом.</p> 
                            <p className={style['info-p']}></p>
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
