var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	renderList: function(todos){
		return todos.map((k,i)=>{
			 return <Todo key={k.id} {...k}/>
		});
	},
	render: function(){
		var {todos} = this.props;
		return (
			<div>
				{this.renderList(todos)}
			</div>
		);
	}
})

module.exports = TodoList;