import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import todo from './todo'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  todo,
})
