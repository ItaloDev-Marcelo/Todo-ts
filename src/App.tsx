import { useEffect, useState } from "react"
import TodoItem from './components/TodoItem'
interface Todo {
   id: number,
   title: string,
   completed: boolean
}


function App() {

  const [todo, setTodo] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');
  const [complatedArr, setcomplatedArr] = useState<Todo[]>([]);
  const [removedArr, setRemovedArr] = useState<Todo[]>([]);
  const [actives, setActives] = useState<Todo[]>([]);
  const [select, setSelect] = useState<number>(0);


  const handleClick = () => {
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
     const result =  todo.filter((item) => item.completed == false).map((item) => item)
     if(result) setActives(result)
  }, [todo])


  const clearComplated = () => {
   setTodo(actives)
   setcomplatedArr([])
  }

  

  return (
    <>
      <div>
         <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
         <button onClick={handleClick}>New Todo</button>
      </div>

      {
        select === 0 ? todo.map((item) => (
           <div className='bg-red-400'> <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem} /></div>
        )) :  select === 1 ? complatedArr.map((item) => (
              <div className='bg-blue-400'> <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem} /></div>
        )) : actives.map((item) => (
             <div className='bg-yellow-400'> <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem} /></div>
        )) 
      }

     <div className='dashboard'>
        <p><a href='#Itens-left'> {actives.length} itens left</a></p>
        <div className='flex flex-row justify-between'>
          <button onClick={() => setSelect(0)}>All</button>
          <button onClick={() => setSelect(2)}>Active</button>
          <button onClick={() => setSelect(1)}>Completed</button>
        </div>
        <button onClick={clearComplated}>Clear Completed</button>
     </div>

    </>
  )
}

export default App
 