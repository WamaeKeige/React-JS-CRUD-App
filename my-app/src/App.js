import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    details(index){
        let todos = this.state.todos;
        let todo = todos.find(function(todo){
            return todo.counter === index
        });
         console.log('you clicked on'); 
        console.log(todo);
        
    }
     
    removeTodo(index){
        let todos = this.state.todos;
        let todo = todos.find(function(todo){
            return todo.counter === index
        });
        
        todos.splice(todo, 1);
        this.setState({
            todos: todos
        });
    }
    
    addTodo(event){
        event.preventDefault();
        let name = this.refs.name.value;
        let completed = this.refs.completed.value;
        let counter = this.state.counter;
        console.log(counter);
        
        
        let todo ={
            name,
            completed,
            counter 
            
        };
        counter +=1;
        let todos = this.state.todos;
        
        todos.push(todo);
        
        this.setState({
            todos:todos,
            counter:counter  
        });
        this.refs.todoForm.reset();
        
    }
    
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
        this.details = this.details.bind(this);
        this.removeTodo =this.removeTodo.bind(this);
        this.state ={
            todos:[],
            title:'Simple FormData',
            counter:0
        }
    }
    
  render() {
      let title = this.state.title;
      let todos = this.state.todos;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
        </div>
          <form ref="todoForm">
        <input type="text" ref="name" placeholder="What do you need to do?"/>
        <input type="text" ref="completed" placeholder="Is it done Yet?"/>
        <button onClick={this.addTodo}>Add todo</button>
        </form>
        <ul>{todos.map((todo =><li key={todo.counter}>{todo.name}<button onClick={this.removeTodo.bind(null,todo.counter)}>Remove Todo</button><button onClick={this.details.bind(null,todo.counter)}>View Details</button></li>))}</ul>
      </div>
    );
  }
}

export default App;
