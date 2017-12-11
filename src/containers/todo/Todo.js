import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todo extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			title:'',
			description: ''
		}
	}
	
	
	 render() {
		 
	return (
	<div>	
	<section className="container">
	<div className="row">
		<div className="col-xs12 col-md-4 col-md-offset-4">
			<form name="todoForm">
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text" className="form-control" id="title" name="title" placeholder="Title" required value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
					<label htmlFor="description"> Description </label>
					<input type="text" className="form-control" id="description" name="description" placeholder="description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
	
				</div>
				<button type="submit" className="btn btn-default" onClick={e =>  {e.preventDefault(); this.props.addTodo({title: this.state.title, description: this.state.description})}} >Submit</button>
			</form>
		</div>
	</div>
</section>

	<section className="container">
	<form className="col-xs-12 col-md-2">
		<h4> Filter by: </h4>
		<div className="form-group">
			<label htmlFor="titleFilter"> Title</label>
			<input type="text" className="form-control" id="titleFilter" name="titleFilter" placeholder="Title" onChange={(e => this.props.changeFilter(e.target.value))} />
		</div>
	</form>
	<div className="col-xs-12 col-md-10 todo-list_wrapper">
		<div className="row">
			{this.props.todo.filter(f => (f.title.toLowerCase().includes(this.props.filterString.toLowerCase()) || f.description.toLowerCase().includes(this.props.filterString.toLowerCase())) ).map((e, i)=>
			<div className="col-xs-6 col-md-4 col-lg-3 todo-item" key={i}>
				<a className="delBtn"><span onClick={()=> this.props.deleteTodo(e.id)} className="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
				<h3>{e.title}</h3>
				<div>{e.description}</div>
				<span>{e.created_at}</span>
			</div> )}
		</div>
	</div>
</section>
</div>
	
		)
	}
}


// Todo.propTypes = propTypes
// Todo.defaultProps = defaultProps
