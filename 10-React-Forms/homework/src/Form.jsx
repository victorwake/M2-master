import React from 'react';
// import {validate} from './validate';


export function validate(input){
  
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required'
  }else if(!/\S+@\S+\.\S+/.test(input.username)){ //
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required'
  }else if(!/(?=.*[0-9])/.test(input.password)){ // (?=.*[0-9]) significa que la contraseña debe contener al menos un número
    errors.password = 'Password is invalid';
  }
  return errors;
}
export default function Form() {
  //No escalable
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  //Escalable

  const [input, setInput] = React.useState({
    username: '', //email 
    password: '' //password
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  

  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          className={`${errors.username && 'danger'}`} 
          type="text" name="username" 
          value={input.username} 
          onChange={handleInputChange} //onChange={e => setUsername(e.target.value)} 
        />
        {
          errors.username && <p className="danger">{errors.username}</p>
        }
      </div>
      <div>
        <label>Password:</label>
        <input 
          className={`${errors.password && 'danger'}`} 
          type="password" name="password" 
          value={input.password} 
          onChange={handleInputChange}
        />
        {
          errors.password ? <p className="danger">{errors.password}</p> : null
        }
      </div>
      <input type="submit" />
    </form>

  );
}