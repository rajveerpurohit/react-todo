var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: ()=>{
    return {
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
  render: function () {
  	var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
