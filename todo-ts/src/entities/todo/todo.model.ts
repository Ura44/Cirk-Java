export interface ITodo {
    id: number,
    title: string,
    status: boolean
}

export interface ITodoprops extends ITodo{
      setStatus: () => void, 
      DeleteTodo: () => void,
}