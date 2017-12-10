import { connect } from 'react-redux'
import Todo from './Todo'
import {changeFilter} from '../../modules/todo'

const mapActionCreators = {
  changeFilter

}

const mapStateToProps = (state) => ({
  todo: state.todo.todoList,
  filterString: state.todo.filterString
})


export default connect(mapStateToProps, mapActionCreators)(Todo)
