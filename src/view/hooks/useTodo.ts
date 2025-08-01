import  React, { useEffect, useState } from "react";
import { type Todo } from "../../types/todoFormate";

export const UseTodo = () =>  {
        const [todo, setTodo] = useState<Todo[]>([]);
        const [task, setTask] = useState<string>('');
        const [complatedArr, setcomplatedArr] = useState<Todo[]>([]);
        const [removedArr, setRemovedArr] = useState<Todo[]>([]);
        const [actives, setActives] = useState<Todo[]>([]);
        const [select, setSelect] = useState<number>(0);

        const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
           setTodo((prev) => [...prev, { id: Math.floor(Math.random() * 100) ,title: task , completed: false}] )
           setTask('')
        }
      
        const handlecompleted = (id:number) => {
          setTodo((todos) => todos.map((todo) => 
           todo.id == id ? {...todo, completed: !todo.completed} : todo
          ))
            const result  = todo.find((item) => !item.completed)
            if(result) setcomplatedArr((item) => [...item, result])
               console.log(removedArr)
        }
      
      
        const removeItem  = (id:number) =>  {
           setTodo((todos) => 
            todos.filter((item) => item.id !== id ? item : null)
          )
      
           const removeArr = todo.find((item) => item.id === id)
           if(removeArr) setRemovedArr((todos) => [...todos, removeArr])
        }
      
        useEffect(() => {
           const result =  todo.filter((item) => item.completed != false)
           if(result.length > 0) setActives(result);
        }, [todo])
      
      
        const clear = () => {
         setTodo(actives)
         setcomplatedArr([])
        }


        return {
            handleClick,
            handlecompleted,
            removeItem,
            clear,
            complatedArr,
            select,
            setSelect,
            actives,
            todo,
            task,
            setTask
        }
}