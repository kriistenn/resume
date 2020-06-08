import React from 'react';
import style from './development.module.css'

function Development(){
  return (
    <div className={style.container}>
            <div className={style['about-cont']}>
                <div className={style.blockDecoration}></div>
                <div className={style.content}>
                <div className={style['section-title-block']}>
                        <h2 className={style['h2-about']}>This component is not ready</h2>
                        
                    </div>
                </div>
    
    </div>
    </div>
  );
}

export default Development;
