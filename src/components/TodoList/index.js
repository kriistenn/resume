import React from 'react'
import shortid from 'shortid'
import Todo from './Todo'
import style from './todo.module.css'
import Priorities from './Priority'

function TodoList() {

    const initialState = {
        todos: [],
        title:'',
        desc: '',
        priority: 'normal'
    }

    const reducer = (state=initialState, action) => {
        switch (action.type) {
            case 'ADD_TITLE':
                return {...state, title: action.payload};
            case 'ADD_DESC':
                return {...state, desc: action.payload};
            case 'ADD_PRIORITY':
                return {...state, priority: action.priority};
            case 'ADD_TASK':
                return {...state, todos: [...state.todos, action.payload]};
            case 'CHANGE_CLEAR':
                return {...state, title: '' ,desc: '',priority: 'normal'};
            default:
                throw new Error();
        }
}
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const {todos, title, desc, priority} = state


const handleAdd = (e) => {
    e.preventDefault()
    if (!title || !desc || !priority) {
        alert('заполните все поля')
        return
    }
        const newTodo = {
            id: shortid.generate(),
            title, desc, priority
    }

    dispatch({type: 'ADD_TASK', payload: newTodo})
    dispatch({type: 'CHANGE_CLEAR'})
    
    
}

return (
  <div className={style.container}>
        <div className={style.page}>
        <form className={style.form}>
            <h3>Новая задача</h3>
            <input 
            
                type="text" 
                placeholder="Название" 
                value={title}
                onChange={(e) => dispatch({type: 'ADD_TITLE', payload: e.target.value })}
            />
                <textarea 
                    placeholder="Описание" 
                    value={desc}
                    onChange={(e) => dispatch({type: 'ADD_DESC', payload: e.target.value})}
        />
        <Priorities 
            priority={priority}
            setPriority={(value) => dispatch({ type: 'ADD_PRIORITY', priority: value })}
        />
        <button className={style.btn} onClick={handleAdd} >
            Добавить
        </button>
        </form>
        <div className={style.list}>
            { todos.map(c => <Todo key={c.id} todo={c}/>) }
        </div>
    </div>
  </div>
)
}

export default TodoList
