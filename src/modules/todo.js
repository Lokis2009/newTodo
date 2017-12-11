import {
	todoList
} from './data'

export const consts = {
	changeFilter: 'CHANGEFILTER',
	addTodo: 'ADDTODO',
	deleteTodo: 'DELETETODO'
}

const InitialState = {
	todoList: todoList,
	filterString: '',
	filterDate: '',
	
}

export const changeFilter = (value) => (dispatch, getState) => {
	console.log(getState())
	dispatch({
		type: consts.changeFilter,
		payload: value
	})
}

export const addTodo = (value) => (dispatch, getState) => {
	console.log(getState(), 'addTodo')
	dispatch({
		type: consts.addTodo,
		payload: { id:  getState().todo.todoList.length+2,
			title: value.title,
				  description: value.description,
				  created_at: new Date().toDateString()
		}
	})
}

export const deleteTodo = (value) => (dispatch, getState) => {
	console.log(getState(), 'deleteTodo')
	dispatch({
		type: consts.deleteTodo,
		payload: value
	})
}

export const actionHandlers = {
  [consts.changeFilter]: (state, action) => ({ ...state,
		filterString: action.payload
	}),
	[consts.addTodo]: (state, action) => {
		let newArr = state.todoList.concat(action.payload)
		return {...state, todoList: newArr}
	},
  [consts.deleteTodo]: (state, action) => {
		const newTodoList = state.todoList.filter((item, i) => (item.id !== action.payload))
		return { ...state,
			todoList: newTodoList
		};
	},

}


const initialState = InitialState
export const reducers = (state = initialState, action) => {
	const handler = actionHandlers[action.type]
	return handler ? handler(state, action) : state
}

export default reducers
