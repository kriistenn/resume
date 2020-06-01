import React from 'react'
import Nav from '../Nav'
import style from './page.module.css'

function PageWrapper( { children } ) {
    
    return (
        <div className={style.page}>
            <Nav/>
            {children}
        </div>
    )
}

export default PageWrapper