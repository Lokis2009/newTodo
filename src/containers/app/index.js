import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../layout'
import Login from '../login'


const App = () => (
  <div>
    <Route exact path='/' component={Layout} />
    <Route exact path='/login' component={Login} />
  </div>
)

export default App
