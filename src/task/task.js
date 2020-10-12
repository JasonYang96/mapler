import React, { useState } from 'react';

function Task(props) {
  const [checked, setChecked] = useState(false);

  function flipChecked() {
    setChecked(!checked);
  }

  return (
    <div className="Task" onClick={flipChecked}>
      <img src={props.img} alt={props.name}/> {props.name} <input type="checkbox" id={props.name} name={props.name} value={props.name} checked={checked}></input>
    </div>
  );
}

export default Task;
