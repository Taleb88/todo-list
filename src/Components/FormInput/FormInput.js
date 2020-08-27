import React, {useState} from 'react';

// Todo Component
function FormInput({addTodo}) {
    // Form Input; Add things to state
    const [value, setValue] = useState('');
  
    // Handle Submit
    const handleSubmit = event => {
      event.preventDefault();
      // If there is no value entered, it cannot be submitted
      if(!value) return; 
        addTodo(value);
        setValue('');
    };

    return (      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="app__todolist-input" 
          value={value} 
          onChange={event => setValue(event.target.value)}
          placeholder="Add a todo" 
        />
      </form>
    );
}

export default FormInput;