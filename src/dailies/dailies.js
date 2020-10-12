import React from 'react';
import Task from '../task/task';
import bosses from '../consts/bosses';

function Dailies() {
  const dailies = bosses.map(boss => <Task name={boss.name} img={boss.img} />)
  return (
    <div className="Dailies">
      <h1>Dailies</h1>
      {dailies}
    </div>
  );
}

export default Dailies;
