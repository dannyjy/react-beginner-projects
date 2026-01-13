import { useState, useEffect } from 'react';
import TaskCard from '../ui/TaskCard';

const AllTask = () => {
    const [tasks,setTask] = useState([]);

    const handleCompletedEdit = async (taskid,completed) => {
        const response = await fetch(`http://localhost:8081/task/completed/${taskid}` ,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed})
        });

        if(response.ok){
            setTask((prev) => prev.map((task) => task.taskid === taskid ? {...task, completed} : task))
        }
    }
    
    useEffect(() => {
        const getAllTask = async () => {
            const response = await fetch("http://localhost:8081/tasks")
            const data = await response.json()
            setTask(data)
        }

        getAllTask()
    },[])

  return (
    <div className='flex flex-col gap-2'>
        {tasks.map((task) => <TaskCard key={task.taskid} 
            title={task.title} 
            description={task.description} 
            category={task.category} date={task.createdat} 
            onComplete={() => handleCompletedEdit(task.taskid,!task.completed)}
        />)}
    </div>
  )
}

export default AllTask