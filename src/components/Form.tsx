import React, { useState } from "react";

type AddTask = (name:string) => void
type FormProp = {
  addTask : AddTask
}

const Form = (props:FormProp) => {
    const [name, setName] = useState("");
    function handleSubmit(e:React.FormEvent){
        if (!(name ==="")){
            e.preventDefault()
            props.addTask(name)
            setName("")
        }else{
            e.preventDefault()
            alert("Tasks must have a name")
        }
       
      }
    function handleChange(e:React.ChangeEvent){
        
        setName((e.target as HTMLTextAreaElement).value)
        console.log(name)
      }
  return (
    <form onSubmit={handleSubmit}>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
      value={name}
      onChange={handleChange}
    />
    <button type="submit" className="btn btn__primary btn__lg">
      Add
    </button>
  </form>
  )
}

export default Form
