import React from 'react'
import style from './todo.module.css'

function Priorities({ priority, setPriority }) {
return (
    <div className={style.priority}>
        {
        ['high', 'medium', 'normal'].map(type => {
            return (
                <div key={type}>
                    <input 
                        id={`priority-${type}`}
                        type="radio"
                        name="priority" 
                        value={type}
                        checked={priority === type}
                        onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor={`priority-${type}`}>{type}</label>
            </div>
        )
    })
}
    </div>
)
}

export default Priorities
