import React from 'react';

function Todo({todo, index, finishTodo, deleteTodo}) {

    return(
      <div 
        className="app__todolist-todo" 
        style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}
      >
        {todo.display}
  
        <div>
          <button onClick={() => finishTodo(index)}>Done</button>
          <button onClick={() => deleteTodo(index)}>X</button>
        </div>
      </div>
    );
}

export default Todo;