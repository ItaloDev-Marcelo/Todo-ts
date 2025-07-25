import {type Tasks} from '../entities/TodoTasks';

export interface AddNewsTasksUseCase {
    execute(title: string): Tasks
}