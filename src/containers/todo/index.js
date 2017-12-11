import { connect } from 'react-redux'
import {Todo} from './Todo'
import {changeFilter, deleteTodo, addTodo } from '../../modules/todo'

const mapActionCreators = {
  changeFilter,
	deleteTodo,
	addTodo
	

}

const mapStateToProps = (state) => ({
  todo: state.todo.todoList,
  filterString: state.todo.filterString,
	title: state.todo.title,
	description: state.todo.description
})


export default connect(mapStateToProps, mapActionCreators)(Todo)
