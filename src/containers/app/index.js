import React from 'react'
import { Route } from 'react-router-dom'
import Todo from '../todo'


const App = () => (
  <div>
    <Route exact path='/' component={Todo} />
  </div>
)

export default App
