import {useEffect, useState}  from "react"
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

  // className="px-4 md:px-[14.5em]  xl:px-[17em] nt:px-[20.5rem] relative top-[-3em] nt:top-[-6em] mx-auto bg-yellow-400 "

  useEffect(() => {
    const toggle = darkMode ? 'dark' : 'light'
     document.body.className = toggle
  }, [darkMode])

  const dark = 'flex flex-row bg-Very-Dark-Desaturated-Blue  text-Very-Dark-Grayish-Blue-1 mx-auto w-[320px] md:w-[600px] h-[75px] xl:w-[660px] nt:w-[700px] relative top-[-7em] nt:top-[-8em] px-2 rounded-[4px]';
  const light = 'flex flex-row bg-Very-Light-Gray text-Very-Dark-Grayish-Blue mx-auto w-[320px] md:w-[600px] h-[75px]  xl:w-[660px] nt:w-[700px] relative top-[-7em] nt:top-[-8em]  px-2 rounded-[4px]'
 const MainL = ' relative top-[-5em] nt:top-[-6em] mx-auto  w-[320px] md:w-[600px]  xl:w-[660px] nt:w-[700px] bg-white rounded-[3px] px-[.1em] '
  const MainD = ' relative top-[-5em] nt:top-[-6em] mx-auto  w-[320px] md:w-[600px]  xl:w-[660px] nt:w-[700px] bg-Very-Dark-Desaturated-Blue rounded-[3px] px-[.1em] '
 
 const NavL = 'relative nt:hidden top-[-2em] w-[320px] text-Light-Grayish-Blue  md:w-[600px] px-20 mx-auto  xl:w-[660px] h-[60px] rounded-[3px] bg-white  flex flex-row justify-between items-center'

 const NavD = 'relative nt:hidden top-[-2em] w-[320px] text-Dark-Grayish-Blue md:w-[600px] px-20 mx-auto  xl:w-[660px] h-[60px] rounded-[3px] bg-Very-Dark-Desaturated-Blue  flex flex-row justify-between items-center'


 const darkT = 'relative top-[-1em] nt:top-[-3em] text-Very-Dark-Grayish-Blue';
 const lightT = 'relative top-[-1em] nt:top-[-3em] text-Very-Dark-Grayish-Blue-1'

 return <MainWrapper>

     <Header mode={darkMode} darkOrLight={darkOrLight} />

      <form onSubmit={handleClick} className={darkMode ? dark : light}>
         <button type='submit' className=" relative cursor-pointer"><span className="absolute top-6.5 left-2.5 w-[25px] h-[25px] rounded-[25px] outline-Light-Grayish-Blue outline-2"></span></button>
         <input className="w-full relative left-12 " type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder="create a new todo..." /> 
      </form>

      <div className={darkMode ? MainD : MainL}>
      <div className='tiny '>
        {
        select === 0 ? todo.map((item) => (
           <TodoItem id={item.id} 
           completed={item.completed} title={item.title}
            handlecompleted={handlecompleted} 
            mode={darkMode}
            removeItem={removeItem} />
        )) :  select === 1 ? complatedArr.length > 0 && complatedArr.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) : actives.map((item) => (
             <TodoItem id={item.id} completed={item.completed} title={item.title} handlecompleted={handlecompleted} removeItem={removeItem}  mode={darkMode} />
        )) 
      }
      </div>
      {todo.length > 0 && <MobileDashboard num={actives.length} clearComplated={clear} darkMode={darkMode} />}
      {todo.length > 0 && <div>
         <Dashboard num={actives.length} setSelect={setSelect}  clearComplated={clear} darkMode={darkMode} />
      </div>}
      </div>

      {todo.length > 0  && <div>
         <div className={darkMode ? NavD : NavL}>
          <button  onClick={() => setSelect(0)}>All</button>
          <button className="mx-5 items-center" onClick={() => setSelect(2)}>Active</button>
          <button onClick={() => setSelect(1)}>Completed</button>
        </div>
      </div>}
        
      <h2 className={darkMode ? darkT : lightT}>Drang and drop to reorder list </h2>
    </MainWrapper>
}

export default TodoLayout
 