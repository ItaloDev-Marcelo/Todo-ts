import { useTaskManager } from "../presetation/hook/useTaskManager"
import { useState } from "react"

const TodoApp = () => {
  const {tasks, addTask, removeTask} = useTaskManager();
  const [newTasks, setNewTasks] = useState('');

  const handleTask = () => {
    if(newTasks) {
      addTask(newTasks)
      setNewTasks('')
    }
  }
  
  return (
    <div>
       <input type='text' value={newTasks} 
       onChange={(e) => setNewTasks(e.target.value)} 
       placeholder="new Task" />
       <button onClick={handleTask}>Add Task</button>

        <div>
          {
            tasks.map((tasks) => (
               <div key={tasks.id}> 
                  <label htmlFor={tasks.id}>
                    <input type='checkbox'  id={tasks.id} />
                    {tasks.title}
                    </label>
                 <button onClick={() => removeTask(tasks.id)}>X</button>
               </div>
            ))
          }
        </div>
    </div>
  )
}

export default TodoApp