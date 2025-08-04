import {useEffect, useState}  from "react"
import { UseTodo } from "../hooks/useTodo";
import { MobileDashboard } from "../ui/components/ControllComponent";
import TodoItem from '../components/TodoItem'
import Dashboard from "../ui/components/Dashboard";
import MainWrapper from "../ui/MainWrapper";
import Header from "../ui/header";
import { FormTheme, TodoControllTheme, TodoTextTheme, TodoWrapperTheme } from "../themes/dark.light";

function TodoLayout() {

  const [darkMode, setDarkMode] = useState(false)
  const {addNewTodo ,handlecompleted,removeItem,clear,complatedTodos,select,setSelect,actives,todo, task,setTask} = UseTodo()
  const darkOrLight = () => setDarkMode(!darkMode)
  const {FormLight,FormDark} = FormTheme
  const {TodoWrapperLightTheme,TodoWrapperDarkTheme} = TodoWrapperTheme
  const { ControllLight,ControllDark }  = TodoControllTheme
  const {DarkText,LightText } = TodoTextTheme
  useEffect(() => {
    const toggle = darkMode ? 'dark' : 'light'
     document.body.className = toggle
  }, [darkMode])



 return <MainWrapper>

     <Header mode={darkMode} darkOrLight={darkOrLight} />

      <form onSubmit={addNewTodo} className={`flex flex-row w-[320px] md:w-[600px] h-[75px] xl:w-[660px] nt:w-[700px] mx-auto  relative top-[-7em] nt:top-[-8em]  px-2 rounded-[4px] transition ease-in-out ${darkMode ? FormDark : FormLight}`}>
         <button type='submit' className=" relative cursor-pointer"><span className="absolute top-6.5 left-2.5 w-[25px] h-[25px] rounded-[25px] outline-Light-Grayish-Blue outline-2 hover:outline-Light-Grayish-Blue-hover"></span></button>
         <input className="w-full relative left-12 " type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder="create a new todo..." /> 
      </form>

      <div className={`relative top-[-5em] nt:top-[-6em] mx-auto  w-[320px] md:w-[600px]  xl:w-[660px] nt:w-[700px]  transition ease-in-out rounded-[3px] px-[.1em] ${darkMode ?TodoWrapperDarkTheme : TodoWrapperLightTheme}`}>
      <div className='tiny '>
        {
        select === 0 ? todo.map((item) => (
           <TodoItem id={item.id} 
           completed={item.completed} title={item.title}
            handlecompleted={handlecompleted} 
            mode={darkMode}
            removeItem={removeItem} />
        )) :  select === 1 ? complatedTodos.length > 0 && complatedTodos.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) : actives.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) 
      }
      </div>
      {todo.length > 0 && <div className="md:hidden"> <MobileDashboard num={actives.length} clearComplated={clear} darkMode={darkMode} /></div> }
      {todo.length > 0 && <div>
         <Dashboard num={actives.length} setSelect={setSelect}  clearComplated={clear} darkMode={darkMode} />
      </div>}
      </div>

      {todo.length > 0  && <div>
         <div className={`relative nt:hidden top-[-2em] w-[320px] md:w-[600px] px-20 mx-auto  xl:w-[660px] h-[60px] rounded-[3px] flex flex-row justify-between items-center ${darkMode ?ControllDark : ControllLight} `}>
          <button onClick={() => setSelect(0)}>All</button>
          <button className="mx-5 items-center" onClick={() => setSelect(2)}>Active</button>
          <button onClick={() => setSelect(1)}>Completed</button>
        </div>
      </div>}
        
      <h2 className={`relative top-[-1em] nt:top-[-3em] ${darkMode ? DarkText : LightText}`}>Drang and drop to reorder list </h2>
    </MainWrapper>
}

export default TodoLayout
 