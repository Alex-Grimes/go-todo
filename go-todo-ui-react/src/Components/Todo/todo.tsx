import React from 'react'
import "../Todo/todo.css"

export const Todo = () => {
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
<label></label>
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


