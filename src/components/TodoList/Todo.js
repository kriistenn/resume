import React from 'react'
import PropTypes from 'prop-types'
import style from './todo.module.css'

function TodoCard({ todo }) {
  return (
    <div className={style.todo}>
      <div className={style.todo_title}>{todo.title}</div>
      <div className={style.todo_desc}>{todo.desc}</div>
      <div className={style.todo_prioprity}>Приоритет: {todo.priority}</div>
    </div>
  )
}

TodoCard.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    priority: PropTypes.string,
  })
}

export default TodoCard
