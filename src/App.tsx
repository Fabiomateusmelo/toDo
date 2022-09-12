import { useState } from "react";
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id:'teste',
      title:'teste',
      completed: true,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        completed:false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById}/>
    </>
  )
}

export default App
