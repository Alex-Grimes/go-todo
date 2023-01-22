import React from 'react'
import "../Todo/todo.css"

export const Todo = () => {
    return (
        <div>
        <h1>Todos </h1>

        < button className="clear" >
            Clear completed todos
                </button>

                < div className="prog" >
                        < p >
                                <b></b>< b ></b> completed
                        </p>
                </div>
        < ul className="todos">
            <li className="todo" >
                <input type="checkbox"/>
                <label></label>
                </li>
                </ul>

            < form className="addForm" >
                <label> Add todo </label>
                    < div className= "sl" >
                        <input type= "text" name = "add" id = "add" />
                            <button type="submit" > Add </button>
                    </div>
            </form>
        </div>
  )
}


