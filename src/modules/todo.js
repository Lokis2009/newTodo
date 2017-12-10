import { todoList } from './data'

export const consts = {
  changeFilter: 'CHANGEFILTER',
}

const InitialState = {
  todoList: todoList,
  filterString: ''
}

export const changeFilter = (value) => (dispatch, getState) => {
  console.log(getState())
  dispatch({ type: consts.changeFilter, payload: value })
}

export const addTodo = (value) => (dispatch, getState) => {
  console.log(getState())
  dispatch({ type: consts.changeFilter, payload: value })
}

export const actionHandlers = {
  [consts.changeFilter]: (state, action) => ({ ...state, filterString: action.payload}),
  // [consts.changeFilter]: (state, action) => ({ ...state, filterString: action.payload}),
}


const initialState = InitialState
export const reducers = (state = initialState, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
