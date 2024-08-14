import React from 'react'

export const ToDoForm = () => {
  return (
    <form className='ToDoForm'>
        <input type='text' className='todo-input'
        placeholder='What is the task today'/>
        <button type='submit' className='todo-btn'>
            </button>
    </form>
  )
}
