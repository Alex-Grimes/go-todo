import { ref, computed, } from "vue";
import { defineStore } from "pinia";
import axios from "axios"

//type Todo = { id: string; description: string; isCompleted: boolean };

export const useTodoStore = defineStore("counter", () => {
  const todos = ref([]);
  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.Completed === true)
  );
  const incompleteTodos = computed(() =>
    todos.value.filter((todo) => todo.Completed !== true)
  );


  async function initDB() {
    let lstodos
    await axios({ method: "GET", url: "http://127.0.0.1:8000/todo-all", headers: {"content-type": "application/json" } }).then(result => { 
      console.log(result.data) 
      lstodos = result.data
      todos.value = result.data;
    }).catch( error => { 
        console.error(error);
    })

    if (lstodos === null) {
      todos.value = [];
    } 
  }

  function addTodo(description) {
    todos.value = [
      ...todos.value,
      {
        description,
      },
    ];
    axios({ method: "Post", url: "http://127.0.0.1:8000/todo", data: {Description: description},headers: {"content-type": "application/json" } }).catch( error => { 
        console.error(error);
    });
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function toggleTodo(id) {
    todos.value.forEach((todo) => {
      if (todo.Id === id){
        axios({ method: "Post", url: `http://127.0.0.1:8000/todo/`+ todo.Id, data: {Completed: todo.Completed ? false : true},headers: {"content-type": "application/json" } }).catch( error => { 
          console.error(error);
    });
  }})}

  function clearCompletedTodos() {
    todos.value = todos.value.filter((todo) => todo.Completed === false);
  }

  return {
    todos,
    completedTodos,
    incompleteTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    initDB,
    clearCompletedTodos,
  };
});
