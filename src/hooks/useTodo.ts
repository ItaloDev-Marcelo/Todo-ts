import  React, { useEffect, useState } from "react";
import { type Todo } from "../types/todoFormate";

export const UseTodo = () =>  {
        const [todo, setTodo] = useState<Todo[]>([]);
        const [task, setTask] = useState<string>('');
        const [complatedTodos, setComplatedTodos] = useState<Todo[]>([]);
        const [actives, setActives] = useState<Todo[]>([]);
        const [select, setSelect] = useState<number>(0);

        const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
           setTodo((prev) =>  [...prev, { id: Math.floor(Math.random() * 100) ,title: task , completed: false}] )
           setTask('')
        }
      
        const handlecompleted = (id:number) => {
          setTodo((todos) => todos.map((todo) => 
           todo.id == id ? {...todo, completed: !todo.completed} : todo
          ))
        }
      
      
        const removeItem  = (id:number) =>  {
           setTodo((todos) => 
            todos.filter((item) => item.id !== id ? item : null)
          )
        }
      
        useEffect(() => {
           const result =  todo.filter((item) => item.completed == false)
           const result2  = todo.filter((item) => item.completed)
           if(result) setActives(result);
           if(result2.length > 0) setComplatedTodos(result2);
        }, [todo])
      
      
        const clear = () => {
         setTodo(actives)
         setComplatedTodos([])
        }


        return {
            addNewTodo,
            handlecompleted,
            removeItem,
            clear,
            complatedTodos,
            select,
            setSelect,
            actives,
            todo,
            task,
            setTask
        }
}