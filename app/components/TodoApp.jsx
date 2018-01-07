var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: ()=>{
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'feed the cat'
        },
        {
          id: uuid(),
          text: 'Complete react-todo'
        }
      ]
    };
  },
  handleTodo: function(todoText){   
      alert('Hi'+todoText);
      this.setState({
        todos:[
          ...this.state.todos,
          {
            id: uuid(),
            text:todoText
          }
        ]
      })
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  render: function () {
  	var {todos} = this.state;
    console.log(todos);
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
