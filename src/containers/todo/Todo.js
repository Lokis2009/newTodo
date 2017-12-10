import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => (
  <div>
    <button onClick={()=>props.changeFilter(5)}/>
    <input onChange={(e => props.changeFilter(e.target.value))} />
    <ul>
    {props.todo.filter(f => f.title.includes(props.filterString)).map((e, i)=>
      <li key={i}>
        <div>{e.title}</div>
        <div>{e.description}</div>
        <div>{e.created_at}</div>
      </li>)}
    </ul>
    dasdfgdfhfdhdf
  </div>
)

export default Todo



// Todo.propTypes = propTypes
// Todo.defaultProps = defaultProps
