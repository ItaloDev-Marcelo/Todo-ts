import {useState} from 'react';
import { AddTaskService } from '../../application/usecases/AddTaskService';
import { InMemoryTaskRepository } from '../../infrastructure/storage/InMemoryTaskRepository';
import { type Tasks } from '../../domain/entities/TodoTasks';
import { RemoveTaskService } from '../../application/usecases/RemoveTaskService';


const repository = new InMemoryTaskRepository();
const addTaskService = new AddTaskService();
const removeTaskService = new RemoveTaskService(repository);


export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  
  function addTask(title:string) {
     const task = addTaskService.execute(title);
     repository.add(task);
     setTasks([...repository.getAll()])
  }

  function removeTask(id:string) {
    removeTaskService.execute(id);
    setTasks([...repository.getAll()])
  }

  return {tasks, addTask, removeTask}
  
}
