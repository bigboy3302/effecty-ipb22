import React, { useState} from 'react';
function ToDo(props) {
  const [rupucis, setRupucis] = useState(props.completed);
  function handleChange(event){
    setRupucis(event.target.checked);
  }
  return (
    <>
      <p>UserId: {props.userId}</p>
      <p>Id: {props.Id}</p>
      <p>title:{props.title}</p>
       <input type="checkbox" 
        checked={rupucis} onChange={handleChange} 
       ></input>
    </>
  );
}

export default ToDo;
