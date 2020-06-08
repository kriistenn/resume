import React from 'react';
import style from './error.module.css'

function NotFound(){
  return (
    <div className={style.body}>
    <div className={style.texter}>404 Not Found</div>
    </div>
  );
}

export default NotFound;
