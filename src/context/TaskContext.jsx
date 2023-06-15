import { createContext, useState, useEffect} from "react";
import { Tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [Tasks, setTasks ] = useState([])

  function createTask(Task) {
    setTasks([
      ...Tasks,
      {
        title: Task.title,
        id: Tasks.length,
        description: Task.description
    }
  ])
  }

  function deleteTask(Taskid){
    setTasks(Tasks.filter(Tasks => Tasks.id !==Taskid ))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      Tasks,
      deleteTask,
      createTask
    }}>{props.children}</TaskContext.Provider>
  )
}


