import React, { useState } from "react";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { nanoid } from "nanoid";




function App(props:any) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task:any)=>  <Todo id={task.id} name={task.name} completed={task.completed} key ={task.id} toggleTaskCompleted={toggleTaskCompleted}/>)
  function addTask(name:string){
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask])
  }
  function toggleTaskCompleted(id:any) {
    console.log(tasks[0]);
  }
  
  return (
   < div className="todoapp stack-large">
    <h1>TodoMatic</h1>
   <Form addTask={addTask}/>
    <div className="filters btn-group stack-exception">
      <FilterButton name = "all"/>
      <FilterButton name = "finished"/>
      <FilterButton name = "unfinished" />
    </div>
    <h2 id="list-heading">{taskList.length} tasks remaining</h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading">
     
      {taskList}
    </ul>
    
  </div>


  );
}

export default App;
