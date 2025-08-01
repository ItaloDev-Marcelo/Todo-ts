export interface Todo {
   id: number,
   title: string,
   completed: boolean
}

export interface TodoItemFormate {
     id: number,
     completed: boolean,
     title: string,
     handlecompleted: (id:number) => void,
     removeItem: (id:number) => void,
     mode: boolean
}