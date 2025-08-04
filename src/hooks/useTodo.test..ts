import  React, { useEffect, useState } from "react";
import { type Todo } from "../types/todoFormate";

export const UseTodo = () =>  {
        const [todos, setTodos] = useState<Todo[]>([]);
        const [newTask, setNewTask] = useState<string>('');
      //   const [complatedArr, setcomplatedArr] = useState<Todo[]>([]);
        const [complatedTodo, setComplatedTodo] = useState<Todo[]>([]);
        const [removedTodos, setRemovedTodos] = useState<Todo[]>([]);
        const [actives, setActives] = useState<Todo[]>([]);
        const [select, setSelect] = useState<number>(0);

        const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault()
           setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) ,title: newTask , completed: false}]);
           setNewTask('')
        }

         
        const complatedTodos = (id:number) => {

         const isComplated = todos.map((todo) => {
            todo.id == id ? {...todo, complated:  !todo.completed}
         })



         setComplatedTodo(isComplated );
         setRemovedTodos(isComplated )

          
            const result  = todo.find((item) => !item.completed)
            if(result) setcomplatedArr((item) => [...item, result])
        }

      
        const clearComplateTodos = () => {
         setTodos(actives)
         setComplatedTodo([])
        }


        return {
            addNewTodo,
            clearComplateTodos
        }
}