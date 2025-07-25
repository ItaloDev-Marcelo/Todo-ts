import {type Tasks} from '../../domain/entities/TodoTasks'

export class InMemoryTaskRepository {
    private tasks: Tasks[] = [];

    add(task:Tasks) { 
        this.tasks.push(task)
    }

    getAll():Tasks[]  {
     return this.tasks
    }

    remove(id:string) {
      this.tasks = this.tasks.filter(task  => task.id !== id)
    }

    
     
}