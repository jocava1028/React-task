import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext,} from '../context/TaskContext';

function TaskList() {
  const {Tasks} = useContext(TaskContext);

   if (Tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
  } 

  return (
    <div className='grid grid-cols-4 gap-2'>
      {Tasks.map((Tasks) => (
        <TaskCard  key={Tasks.id}Task = {Tasks}
        />
      ))}
    </div>
  );
}

export default TaskList;
