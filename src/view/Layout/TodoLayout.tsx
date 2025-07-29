import {useState}  from "react"
import { UseTodo } from "../hooks/useTodo";
import { MobileDashboard } from "../Mobile.Dashboard";
import TodoItem from '../../components/TodoItem'
import Dashboard from "../Dashboard";
import MainWrapper from "../MainWrapper";
import Header from "../header";

function TodoLayout() {

  const [darkMode, setDarkMode] = useState(false)
  const {handleClick,handlecompleted,removeItem,clear,complatedArr,select,setSelect,actives,todo, task,setTask} = UseTodo()
  const darkOrLight = () => setDarkMode(!darkMode)

  return <MainWrapper>

     <Header mode={darkMode} darkOrLight={darkOrLight} />

      <form onSubmit={handleClick} className="flex flex-row ">
         <button type='submit'>New Todo</button>
         <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder="create a new todo..." /> 
      </form>

      <div>
      {
        select === 0 ? todo.map((item) => (
           <TodoItem id={item.id} 
           completed={item.completed} title={item.title}
            handlecompleted={handlecompleted} 
            mode={darkMode}
            removeItem={removeItem} />
        )) :  select === 1 ? complatedArr.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) : actives.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) 
      }
      <MobileDashboard num={actives.length} clearComplated={clear} />
      <Dashboard num={actives.length} setSelect={setSelect}  clearComplated={clear} />
      </div>
      <h2>Drang and drop to reorder list </h2>
    </MainWrapper>
}

export default TodoLayout
 