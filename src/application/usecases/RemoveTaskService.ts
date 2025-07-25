import { type RemoveTaskUseCase } from "../../domain/usecases/RemoveTask"; 
import type { InMemoryTaskRepository } from "../../infrastructure/storage/InMemoryTaskRepository";

export class RemoveTaskService implements RemoveTaskUseCase{
   constructor(private  repository: InMemoryTaskRepository) {}

   execute(id:string):void{
     this.repository.remove(id)
   }
}

