var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
  getInitialState: ()=>{
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id:1,
          text: 'walk the dog'
        },
        {
          id:2,
          text: 'feed the cat'
        },
        {
          id:3,
          text: 'Complete react-todo'
        }
      ]
    };
  },
  handleTodo: function(todoText){   
      alert('Hi'+todoText);

  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  render: function () {
  	var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo addTodo={this.handleTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
