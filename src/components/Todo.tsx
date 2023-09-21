import React, { useState } from "react";

type ToggleTaskCompleted = (name:string) => void

type DeleteTask = (name:string) => void
type EditTask = (name: string, arg1: string) => void

type TodoProp = {
  id: string
      name: string
      completed: boolean
      key : string
      toggleTaskCompleted : ToggleTaskCompleted
      deleteTask:DeleteTask
      editTask: EditTask
}


const Todo = (props: TodoProp) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  function handleChange(e:React.FormEvent) {
    setNewName((e.target as HTMLTextAreaElement).value);
  }
  
  function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
