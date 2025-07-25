import { type AddNewsTasksUseCase } from "../../domain/usecases/AddTask"; 
import { type Tasks } from "../../domain/entities/TodoTasks";
import { v4 as uuidv4 } from "uuid";

export class AddTaskService implements AddNewsTasksUseCase {
   execute(title: string): Tasks {
      return {
        id: uuidv4(),
        title,
        complete: false
      }
   }
}

