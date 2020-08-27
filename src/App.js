import React, {useState} from 'react';
import FormInput from './Components/FormInput/FormInput';
import Todo from './Components/Todo/Todo';
import './App.scss';
import Logo from './images/logo.jpg';

function App() {  
  /*
    todos - name of state
    setTodos - used to set the state
    useState - hook into state or lifecycle of App component
  */
  const [todos, setTodos] = useState([
    {display: 'Attend night school', isComplete: false},
    {display: 'Play video games', isComplete: false},
  ]);

  // Add todo item; User just presses enter/return on their keyboard
  const addTodo = display => {
    const newTodos = [...todos, {display}];
    setTodos(newTodos); // setTodos - sets the state
  };

  // Complete a todo item
  const finishTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  // Delete a todo item
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); 
  };
  
  return (
    <div className="app">
      <p>Todo List</p>
      <img src={Logo} alt="Logo"/>
      <h5>To add a tudo, press <span>'enter/return'</span> on your keyboard</h5>
      <div className="app__todolist">
        {todos.map((todo, index) => (
          <Todo display={index} index={index} todo={todo} finishTodo={finishTodo} deleteTodo={deleteTodo}/>
        ))}
        <FormInput addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
