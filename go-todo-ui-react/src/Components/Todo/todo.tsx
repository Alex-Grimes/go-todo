import React, { useEffect, useState } from 'react'
import "../Todo/todo.css"
import axios from "axios"
import { ITodos } from '../../Interfaces/ITodo'

export const Todo = () => {

    const [todos, settodos] = useState<ITodos>([])

    useEffect(() => {
      return () => {
        axios({ method: "GET", url: "http://127.0.0.1:8000/todo-all", headers: {"content-type": "application/json" } }).then(result => { 
            console.log(result.data) 
            settodos(result.data)
          }).catch( error => { 
              console.error(error);
          })
      };
    }, [])


    return (
<>
<main>
<h1>Todos</h1>

<button className="clear">
Clear completed todos
</button>
<div className="prog" >
<p>
<b></b> out of
<b></b> completed
</p>
</div>
    <ul className="todos">
<li className="todo">
<input type="checkbox" name="isCompleted" />
<label>{todos[0].Description}</label>
<label>{todos[0].Completed}</label>
<label>{todos[0].Id}</label>
</li>
</ul><form className="addForm">
<label>Add todo</label><div className="sl">
<input type="text" name="add" id="add" v-model="currentTodoInp" />
<button type="submit">Add</button>
</div>
</form>
</main>
</>
  )
}


